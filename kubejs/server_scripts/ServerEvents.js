// Color to Integer Color
const dyeColors = {
    red: 11743532,
    orange: 15435844,
    yellow: 15790320,
    lime: 4312372,
    green: 3887386,
    cyan: 2651799,
    light_blue: 3949738,
    blue: 6719955,
    purple: 8073150,
    magenta: 14516874,
    pink: 14188952,
    brown: 5320730,
    gray: 4408131,
    light_gray: 11250603,
    black: 0,
    white: 15790320
};

// ----------------------
// Group 1: Dye Flares
// ----------------------
const flareData = {};
colors.forEach(color => {
    flareData[`submerged:${color}_flare`] = {
        colors: [dyeColors[color]], // single color fireworks
        loot: [
            `colors:${color}_sapling`,
            `colors:${color}_dirt`,
            `opolisutilities:sapling_grower`,
            `64x minecraft:${color}_terracotta`,
        ]
    };
});

BlockEvents.rightClicked(event => {
    const itemId = event.getItem().id;
    const data = flareData[itemId];
    if (!data) return;

    const pos = event.getHitResult().getBlockPos();
    const x = pos.getX();
    const y = pos.getY();
    const z = pos.getZ();

    // Firework with multiple colors
    const colorString = data.colors.map(c => c.toString()).join(",");
    event.server.runCommandSilent(
        `summon firework_rocket ${x} ${y + 1} ${z} ` +
        `{LifeTime:60,FireworksItem:{id:firework_rocket,count:1,components:{fireworks:{flight_duration:3,explosions:[{shape:"large_ball",has_twinkle:0,has_trail:1,colors:[I;${colorString}],fade_colors:[I;${colorString}]}]}}}}`
    );
    event.getItem().shrink(1);

        const itemsString = data.loot
            .map((lootItem, index) => {
                // allow "64x minecraft:foo", "64 x minecraft:foo", or "minecraft:foo"
                const match = lootItem.trim().match(/^\s*(\d+)\s*x\s*(.+)$/i);
                const parsed = match ? parseInt(match[1], 10) : 1;
                // if parseInt somehow fails, fallback to 1
                const count = Number.isNaN(parsed) ? 1 : Math.min(Math.max(parsed, 1), 127);
                const id = match ? match[2].trim() : lootItem.trim();
                return `{Slot:${index}b,id:"${id}",Count:${count}b}`;
            })
            .join(",");

    

    // Drop barrel crate
    event.server.scheduleInTicks(100, () => {
        event.entity.tell(`Loot Incoming at ${x} ${y} ${z}`);

        // Check if it's a reward flare or a dye flare
        const customName = "Supply Crate";
        const noDrop = ",DropItem:0b";

        event.server.runCommandSilent(
            `summon falling_block ${x} ${y + 100} ${z} ` +
            `{BlockState:{Name:"minecraft:barrel"},Time:1${noDrop},TileEntityData:{CustomName:'{"text":"${customName}"}',Items:[${itemsString}]}}`
        );

        event.entity.tell(`${customName} Spawned`);
    });
});

// World Events
PlayerEvents.tick(event => {
    let player = event.player
    let level = player.level

    // --- Mining Fatigue near Trial Spawner ---

    /*
    const range = 7 
    let foundSpawner = false

    let pos = player.blockPosition()

    // Loop through nearby blocks
    for (let x = -range; x <= range; x++) {
        for (let y = -range; y <= range; y++) {
            for (let z = -range; z <= range; z++) {
                let checkPos = pos.offset(x, y, z)
                let block = level.getBlock(checkPos)
                if (block.id === 'minecraft:trial_spawner') {
                    foundSpawner = true
                    break
                }
            }
            if (foundSpawner) break
        }
        if (foundSpawner) break
    }

    if (foundSpawner) {
        player.addTag('submerged:mining_fatigue')
    } else {
        player.removeTag('submerged:mining_fatigue')
    }

    */

    let fullHazmat =
        player.getFeetArmorItem().hasTag('submerged:hazmat') &&
        player.getChestArmorItem().hasTag('submerged:hazmat') &&
        player.getHeadArmorItem().hasTag('submerged:hazmat') &&
        player.getLegsArmorItem().hasTag('submerged:hazmat');

    // Diving gear protection from high altitude
    if (
        player.getFeetArmorItem().hasTag('submerged:diving_gear') &&
        player.getChestArmorItem().hasTag('submerged:diving_gear') &&
        player.getHeadArmorItem().hasTag('submerged:diving_gear') &&
        player.getLegsArmorItem().hasTag('submerged:diving_gear')
    ) {
        if (player.y > 149) player.attack(3)
        return
    }

    // Environmental toxicity
    if (!fullHazmat && (player.isInWater() || player.isInRain() || player.isInBubbleColumn() || player.y > 149)) {
        player.attack(3)
        return
    }

    // Holding toxic gravel
    if (!fullHazmat && player.getInventory().contains('submerged:toxic_gravel')) {
        player.attack(5)
        return
    }
})