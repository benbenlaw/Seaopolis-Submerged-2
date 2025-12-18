LootJS.lootTables(event => {
    
    //Rewards
    event.create('submerged:trial_spheres/skeleton', LootType.CHEST)
    
        .createPool(pool => {pool.addEntry(LootEntry.of("shops:copper_coin").setCount([2, 5]))})
        .createPool(pool => {
            pool.addEntry('minecraft:iron_helmet')
            pool.addEntry('minecraft:iron_chestplate')
            pool.addEntry('minecraft:iron_leggings')
            pool.addEntry('minecraft:iron_boots')
        })
        
        .createPool(pool => {
            pool.addEntry('minecraft:iron_sword')
            pool.addEntry('minecraft:iron_sword[casting:equipment_level=1,casting:equipment_experience=0,casting:ignite=1]')
            pool.addEntry('minecraft:iron_sword[casting:equipment_level=1,casting:equipment_experience=0,casting:torch_placing=2]')
        })
        
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:bone").setCount([3, 7])) 
            pool.addEntry(LootEntry.of("minecraft:arrow").setCount([3, 7])) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:bone").setCount([3, 7])) 
        })
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:ominous_drink")) 
        })
        
    //Ominous
    event.create('submerged:trial_spheres/ominous_skeleton', LootType.CHEST)
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([5, 8]))
        })

        .createPool(pool => {
            pool.addEntry('submerged:creeper_trial_sphere')
        })

        .createPool(pool => {
            pool.addEntry('shops:pinata_flare[shops:pinata_id="submerged:relics"]')
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:skeleton_skull").setCount([1, 2])) 
        })
        
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:bow")) 
            pool.addEntry(LootEntry.of("forcecraft:force_bow")) 
        })


    
    //Equipment
    event.create('submerged:equipment/skeleton', LootType.EQUIPMENT)
        .createPool(pool => {
            pool.addEntry('iceandfire:armor_copper_metal_helmet')
            pool.addEntry('minecraft:iron_helmet')
        })
        .createPool(pool => {
            pool.addEntry('iceandfire:armor_copper_metal_chestplate')
            pool.addEntry('minecraft:iron_chestplate')
        })
        .createPool(pool => {
            pool.addEntry('iceandfire:armor_copper_metal_leggings')
            pool.addEntry('minecraft:iron_leggings')
        })
        .createPool(pool => {
            pool.addEntry('iceandfire:armor_copper_metal_boots')
            pool.addEntry('minecraft:iron_boots')
        })
        .createPool(pool => {
            pool.addEntry('minecraft:bow')
            pool.addEntry('forcecraft:force_bow')
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
            {data:{equipment:{loot_table:"submerged:equipment/skeleton"},entity:{id:"minecraft:skeleton",CustomName:"\"Bowed Skeleton\""}},weight:1},
            {data:{equipment:{loot_table:"submerged:equipment/zombie"},entity:{id:"minecraft:skeleton",CustomName:"\"Armored Skeleton\""}},weight:1}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/skeleton",weight:1}]
    },
    ominous_config:{
        spawn_range:3,
        total_mobs:16,
        simultaneous_mobs:8,
        total_mobs_added_per_player:4,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:15,
        spawn_potentials:[
            {data:{equipment:{loot_table:"submerged:equipment/skeleton"},entity:{id:"minecraft:skeleton",CustomName:"\"Ominous Bowed Skeleton\""}},weight:1},
            {data:{equipment:{loot_table:"submerged:equipment/zombie"},entity:{id:"minecraft:skeleton",CustomName:"\"Ominous Armored Skeleton\""}},weight:1}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/ominous_skeleton",weight:1}]
    }
}]

*/