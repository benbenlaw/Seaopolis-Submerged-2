//In World Recipes

ServerEvents.recipes(event => {

    //No Szazabi
    event.recipes.inworldrecipes.block_interaction(
        'right', 'minecraft:spawner', 'artifacts:mimic_spawn_egg',
        false, true, false, true).outputBlockState('minecraft:air')
    .id('submerged:no_mimic_spawner')

    //Sunken Gravel
    createInWorldConversion("submerged:star_gravel", "atlantis:sunken_gravel", false, 200, "atlantis:atlantis")

    //Activated Atlantis Portal Frame
    event.recipes.inworldrecipes.block_interaction(
        'right', 'submerged:unactive_atlantis_portal_frame', 'atlantis:orb_of_atlantis',
        false, true, false, true).outputBlockState('submerged:active_atlantis_portal_frame')
    .id('submerged:active_atlantis_portal_frame')

    //Nether Force Bricks
    event.custom({
        "type": "inworldrecipes:block_conversion",
        "block_to_convert": "forcecraft:force_brick",
        "converted_block": "submerged:nether_force_bricks",
        "pop_block": false,
        "requires_sunlight": false,
        "dimension": "minecraft:the_nether",
        "duration": 200
    }).id('submerged:nether_force_bricks')

    //Dragon Eggs
    const dragonColors = ['red', 'white', 'green', 'bronze', 'gray', 'blue', 'sapphire', 'silver', 'electric', 'amethyst', 'copper', 'black']
    dragonColors.forEach(color => {
        dragonEggs(color)
    })

    //Dragon Egg Conversion Function
    function dragonEggs(color) {
        event.recipes.inworldrecipes.block_interaction(
            'right', `iceandfire:dragonscale_${color}`, 'minecraft:dragon_egg',
            false, true, false, true).results([`iceandfire:dragonegg_${color}`])
        .id(`submerged:dragon_egg_${color}`)
    }

    //'pneumaticcraft:empty_pcb[pneumaticcraft:uv_exposure=100]'
    event.custom({
        'type': 'inworldrecipes:drop_item_in_fluid',
        'dropped_items':[{'item': 'pneumaticcraft:empty_pcb', "count": 1}],
        'fluid': 'casting:molten_silicon',
        'consume_fluid': false,
        'results': [{'item': {'id': 'pneumaticcraft:empty_pcb', "count": 1, "components": {"pneumaticcraft:uv_exposure": 100}}}]
    }).id('submerged:fully_exposed_pcb')

    //Grass Block
    event.recipes.inworldrecipes.block_interaction(
        'right', 'minecraft:dirt', 'minecraft:bone_meal',
        false, true, false, true).outputBlockState('minecraft:grass_block')
    .id('submerged:grass_block')

    //Log Sheets
    event.recipes.inworldrecipes.block_interaction(
        'left', '#minecraft:logs', 'totemic:totem_whittling_knife',
        true, false, true, false).results(['6x opolisutilities:log_sheet'])
    .id('submerged:log_sheet')

    //Living Gravel
    event.custom({
        'type': 'inworldrecipes:drop_item_in_fluid',
        'dropped_items': [{'item': 'opolisutilities:ender_pearl_fragment', "count": 8}, {'item': 'submerged:assembled_gravel', "count": 8}],
        'fluid': 'mob_grinding_utils:fluid_xp',
        'consume_fluid': true,
        'results': [{'item': {'id': 'submerged:living_gravel', "count": 8}}]
    }).id('submerged:living_gravel')

    //Exothermic Water
    event.custom({
        'type': 'inworldrecipes:drop_item_in_fluid_converts_fluid',
        'dropped_item':{'item': 'opolisutilities:mini_coal','count': 4},
        'fluid': 'minecraft:water',
        'new_fluid': 'submerged:exothermic_water',
        'destroy_items': true
    }).id('submerged:exothermic_water')

    //Totemic Infused Water
    event.custom({
        'type': 'inworldrecipes:drop_item_in_fluid_converts_fluid',
        'dropped_item':{'item': 'submerged:totemic_infused_gravel','count': 64},
        'fluid': 'minecraft:water',
        'new_fluid': 'submerged:totemic_infused_water',
        'destroy_items': true
    }).id('submerged:totemic_infused_water')

    //Salt Water
    event.custom({
        'type': 'inworldrecipes:drop_item_in_fluid_converts_fluid',
        'dropped_item':{'item': 'mekanism:block_salt','count': 1},
        'fluid': 'minecraft:water',
        'new_fluid': 'submerged:salt_water',
        'destroy_items': true
    }).id('submerged:salt_water')

    //In World Conversion Function
    function createInWorldConversion(blockToConvert, convertedBlock, popItem, duration, dimension) {
        event.custom({
        "type": "inworldrecipes:block_conversion",
        "block_to_convert": blockToConvert,
        "converted_block": convertedBlock,
        "pop_block": popItem,
        "requires_sunlight": false,
        "duration": duration,
        "dimension": dimension
        }).id(`fractured:${convertedBlock.split(':')[1]}_conversion`)
    }
})