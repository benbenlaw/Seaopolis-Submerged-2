LootJS.lootTables(event => {
    
    //Rewards
    event.create('submerged:trial_spheres/blaze', LootType.CHEST)
    
        .createPool(pool => {pool.addEntry(LootEntry.of("shops:copper_coin").setCount([9, 15]))})
    
        .createPool(pool => {
            pool.addEntry('minecraft:blaze_rod')
            pool.addEntry('minecraft:blaze_powder')

        })
        
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([5, 10])) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of('hybrid-aquatic:yeti_crab_claw').setCount([3, 7])) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:blaze_rod").setCount([4, 6])) 
            pool.addEntry(LootEntry.of("minecraft:blaze_powder").setCount([4, 12])) 
        })
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:ominous_drink")) 
        })
        
    //Ominous
    event.create('submerged:trial_spheres/ominous_blaze', LootType.CHEST)
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([15, 19]))
        })

        .createPool(pool => {
            pool.addEntry('submerged:fortress_trial_sphere')
        })

        .createPool(pool => {
            pool.addEntry('shops:pinata_flare[shops:pinata_id="submerged:relics"]')
        })
        .createPool(pool => {
            pool.addEntry('shops:pinata_flare[shops:pinata_id="submerged:relics"]')
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:blaze_rod").setCount([12, 15]))
            pool.addEntry(LootEntry.of("minecraft:blaze_powder").setCount([12, 15]))
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
            {data:{entity:{id:"minecraft:blaze",CustomName:"\"Trial Blaze\""}},weight:1}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/blaze",weight:1}]
    },
    ominous_config:{
        spawn_range:3,
        total_mobs:27,
        simultaneous_mobs:12,
        total_mobs_added_per_player:4,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:15,
        spawn_potentials:[
            {data:{entity:{id:"minecraft:blaze",CustomName:"\"Ominous Trial Blaze\""}},weight:1}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/ominous_blaze",weight:1}]
    }
}]

*/