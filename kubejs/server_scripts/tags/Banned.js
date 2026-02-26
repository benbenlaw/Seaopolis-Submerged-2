//Banned Items and Blocks
ServerEvents.tags('item', event => {

    //Banned Items
    event.get('submerged:banned_items').add([
        'nautec:cast_iron_nugget',
        'nautec:cast_iron_ingot',
        'nautec:cast_iron_rod',
        'nautec:gear',
        'nautec:whisk',
        'refinedstorage:raw_basic_processor', 
        'refinedstorage:raw_advanced_processor', 
        'refinedstorage:raw_improved_processor',
        'opolisutilities:cloche',
        'opolisutilities:catalogue',
        'opolisutilities:catalogue_book',
        'opolisutilities:smart_crafting_table',
        'nanomirai:simple_circuit',
        'nanomirai:normal_circuit',
        'mekmm:basic_planting_factory',
        'mekmm:advanced_planting_factory',
        'mekmm:elite_planting_factory',
        'mekmm:ultimate_planting_factory',
        'mekmm:planting_station',
        'extendedae:infinity_water_cell',
        'extendedae:infinity_cobblestone_cell',
        'relics:jellyfish_necklace',
        'relics:infinity_ham',
        'ae2:calculation_processor_press', 
        'ae2:engineering_processor_press', 
        'ae2:logic_processor_press', 
        'ae2:silicon_press', 
        'ae2:name_press', 
        'extendedae:concurrent_processor_press',
        'extendedae:circuit_cutter',
        'forcecraft:time_torch',
        'everythingcopper:copper_helmet',
        'everythingcopper:copper_chestplate',
        'everythingcopper:copper_leggings',
        'everythingcopper:copper_boots',
        'hybrid-aquatic:diving_boots',
        'hybrid-aquatic:diving_leggings',
        'hybrid-aquatic:diving_suit',
        'hybrid-aquatic:diving_helmet',
        'everythingcopper:copper_sword',
        'everythingcopper:copper_pickaxe',
        'everythingcopper:copper_hoe',
        'everythingcopper:copper_shovel',
        'everythingcopper:copper_axe',
        'iceandfire:sapphire_block',
        'pneumaticcraft:uv_light_box',
        'draconicevolution:reactor_core',
        'submerged:nether_star_block',
    ])

    //Mimic Loot
    event.get('rarcompat:mimificable').remove(['relics:jellyfish_necklace', 'relics:infinity_ham'])
    event.get('rarcompat:mimic_loot').remove(['relics:jellyfish_necklace', 'relics:infinity_ham'])
})

ServerEvents.tags('block', event => {

})

