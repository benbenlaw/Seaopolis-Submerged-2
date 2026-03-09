LootJS.lootTables(event => {
    
    //Rewards
    event.create('submerged:trial_spheres/fortress', LootType.CHEST)
    
        .createPool(pool => {pool.addEntry(LootEntry.of("shops:copper_coin").setCount([11, 17]))})
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:netherrack").setCount([32, 64])) 
            pool.addEntry(LootEntry.of("minecraft:nether_brick").setCount([32, 64])) 
            pool.addEntry(LootEntry.of("minecraft:nether_bricks").setCount([32, 64])) 
        })
        
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([7, 12])) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:ghast_tear").setCount([4, 6])) 
            pool.addEntry(LootEntry.of("minecraft:gunpowder").setCount([4, 12])) 
            pool.addEntry(LootEntry.of("minecraft:blaze_rod").setCount([4, 6])) 
            pool.addEntry(LootEntry.of("minecraft:blaze_powder").setCount([4, 12])) 
            pool.addEntry(LootEntry.of("minecraft:wither_skeleton_skull").setCount([4, 6])) 
            pool.addEntry(LootEntry.of("minecraft:coal").setCount([4, 12])) 
        })
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:ominous_drink")) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of('hybrid-aquatic:flower_crab_claw').setCount([3, 7])) 
        })
        
    //Ominous
    event.create('submerged:trial_spheres/ominous_fortress', LootType.CHEST)
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([17, 21]))
        })

        .createPool(pool => {
            pool.addEntry('submerged:bastion_trial_sphere')
        })

        .createPool(pool => {
            pool.addEntry('minecraft:netherite_upgrade_smithing_template')
        })

        .createPool(pool => {
            pool.addEntry('shops:pinata_flare[shops:pinata_id="submerged:relics"]')
        })
        .createPool(pool => {
            pool.addEntry('shops:pinata_flare[shops:pinata_id="submerged:relics"]')
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:golden_apple").setCount([1, 2]))
            pool.addEntry(LootEntry.of("minecraft:diamond_horse_armor").setCount([1, 1]))
            pool.addEntry(LootEntry.of("minecraft:golden_horse_armor").setCount([1, 1]))
            pool.addEntry(LootEntry.of("minecraft:iron_horse_armor").setCount([1, 1]))
            pool.addEntry(LootEntry.of("minecraft:leather_horse_armor").setCount([1, 1]))
        })
    
})


/* THIS IS THE COMMAND TO GIVE A TRIAL SPAWNER WITH THE CORRECT DATA IF IT GETS LOST

/give @p trial_spawner[block_entity_data={id:"trial_spawner",
    normal_config:{
        spawn_range:3,
        total_mobs:20,
        simultaneous_mobs:7,
        total_mobs_added_per_player:4,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:20,
        spawn_potentials:[
            {data:{equipment:{loot_table:"submerged:equipment/wither_skeleton"},entity:{id:"minecraft:wither_skeleton",CustomName:"\"Trial Wither Skeleton\""}},weight:1},
            {data:{entity:{id:"minecraft:blaze",CustomName:"\"Trial Blaze\""}},weight:1},
            {data:{entity:{id:"minecraft:magma_cube",Size:2,CustomName:"\"Trial Magam Slime\""}},weight:1}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/fortress",weight:1}]
    },
    ominous_config:{
        spawn_range:3,
        total_mobs:25,
        simultaneous_mobs:9,
        total_mobs_added_per_player:5,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:15,
        spawn_potentials:[
            {data:{equipment:{loot_table:"submerged:equipment/wither_skeleton"},entity:{id:"minecraft:wither_skeleton",CustomName:"\"Ominous Trial Wither Skeleton\""}},weight:1},
            {data:{entity:{id:"minecraft:blaze",CustomName:"\"Ominous Trial Blaze\""}},weight:1},
            {data:{entity:{id:"minecraft:magma_cube",Size:2,CustomName:"\"Ominous Trial Magam Slime\""}},weight:1}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/ominous_fortress",weight:1}]
    }
}]

*/