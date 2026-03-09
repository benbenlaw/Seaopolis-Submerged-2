LootJS.lootTables(event => {
    
    //Rewards
    event.create('submerged:trial_spheres/slime', LootType.CHEST)
    
        .createPool(pool => {pool.addEntry(LootEntry.of("shops:copper_coin").setCount([8, 14]))})
    
        .createPool(pool => {
            pool.addEntry('minecraft:slime_ball')
            pool.addEntry('forcecraft:red_chu_jelly')
            pool.addEntry('forcecraft:green_chu_jelly')
            pool.addEntry('forcecraft:blue_chu_jelly')
            pool.addEntry('forcecraft:gold_chu_jelly')
        })
        
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([3, 7])) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:slime_ball").setCount([4, 12])) 
            pool.addEntry(LootEntry.of("forcecraft:red_chu_jelly").setCount([3, 7])) 
            pool.addEntry(LootEntry.of("forcecraft:green_chu_jelly").setCount([3, 7]))
            pool.addEntry(LootEntry.of("forcecraft:blue_chu_jelly").setCount([3, 7]))
            pool.addEntry(LootEntry.of("forcecraft:gold_chu_jelly").setCount([2, 5]))
        })
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:ominous_drink")) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of('hybrid-aquatic:lightfoot_crab_claw').setCount([3, 7])) 
        })
        
    //Ominous
    event.create('submerged:trial_spheres/ominous_slime', LootType.CHEST)
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([12, 15]))
        })

        .createPool(pool => {
            pool.addEntry('submerged:spider_trial_sphere')
        })

        .createPool(pool => {
            pool.addEntry('shops:pinata_flare[shops:pinata_id="submerged:relics"]')
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:slime_ball").setCount([12, 15]))
            pool.addEntry(LootEntry.of("reliquary:slime_pearl").setCount([1, 3]))
            pool.addEntry(LootEntry.of("minecraft:slime_block").setCount([1, 3]))
            pool.addEntry(LootEntry.of("minecraft:sticky_piston").setCount([2, 5]))
        })

})


/* THIS IS THE COMMAND TO GIVE A TRIAL SPAWNER WITH THE CORRECT DATA IF IT GETS LOST

/give @p trial_spawner[block_entity_data={id:"trial_spawner",
    normal_config:{
        spawn_range:3,
        total_mobs:14,
        simultaneous_mobs:6,
        total_mobs_added_per_player:2,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:20,
        spawn_potentials:[
            {data:{entity:{id:"minecraft:slime",Size:3,CustomName:"\"Trial Slime\""}},weight:1},
            {data:{entity:{id:"minecraft:slime",Size:2,CustomName:"\"Trial Slime\""}},weight:2},
            {data:{entity:{id:"minecraft:slime",Size:1,CustomName:"\"Trial Slime\""}},weight:2}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/slime",weight:1}]
    },
    ominous_config:{
        spawn_range:3,
        total_mobs:24,
        simultaneous_mobs:10,
        total_mobs_added_per_player:4,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:15,
        spawn_potentials:[
            {data:{entity:{id:"minecraft:slime",Size:3,CustomName:"\"Ominous Trial Slime\""}},weight:1},
            {data:{entity:{id:"minecraft:slime",Size:2,CustomName:"\"Ominous Trial Slime\""}},weight:2},
            {data:{entity:{id:"minecraft:slime",Size:1,CustomName:"\"Ominous Trial Slime\""}},weight:2}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/ominous_slime",weight:1}]
    }
}]

*/