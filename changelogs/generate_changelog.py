import json
import requests
import os
import re

# =====================
# CONFIG
# =====================
API_KEY = os.getenv("CURSEFORGE_API_KEY")  # must be set in GitHub Secrets
CACHE_FILE = "cf_cache.json"
MODS_MARKER = "<!-- MODS_CHANGELOG -->"

# =====================
# PATH SETUP
# =====================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # changelogs/
CHANGELOG_DIR = BASE_DIR
MANIFEST_PATH = os.path.join(BASE_DIR, "manifest.json")
OLD_MANIFEST_PATH = os.path.join(BASE_DIR, "manifest_old.json")
CACHE_FILE = os.path.join(BASE_DIR, CACHE_FILE)

# =====================
# HELPERS
# =====================

def find_latest_changelog(directory):
    """Find latest versioned changelog MODPACK-x.y.md"""
    pattern = re.compile(r"^.+-(\d+(?:\.\d+)*)\.md$")
    candidates = []

    for f in os.listdir(directory):
        m = pattern.match(f)
        if not m:
            continue
        version = tuple(int(v) for v in m.group(1).split("."))
        candidates.append((version, f))

    if not candidates:
        raise RuntimeError("No versioned changelog found")
    candidates.sort(reverse=True)
    return os.path.join(directory, candidates[0][1])

def load_manifest(path):
    if not os.path.exists(path):
        return {}
    with open(path, encoding="utf-8") as f:
        data = json.load(f)
    # Normalize IDs as integers to avoid type mismatches
    return {int(e["projectID"]): int(e["fileID"]) for e in data.get("files", [])}

def save_manifest(old_path, new_path):
    with open(new_path, encoding="utf-8") as src, open(old_path, "w", encoding="utf-8") as dst:
        dst.write(src.read())

def save_cache(cache):
    with open(CACHE_FILE, "w", encoding="utf-8") as f:
        json.dump(cache, f, indent=2, ensure_ascii=False)

def get_mod_info(project_id, file_id, cache):
    key = f"{project_id}:{file_id}"
    if key in cache:
        return cache[key]

    try:
        project_resp = requests.get(
            f"https://api.curseforge.com/v1/mods/{project_id}",
            headers={"x-api-key": API_KEY},
            timeout=10
        )
        project_resp.raise_for_status()
        mod_name = project_resp.json()["data"]["name"]
    except:
        mod_name = f"Unknown ({project_id})"

    try:
        files_resp = requests.get(
            f"https://api.curseforge.com/v1/mods/{project_id}/files",
            headers={"x-api-key": API_KEY},
            timeout=10
        )
        files_resp.raise_for_status()
        version = next(
            (f["fileName"] for f in files_resp.json()["data"] if f["id"] == file_id),
            "Unknown"
        )
    except:
        version = "Unknown"

    info = {"mod_name": mod_name, "version": version}
    cache[key] = info
    return info

def wrap_details(title, items):
    if not items:
        return ""
    lines = "\n".join(f"- {i}" for i in items)
    return f"<details>\n  <summary>{title} ({len(items)})</summary>\n\n{lines}\n\n</details>\n\n"

def inject_mods_changelog(changelog_path, mods_content):
    with open(changelog_path, "r", encoding="utf-8") as f:
        text = f.read()
    if MODS_MARKER not in text:
        raise RuntimeError(f"Marker {MODS_MARKER} not found in {changelog_path}")
    new_text = text.replace(MODS_MARKER, mods_content.strip())
    with open(changelog_path, "w", encoding="utf-8") as f:
        f.write(new_text)

# =====================
# MAIN SCRIPT
# =====================

# Find latest versioned changelog
CHANGELOG_PATH = find_latest_changelog(CHANGELOG_DIR)
print(f"📝 Using changelog: {os.path.basename(CHANGELOG_PATH)}")

# Load cache
if os.path.exists(CACHE_FILE):
    with open(CACHE_FILE, encoding="utf-8") as f:
        cache = json.load(f)
else:
    cache = {}

# Load manifests
old_manifest = load_manifest(OLD_MANIFEST_PATH)   # previous version
new_manifest = load_manifest(MANIFEST_PATH)       # current version

print(f"🟢 Old mods: {len(old_manifest)}, New mods: {len(new_manifest)}")
print("Old keys:", list(old_manifest.keys()))
print("New keys:", list(new_manifest.keys()))

# Compute diff
added, removed, updated = [], [], []

for pid, fid in new_manifest.items():
    if pid not in old_manifest:
        info = get_mod_info(pid, fid, cache)
        added.append(f"{info['mod_name']} ({info['version']})")
    elif old_manifest[pid] != fid:
        old_info = get_mod_info(pid, old_manifest[pid], cache)
        new_info = get_mod_info(pid, fid, cache)
        updated.append(f"{new_info['mod_name']}: {old_info['version']} → {new_info['version']}")

for pid, fid in old_manifest.items():
    if pid not in new_manifest:
        info = get_mod_info(pid, fid, cache)
        removed.append(f"{info['mod_name']} ({info['version']})")

# Build mods changelog
mods_changelog = ""
mods_changelog += wrap_details("Added", added)
mods_changelog += wrap_details("Removed", removed)
mods_changelog += wrap_details("Updated", updated)
if not mods_changelog:
    mods_changelog = "_No mod changes this version._\n"

# Inject into changelog
inject_mods_changelog(CHANGELOG_PATH, mods_changelog)

# Save cache
save_cache(cache)

# Save current manifest as old for next run
save_manifest(OLD_MANIFEST_PATH, MANIFEST_PATH)

print("✅ Mods changelog generated and injected successfully!")
