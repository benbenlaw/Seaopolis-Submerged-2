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