LootJS.lootTables(event => {
    
    //Rewards
    event.create('submerged:trial_spheres/bastion', LootType.CHEST)
    
        .createPool(pool => {pool.addEntry(LootEntry.of("shops:copper_coin").setCount([12, 18]))})
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:basalt").setCount([32, 64])) 
            pool.addEntry(LootEntry.of("minecraft:polished_blackstone_bricks").setCount([32, 64])) 
            pool.addEntry(LootEntry.of("minecraft:cracked_polished_blackstone_bricks").setCount([32, 64])) 
        })
        
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([8, 13])) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:gold_nugget").setCount([16, 32])) 
            pool.addEntry(LootEntry.of("minecraft:leather").setCount([16, 32])) 
            pool.addEntry(LootEntry.of("minecraft:rotten_flesh").setCount([16, 32])) 
            pool.addEntry(LootEntry.of("minecraft:porkchop").setCount([16, 32])) 
        })
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:ominous_drink")) 
        })
        
    //Ominous
    event.create('submerged:trial_spheres/ominous_bastion', LootType.CHEST)
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([18, 22]))
        })

        //.createPool(pool => {
        //    pool.addEntry('submerged:add_new_key_here_trial_sphere')
        //})

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
            pool.addEntry(LootEntry.of("minecraft:netherite_upgrade_smithing_template").setCount([1, 2]))
            pool.addEntry(LootEntry.of("minecraft:crying_obsidian").setCount([4, 12]))
            pool.addEntry(LootEntry.of('minecraft:piglin_banner_pattern').setCount([4, 12]))
        })
        
    //Equipment
    event.create('submerged:equipment/brute', LootType.EQUIPMENT)
        .createPool(pool => {pool.addEntry('minecraft:golden_helmet')})
        .createPool(pool => {pool.addEntry('minecraft:golden_chestplate')})
        .createPool(pool => {pool.addEntry('minecraft:golden_leggings')})
        .createPool(pool => {pool.addEntry('minecraft:golden_boots')})
        .createPool(pool => {
            pool.addEntry('minecraft:diamond_axe')
            pool.addEntry('minecraft:golden_axe')
            pool.addEntry('minecraft:netherite_axe')
    })
})


/* THIS IS THE COMMAND TO GIVE A TRIAL SPAWNER WITH THE CORRECT DATA IF IT GETS LOST

/give @p trial_spawner[block_entity_data={id:"trial_spawner",
    normal_config:{
        spawn_range:3,
        total_mobs:20,
        simultaneous_mobs:4,
        total_mobs_added_per_player:4,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:20,
        spawn_potentials:[
            {data:{equipment:{loot_table:"submerged:equipment/brute"},entity:{id:"minecraft:piglin_brute",CustomName:"\"Trial Piglin Brute\""}},weight:1},
            {data:{entity:{id:"minecraft:hoglin",CustomName:"\"Trial Hoglin\""}},weight:1},
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/bastion",weight:1}]
    },
    ominous_config:{
        spawn_range:3,
        total_mobs:25,
        simultaneous_mobs:5,
        total_mobs_added_per_player:5,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:15,
        spawn_potentials:[
            {data:{equipment:{loot_table:"submerged:equipment/brute"},entity:{id:"minecraft:piglin_brute",CustomName:"\"Ominous Trial Piglin Brute\""}},weight:1},
            {data:{entity:{id:"minecraft:hoglin",CustomName:"\"Ominous Trial Hoglin\""}},weight:1},
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/ominous_bastion",weight:1}]
    }
}]

*/