LootJS.modifiers(event => {
    
    colors.forEach(color => {
        event.addBlockModifier(`minecraft:${color}_terracotta`).removeLoot(`*`).addLoot(`4x submerged:${color}_terracotta_rocks`)
    })


})

/*
LootJS.lootTables(event => {
    event.getLootTable("minecraft:gameplay/fishing/fish")
    .firstPool()
    .addEntry(LootEntry.of('nautec:burnt_coil').withWeight(1))
    .addEntry(LootEntry.of('nautec:ancient_valve').withWeight(1))
    .addEntry(LootEntry.of('nautec:broken_whisk').withWeight(1))
    .addEntry(LootEntry.of('nautec:rusty_gear').withWeight(1))
})
*/