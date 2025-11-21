LootJS.lootTables(event => {
    
    //Starting Crates
    colors.forEach(color => {
        event.create(`submerged:crates/${color}_starting`, LootType.CHEST)
        .createPool(pool => {
            pool.addEntry(LootEntry.of(`submerged:${color}_dirt_pile`).setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of(`colors:${color}_sapling`))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of('opolisutilities:sapling_grower'))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of(`submerged:${color}_terracotta_rocks`).setCount([32, 64]).randomChance(0.5))
            pool.addEntry(LootEntry.of(`minecraft:${color}_terracotta`).setCount([32, 64]).randomChance(0.5))
        })
    })
})
 