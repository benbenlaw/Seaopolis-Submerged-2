LootJS.lootTables(event => {
    
    //Terracotta
    colors.forEach(color => {
        event.create(`submerged:pinatas/${color}_terracotta`, LootType.CHEST)
        .createPool(pool => {
            pool.addEntry(LootEntry.of(`submerged:${color}_terracotta_rocks`).setCount([32, 64]).randomChance(0.5))
            pool.addEntry(LootEntry.of(`minecraft:${color}_terracotta`).setCount([32, 64]).randomChance(0.5))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of(`submerged:${color}_terracotta_rocks`).setCount([32, 64]).randomChance(0.5))
            pool.addEntry(LootEntry.of(`minecraft:${color}_terracotta`).setCount([32, 64]).randomChance(0.5))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of(`submerged:${color}_terracotta_rocks`).setCount([32, 64]).randomChance(0.5))
            pool.addEntry(LootEntry.of(`minecraft:${color}_terracotta`).setCount([32, 64]).randomChance(0.5))
        })
    })
})
