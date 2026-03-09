LootJS.lootTables(event => {
    
    //Rewards
    event.create('submerged:trial_spheres/pirate', LootType.CHEST)
    
        .createPool(pool => {pool.addEntry(LootEntry.of("shops:copper_coin").setCount([7, 12]))})
        
        .createPool(pool => {
            pool.addEntry('lfpirates:pirate_tier_1_helmet')
            pool.addEntry('lfpirates:pirate_tier_2_helmet')
            pool.addEntry('lfpirates:pirate_tier_3_helmet')
            pool.addEntry('lfpirates:pirate_tier_1_chestplate')
            pool.addEntry('lfpirates:pirate_tier_2_chestplate')
            pool.addEntry('lfpirates:pirate_tier_3_chestplate')
            pool.addEntry('lfpirates:pirate_tier_1_leggings')
            pool.addEntry('lfpirates:pirate_tier_2_leggings')
            pool.addEntry('lfpirates:pirate_tier_3_leggings')
            pool.addEntry('lfpirates:pirate_tier_1_boots')
            pool.addEntry('lfpirates:pirate_tier_2_boots')
            pool.addEntry('lfpirates:pirate_tier_3_boots')
            
        })

        .createPool(pool => {
            pool.addEntry('lfpirates:hook')
            pool.addEntry('lfpirates:iron_cutlass')
            pool.addEntry('lfpirates:bone_cutlass')
            pool.addEntry('lfpirates:poison_bone_cutlass')
            pool.addEntry('lfpirates:iron_cutlass[casting:equipment_level=1,casting:equipment_experience=0,casting:sharpness=5]')
            pool.addEntry('lfpirates:bone_cutlass[casting:equipment_level=1,casting:equipment_experience=0,casting:unbreaking=3]')
            pool.addEntry('lfpirates:poison_bone_cutlass[casting:equipment_level=1,casting:equipment_experience=0,casting:ignite=true]')
        })
        
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([3, 7])) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:bone").setCount([3, 7])) 
            pool.addEntry(LootEntry.of("lfpirates:tannedleather").setCount([3, 7])) 
        })
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:ominous_drink")) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of('hybrid-aquatic:vampire_crab_claw').setCount([3, 7])) 
        })
        
    //Ominous
    event.create('submerged:trial_spheres/ominous_pirate', LootType.CHEST)
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([12, 15]))
        })

        .createPool(pool => {
            pool.addEntry('submerged:slime_trial_sphere')
        })

        .createPool(pool => {
            pool.addEntry('shops:pinata_flare[shops:pinata_id="submerged:relics"]')
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("lfpirates:skull_1_helmet"))
            pool.addEntry(LootEntry.of("lfpirates:skull_2_helmet"))
            pool.addEntry(LootEntry.of("lfpirates:skull_3_helmet"))
            pool.addEntry(LootEntry.of("lfpirates:skull_4_helmet"))
            pool.addEntry(LootEntry.of("lfpirates:skull_5_helmet"))
        })
        
        .createPool(pool => {
            pool.addEntry('lfpirates:iron_cutlass[casting:equipment_level=1,casting:equipment_experience=0,casting:sharpness=5]')
            pool.addEntry('lfpirates:bone_cutlass[casting:equipment_level=1,casting:equipment_experience=0,casting:unbreaking=3]')
            pool.addEntry('lfpirates:poison_bone_cutlass[casting:equipment_level=1,casting:equipment_experience=0,casting:ignite=true]')
        })


    
    //Equipment
    event.create('submerged:equipment/pirate', LootType.EQUIPMENT)
        .createPool(pool => {
            pool.addEntry('lfpirates:pirate_tier_1_helmet')
            pool.addEntry('lfpirates:pirate_tier_2_helmet')
            pool.addEntry('lfpirates:pirate_tier_3_helmet')
        })
        .createPool(pool => {
            pool.addEntry('lfpirates:pirate_tier_1_chestplate')
            pool.addEntry('lfpirates:pirate_tier_2_chestplate')
            pool.addEntry('lfpirates:pirate_tier_3_chestplate')
        })
        .createPool(pool => {
            pool.addEntry('lfpirates:pirate_tier_1_leggings')
            pool.addEntry('lfpirates:pirate_tier_2_leggings')
            pool.addEntry('lfpirates:pirate_tier_3_leggings')
        })
        .createPool(pool => {
            pool.addEntry('lfpirates:pirate_tier_1_boots')
            pool.addEntry('lfpirates:pirate_tier_2_boots')
            pool.addEntry('lfpirates:pirate_tier_3_boots')
        })
        .createPool(pool => {
            pool.addEntry('lfpirates:hook')
            pool.addEntry('lfpirates:iron_cutlass')
            pool.addEntry('lfpirates:bone_cutlass')
            pool.addEntry('lfpirates:poison_bone_cutlass')
    })


    event.create('submerged:equipment/pillager', LootType.EQUIPMENT)
        .createPool(pool => {
            pool.addEntry('lfpirates:pirate_tier_1_helmet')
            pool.addEntry('lfpirates:pirate_tier_2_helmet')
            pool.addEntry('lfpirates:pirate_tier_3_helmet')
        })
        .createPool(pool => {
            pool.addEntry('lfpirates:pirate_tier_1_chestplate')
            pool.addEntry('lfpirates:pirate_tier_2_chestplate')
            pool.addEntry('lfpirates:pirate_tier_3_chestplate')
        })
        .createPool(pool => {
            pool.addEntry('lfpirates:pirate_tier_1_leggings')
            pool.addEntry('lfpirates:pirate_tier_2_leggings')
            pool.addEntry('lfpirates:pirate_tier_3_leggings')
        })
        .createPool(pool => {
            pool.addEntry('lfpirates:pirate_tier_1_boots')
            pool.addEntry('lfpirates:pirate_tier_2_boots')
            pool.addEntry('lfpirates:pirate_tier_3_boots')
        })
        .createPool(pool => {
            pool.addEntry('minecraft:crossbow')
    })
})


/* THIS IS THE COMMAND TO GIVE A TRIAL SPAWNER WITH THE CORRECT DATA IF IT GETS LOST

/give @p trial_spawner[block_entity_data={id:"trial_spawner",
    normal_config:{
        spawn_range:3,
        total_mobs:12,
        simultaneous_mobs:5,
        total_mobs_added_per_player:2,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:20,
        spawn_potentials:[
            {data:{equipment:{loot_table:"submerged:equipment/pirate"},entity:{id:"minecraft:vindicator",CustomName:"\"Pirate Vindicator\""}},weight:1},
            {data:{equipment:{loot_table:"submerged:equipment/pillager"},entity:{id:"minecraft:pillager",CustomName:"\"Pirate Pillager\""}},weight:1}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/pirate",weight:1}]
    },
    ominous_config:{
        spawn_range:3,
        total_mobs:20,
        simultaneous_mobs:8,
        total_mobs_added_per_player:4,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:15,
        spawn_potentials:[
            {data:{equipment:{loot_table:"submerged:equipment/pirate"},entity:{id:"minecraft:vindicator",CustomName:"\"Ominous Vindicator Pillager\""}},weight:1},
            {data:{equipment:{loot_table:"submerged:equipment/pillager"},entity:{id:"minecraft:pillager",CustomName:"\"Ominous Pirate Pillager\""}},weight:1}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/ominous_pirate",weight:1}]
    }
}]

*/