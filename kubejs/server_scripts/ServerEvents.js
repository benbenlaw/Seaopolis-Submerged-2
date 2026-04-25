// World Events
PlayerEvents.tick(event => {
    let player = event.player
    let level = player.level
       
    let helmet = player.getHeadArmorItem()
    let chestplate = player.getChestArmorItem()
    let leggings = player.getLegsArmorItem()
    let boots = player.getFeetArmorItem()

    let fullHazmat =
        (boots.hasTag('submerged:hazmat') &&
        chestplate.hasTag('submerged:hazmat') &&
        helmet.hasTag('submerged:hazmat') &&
        leggings.hasTag('submerged:hazmat')) ||
        player.tags.contains('cured');

    let fullDiving =
        (boots.hasTag('submerged:diving_gear') &&
        chestplate.hasTag('submerged:diving_gear') &&
        helmet.hasTag('submerged:diving_gear') &&
        leggings.hasTag('submerged:diving_gear')) ||
        player.tags.contains('cured');

    let inWater = player.isInWater() || player.isInRain() || player.isInBubbleColumn();
    let inToxicAir = player.y > 149 || player.getInventory().contains('submerged:toxic_gravel')

    if(inWater && event.server.getTickCount() % 40 == 0 && !fullDiving) {
        if (helmet.hasTag('submerged:diving_gear')) helmet.setDamageValue(helmet.damageValue + 1)
        if (chestplate.hasTag('submerged:diving_gear')) chestplate.setDamageValue(chestplate.damageValue + 1)
        if (leggings.hasTag('submerged:diving_gear')) leggings.setDamageValue(leggings.damageValue + 1)
        if (boots.hasTag('submerged:diving_gear')) boots.setDamageValue(boots.damageValue + 1)

    }


    if (inWater && !fullDiving) {
        player.attack(3)
        return
    }

    if (inToxicAir && !fullHazmat) {
        player.attack(player.getInventory().contains('submerged:toxic_gravel') ? 5 : 3)
        return
    }
})

// Prevents bats from dying unless killed by a player thanks @Szszabi
EntityEvents.death(event => { 
    const entityType = event.entity.type
    if (entityType === "minecraft:bat") { 
        if (!event.source.player) { 
            event.cancel(); 
        } 
    } 
});

//Disable spawning of specific mobs until fixed inside their mods thanks @punnycomixyt
EntityEvents.spawned(event =>{
    if (event.entity.type == 'iceandfire:siren') {
        event.cancel();
    }
    if (event.entity.type == 'iceandfire:sea_serpent') {
        event.cancel();
    }
    if (event.entity.type == 'hybrid-aquatic:yeti_crab') {
        event.cancel();
    }
})

PlayerEvents.loggedIn(event => {
    let player = event.player
    let server = event.server

    server.runCommandSilent(`kill @e[type=hybrid-aquatic:yeti_crab]`)
    server.runCommandSilent(`kill @e[type=iceandfire:sea_serpent]`)
    server.runCommandSilent(`kill @e[type=iceandfire:siren]`)

})
