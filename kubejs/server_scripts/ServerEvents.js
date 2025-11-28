// World Events
PlayerEvents.tick(event => {
    let player = event.player
    let level = player.level

    let fullHazmat =
        player.getFeetArmorItem().hasTag('submerged:hazmat') &&
        player.getChestArmorItem().hasTag('submerged:hazmat') &&
        player.getHeadArmorItem().hasTag('submerged:hazmat') &&
        player.getLegsArmorItem().hasTag('submerged:hazmat');

    let fullDiving =
        player.getFeetArmorItem().hasTag('submerged:diving_gear') &&
        player.getChestArmorItem().hasTag('submerged:diving_gear') &&
        player.getHeadArmorItem().hasTag('submerged:diving_gear') &&
        player.getLegsArmorItem().hasTag('submerged:diving_gear');

    let inWater = player.isInWater() || player.isInRain() || player.isInBubbleColumn();
    let inToxicAir = player.y > 149 || player.getInventory().contains('submerged:toxic_gravel')

    if (inWater && !fullDiving) {
        player.attack(3)
        return
    }

    if (inToxicAir && !fullHazmat) {
        player.attack(player.getInventory().contains('submerged:toxic_gravel') ? 5 : 3)
        return
    }
})
