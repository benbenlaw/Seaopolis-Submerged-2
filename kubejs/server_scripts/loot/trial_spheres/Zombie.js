LootJS.lootTables(event => {
    
    //Rewards
    event.create('submerged:trial_spheres/zombie', LootType.CHEST)
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([2, 5]))
        })
        
        .createPool(pool => {
            pool.addEntry('iceandfire:armor_copper_metal_helmet')
            pool.addEntry('iceandfire:armor_copper_metal_chestplate')
            pool.addEntry('iceandfire:armor_copper_metal_leggings')
            pool.addEntry('iceandfire:armor_copper_metal_boots')
        })
        
        .createPool(pool => {
            pool.addEntry('iceandfire:copper_sword')
            pool.addEntry('iceandfire:copper_sword[casting:equipment_level=1,casting:equipment_experience=0,casting:ignite=1]')
            pool.addEntry('iceandfire:copper_sword[casting:equipment_level=1,casting:equipment_experience=0,casting:torch_placing=2]')
        })
        
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:rotten_flesh").setCount([3, 7])) 
        })
        
        .createPool(pool => {
            pool.addEntry(LootEntry.of('hybrid-aquatic:coconut_crab_claw').setCount([3, 7])) 
        })
        
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:ominous_drink")) 
        })
        
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:nautilus_shell")) 
            pool.addEntry(LootEntry.of("minecraft:rotten_flesh").setCount([3, 7])) 
        })
    
    
    //Ominous
    event.create('submerged:trial_spheres/ominous_zombie', LootType.CHEST)
    
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([5, 8]))
        })

        .createPool(pool => {
            pool.addEntry('submerged:skeleton_trial_sphere')
        })

        .createPool(pool => {
            pool.addEntry('shops:pinata_flare[shops:pinata_id="submerged:relics"]')
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:nautilus_shell")) 
            pool.addEntry(LootEntry.of("minecraft:zombie_head").setCount([1, 2])) 
        })

        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:carrot")) 
            pool.addEntry(LootEntry.of("minecraft:potato")) 
        })

    
    //Equipment
    event.create('submerged:equipment/zombie', LootType.EQUIPMENT)
        .createPool(pool => {pool.addEntry('iceandfire:armor_copper_metal_helmet')})
        .createPool(pool => {pool.addEntry('iceandfire:armor_copper_metal_chestplate')})
        .createPool(pool => {pool.addEntry('iceandfire:armor_copper_metal_leggings')})
        .createPool(pool => {pool.addEntry('iceandfire:armor_copper_metal_boots')})
        .createPool(pool => {
            pool.addEntry('iceandfire:copper_sword')
            pool.addEntry('minecraft:stone_sword')
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
            {data:{equipment:{loot_table:"submerged:equipment/zombie"},entity:{id:"minecraft:zombie",CustomName:"\"Armored Zombie\""}},weight:1},
            {data:{equipment:{loot_table:"submerged:equipment/zombie"},entity:{id:"minecraft:drowned",CustomName:"\"Armored Drowned\""}},weight:1}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/zombie",weight:1}]
    },
    ominous_config:{
        spawn_range:3,
        total_mobs:16,
        simultaneous_mobs:8,
        total_mobs_added_per_player:4,
        simultaneous_mobs_added_per_player:2,
        ticks_between_spawn:15,
        spawn_potentials:[
            {data:{equipment:{loot_table:"submerged:equipment/zombie"},entity:{id:"minecraft:zombie",CustomName:"\"Ominous Armored Zombie\""}},weight:1},
            {data:{equipment:{loot_table:"submerged:equipment/zombie"},entity:{id:"minecraft:drowned",CustomName:"\"Ominous Armored Drowned\""}},weight:1}
        ],
        loot_tables_to_eject:[{data:"submerged:trial_spheres/ominous_zombie",weight:1}]
    }
}]

*/