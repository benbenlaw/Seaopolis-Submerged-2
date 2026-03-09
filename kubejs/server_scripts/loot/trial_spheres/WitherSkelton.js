LootJS.lootTables(event => {
    
    //Rewards
    event.create('submerged:trial_spheres/wither_skeleton', LootType.CHEST)
    
        .createPool(pool => {pool.addEntry(LootEntry.of("shops:copper_coin").setCount([8, 14]))})
    
        .createPool(pool => {
            pool.addEntry('minecraft:wither_skeleton_skull')
            pool.addEntry('minecraft:coal')

        })
        
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([4, 9])) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:wither_skeleton_skull").setCount([4, 6])) 
            pool.addEntry(LootEntry.of("minecraft:coal").setCount([4, 12])) 
        })
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:ominous_drink")) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of('hybrid-aquatic:fiddler_crab_claw').setCount([3, 7])) 
        })
        
    //Ominous
    event.create('submerged:trial_spheres/ominous_wither_skeleton', LootType.CHEST)
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([14, 18]))
        })

        .createPool(pool => {
            pool.addEntry('submerged:blaze_trial_sphere')
        })

        .createPool(pool => {
            pool.addEntry('shops:pinata_flare[shops:pinata_id="submerged:relics"]')
        })
        .createPool(pool => {
            pool.addEntry('shops:pinata_flare[shops:pinata_id="submerged:relics"]')
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:wither_skeleton_skull").setCount([12, 15]))
            pool.addEntry(LootEntry.of("minecraft:coal").setCount([12, 15]))
        })
    
        
    //Equipment
    event.create('submerged:equipment/wither_skeleton', LootType.EQUIPMENT)
        .createPool(pool => {
            pool.addEntry('minecraft:diamond_sword')
            pool.addEntry('minecraft:golden_sword')
            pool.addEntry('minecraft:netherite_sword')
            pool.addEntry('ae2:fluix_sword')
    })


})


/* THIS IS THE COMMAND TO GIVE A TRIAL SPAWNER WITH THE CORRECT DATA IF IT GETS LOST

/give @p trial_spawner[block_entity_data={id:"trial_spawner",
    normal_config:{
        spawn_range:3,
        total_mobs:16,
        simultaneous_mobs:7,
        total_mobs_added_per_player:2,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:20,
        spawn_potentials:[
            {data:{equipment:{loot_table:"submerged:equipment/wither_skeleton"},entity:{id:"minecraft:wither_skeleton",CustomName:"\"Trial Wither Skeleton\""}},weight:1}

        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/wither_skeleton",weight:1}]
    },
    ominous_config:{
        spawn_range:3,
        total_mobs:27,
        simultaneous_mobs:12,
        total_mobs_added_per_player:4,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:15,
        spawn_potentials:[
            {data:{equipment:{loot_table:"submerged:equipment/wither_skeleton"},entity:{id:"minecraft:wither_skeleton",CustomName:"\"Ominous Trial Wither Skeleton\""}},weight:1}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/ominous_wither_skeleton",weight:1}]
    }
}]

*/