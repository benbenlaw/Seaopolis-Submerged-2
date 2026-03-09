LootJS.lootTables(event => {
    
    //Rewards
    event.create('submerged:trial_spheres/creeper', LootType.CHEST)
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([2, 5]))
        })
        
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:gunpowder").setCount([3, 7])) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:gunpowder").setCount([3, 7])) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:iron_coin").setCount([1, 2])) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of('hybrid-aquatic:ghost_crab_claw').setCount([3, 7])) 
        })
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:ominous_drink")) 
        })
        
    //Ominous
    event.create('submerged:trial_spheres/ominous_creeper', LootType.CHEST)
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([5, 8]))
        })

        .createPool(pool => {
            pool.addEntry('submerged:pirate_trial_sphere')
        })

        .createPool(pool => {
            pool.addEntry('shops:pinata_flare[shops:pinata_id="submerged:relics"]')
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:creeper_head").setCount([1, 2])) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:tnt").setCount([4, 8])) 
        })
        
})


/* THIS IS THE COMMAND TO GIVE A TRIAL SPAWNER WITH THE CORRECT DATA IF IT GETS LOST

/give @p trial_spawner[block_entity_data={id:"trial_spawner",
    normal_config:{
        spawn_range:3,
        total_mobs:10,
        simultaneous_mobs:5,
        total_mobs_added_per_player:2,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:20,
        spawn_potentials:[
            {data:{entity:{id:"minecraft:creeper",CustomName:"\"Creeper\""}},weight:1},
            {data:{entity:{id:"mekanismadditions:baby_creeper",CustomName:"\"Baby Creeper\""}},weight:1},
            {data:{entity:{id:"forcecraft:creeper_tot",CustomName:"\"Creeper Tot\""}},weight:1}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/creeper",weight:1}]
    },
    ominous_config:{
        spawn_range:3,
        total_mobs:16,
        simultaneous_mobs:8,
        total_mobs_added_per_player:4,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:15,
        spawn_potentials:[
            {data:{entity:{id:"minecraft:creeper",CustomName:"\"Ominous Creeper\""}},weight:1},
            {data:{entity:{id:"mekanismadditions:baby_creeper",CustomName:"\"Ominous Baby Creeper\""}},weight:1},
            {data:{entity:{id:"forcecraft:creeper_tot",CustomName:"\"Ominous Creeper Tot\""}},weight:1}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/ominous_creeper",weight:1}]
    }
}]

*/