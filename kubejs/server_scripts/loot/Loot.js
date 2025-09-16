LootJS.modifiers(event => {
    
    colors.forEach(color => {
        event.addBlockModifier(`minecraft:${color}_terracotta`).removeLoot(`*`).addLoot(`4x submerged:${color}_terracotta_rocks`)
    })

    //Remove Diamond and Emerald Ore Loot
    event.addBlockModifier('minecraft:diamond_ore').removeLoot('*')
    event.addBlockModifier('minecraft:emerald_ore').removeLoot('*')
    event.addBlockModifier('minecraft:deepslate_diamond_ore').removeLoot('*')
    event.addBlockModifier('minecraft:deepslate_emerald_ore').removeLoot('*')

    //Ancient Debris
    event.addBlockModifier('minecraft:ancient_debris').removeLoot('*').addLoot('submerged:raw_ancient_debris')

})