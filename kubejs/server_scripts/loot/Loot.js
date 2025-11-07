LootJS.modifiers(event => {
    
    colors.forEach(color => {

        // Rocks
        const coloredTerracottaRocks = LootEntry.alternative(
            LootEntry.of(`minecraft:${color}_terracotta`).matchTool("#minecraft:pickaxes"),
            LootEntry.of(`4x submerged:${color}_terracotta_rocks`)
        )

        event.addBlockModifier(`minecraft:${color}_terracotta`).removeLoot('*').addLoot(coloredTerracottaRocks)
    })

    //Remove Diamond and Emerald Ore Loot
    event.addBlockModifier('minecraft:diamond_ore').removeLoot('*')
    event.addBlockModifier('minecraft:emerald_ore').removeLoot('*')
    event.addBlockModifier('minecraft:deepslate_diamond_ore').removeLoot('*')
    event.addBlockModifier('minecraft:deepslate_emerald_ore').removeLoot('*')

    //Ancient Debris
    event.addBlockModifier('minecraft:ancient_debris').removeLoot('*').addLoot('submerged:raw_ancient_debris')

    //Entity Tweaks
    event.addEntityModifier('minecraft:witch').removeLoot('minecraft:redstone').removeLoot('minecraft:glass_bottle').removeLoot('minecraft:glowstone_dust')
    event.addEntityModifier('minecraft:skeleton').removeLoot('minecraft:bow')
    event.addEntityModifier('minecraft:drowned').removeLoot('minecraft:copper_ingot')
    event.addEntityModifier('minecraft:zombie').removeLoot('minecraft:iron_ingot')

    event.addEntityModifier('minecraft:cow').addLoot('minecraft:leather')

})