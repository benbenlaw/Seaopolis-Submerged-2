LootJS.lootTables(event => {
    
    //Rewards
    event.create('submerged:trial_spheres/spider', LootType.CHEST)
    
        .createPool(pool => {pool.addEntry(LootEntry.of("shops:copper_coin").setCount([8, 14]))})
    
        .createPool(pool => {
            pool.addEntry('minecraft:spider_eye')
            pool.addEntry('minecraft:string')

        })
        
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([5, 8])) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:spider_eye").setCount([4, 12])) 
            pool.addEntry(LootEntry.of("minecraft:string").setCount([4, 12])) 
        })
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:ominous_drink")) 
        })
        
    //Ominous
    event.create('submerged:trial_spheres/ominous_spider', LootType.CHEST)
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([12, 15]))
        })

        .createPool(pool => {
            pool.addEntry('submerged:wither_skeleton_trial_sphere')
        })

        .createPool(pool => {
            pool.addEntry('shops:pinata_flare[shops:pinata_id="submerged:relics"]')
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:spider_eye").setCount([12, 15]))
            pool.addEntry(LootEntry.of("minecraft:string").setCount([12, 15]))
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
            {data:{entity:{id:"minecraft:spider",CustomName:"\"Trial Spider\""}},weight:2},
            {data:{entity:{id:"minecraft:cave_spider",Size:2,CustomName:"\"Trial Spider\""}},weight:1},
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/spider",weight:1}]
    },
    ominous_config:{
        spawn_range:3,
        total_mobs:27,
        simultaneous_mobs:12,
        total_mobs_added_per_player:4,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:15,
        spawn_potentials:[
            {data:{entity:{id:"minecraft:spider",CustomName:"\"Trial Spider\""}},weight:2},
            {data:{entity:{id:"minecraft:cave_spider",Size:2,CustomName:"\"Trial Spider\""}},weight:1},
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/ominous_spider",weight:1}]
    }
}]

*/