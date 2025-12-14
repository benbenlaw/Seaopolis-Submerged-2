ServerEvents.tags('item', event => {

    //Colored Items
    colors.forEach(color => {
        event.get('submerged:colored_apples').add(`colors:${color}_apple`)
        event.get('submerged:colored_saplings').add(`colors:${color}_sapling`)
        event.get('submerged:colored_logs').add(`colors:${color}_log`)
        event.get('submerged:colored_dirt').add(`colors:${color}_dirt`)
        event.get('submerged:colored_planks').add(`colors:${color}_planks`)
        event.get('submerged:colored_leaves').add(`colors:${color}_leaves`)
        event.get('submerged:colored_crafting_tables').add(`colors:${color}_crafting_table`)
        event.get('submerged:colored_short_grass').add(`colors:${color}_short_grass`)
    })

    //Resources
    createResourceTag('copper', 'alltheores:copper_nugget', 'minecraft:copper_ingot', 'minecraft:copper_block')
    createResourceTag('tin', 'alltheores:tin_nugget', 'alltheores:tin_ingot', 'alltheores:tin_block')
    createResourceTag('aluminum', 'alltheores:aluminum_nugget', 'alltheores:aluminum_ingot', 'alltheores:aluminum_block')
    createResourceTag('bronze', 'alltheores:bronze_nugget', 'alltheores:bronze_ingot', 'alltheores:bronze_block')
    createResourceTag('zinc', 'alltheores:zinc_nugget', 'alltheores:zinc_ingot', 'alltheores:zinc_block')
    createResourceTag('lapis', 'minecraft:lapis_lazuli', 'minecraft:lapis_block')
    createResourceTag('iron', 'minecraft:iron_nugget', 'minecraft:iron_ingot', 'minecraft:iron_block')
    createResourceTag('gold', 'minecraft:gold_nugget', 'minecraft:gold_ingot', 'minecraft:gold_block')
    createResourceTag('osmium', 'alltheores:osmium_nugget', 'alltheores:osmium_ingot', 'alltheores:osmium_block')
    createResourceTag('lead', 'alltheores:lead_nugget', 'alltheores:lead_ingot', 'alltheores:lead_block')
    createResourceTag('uranium', 'alltheores:uranium_nugget', 'alltheores:uranium_ingot', 'alltheores:uranium_block')
    createResourceTag('iridium', 'alltheores:iridium_nugget', 'alltheores:iridium_ingot', 'alltheores:iridium_block')
    createResourceTag('platinum', 'alltheores:platinum_nugget', 'alltheores:platinum_ingot', 'alltheores:platinum_block')
    createResourceTag('solclipsium', 'submerged:solclipsium_nugget', 'submerged:solclipsium_ingot', 'submerged:solclipsium_block')

    function createResourceTag(resource, nugget, ingot, block) {
        event.get(`submerged:resources/${resource}`).add(nugget, ingot, block);
    }

    //Duck Skins
    event.get('submerged:duck_skins').add(['cute_companions_ducks:duck_collar', 'cute_companions_ducks:duck_crow', 'cute_companions_ducks:duck_donald', 'cute_companions_ducks:duck_parrot_01', 'cute_companions_ducks:duck_shopping_pants', 'cute_companions_ducks:duck_tshirt_black', 'cute_companions_ducks:duck_tshirt_blue', 'cute_companions_ducks:duck_zombie', 'cute_companions_ducks:duck_yellow', 'cute_companions_ducks:duck_wild', 'cute_companions_ducks:duck_tshirt_yellow', 'cute_companions_ducks:duck_tshirt_red', 'cute_companions_ducks:duck_tshirt_purple', 'cute_companions_ducks:duck_tshirt_pink', 'cute_companions_ducks:duck_tshirt_lime'])

    //Pity Frame Logs
    event.get('submerged:pity_frame_logs').add(['naturesaura:ancient_log', 'naturesaura:ancient_bark', 'forcecraft:force_log'])

    //Liquid Sunshine Crafting tag
    event.get('submerged:sunshine').add(['naturesaura:gold_leaf', 'forcecraft:force_sapling'])

    //Liquid Darkness Crafting tag
    event.get('submerged:darkness').add('enderio:withering_powder')

    //Raw Materials 
    event.get('c:raw_materials').remove(['alltheores:salt', '#c:dusts/salt'])

    //Ars Nouveau Saplings
    event.get('submerged:ars_nouveau_saplings').add(['ars_nouveau:blue_archwood_sapling', 'ars_nouveau:red_archwood_sapling', 'ars_nouveau:purple_archwood_sapling', 'ars_nouveau:green_archwood_sapling'])

    //Industrial Foregoing Lenses
    event.get('submerged:industrial_lenses').add(['submerged:ancient_lens', 'industrialforegoing:black_laser_lens', 'industrialforegoing:red_laser_lens', 'industrialforegoing:green_laser_lens', 'industrialforegoing:brown_laser_lens', 'industrialforegoing:blue_laser_lens', 'industrialforegoing:purple_laser_lens', 'industrialforegoing:cyan_laser_lens', 'industrialforegoing:white_laser_lens', 'industrialforegoing:orange_laser_lens', 'industrialforegoing:magenta_laser_lens', 'industrialforegoing:light_blue_laser_lens', 'industrialforegoing:yellow_laser_lens', 'industrialforegoing:lime_laser_lens', 'industrialforegoing:pink_laser_lens', 'industrialforegoing:gray_laser_lens', 'industrialforegoing:light_gray_laser_lens'])

    //Top Induction Mek
    event.get('submerged:top_induction_mek').add(['mekanism:ultimate_induction_provider', 'mekanism:ultimate_induction_cell'])

    //Fire Dragon Eggs
    event.get('submerged:fire_dragon_eggs').add(['iceandfire:dragonegg_red', 'iceandfire:dragonegg_green', 'iceandfire:dragonegg_bronze', 'iceandfire:dragonegg_gray'])

    //Ice Dragon Eggs
    event.get('submerged:ice_dragon_eggs').add(['iceandfire:dragonegg_blue', 'iceandfire:dragonegg_white', 'iceandfire:dragonegg_sapphire', 'iceandfire:dragonegg_silver'])

    //Lightning Dragon Eggs
    event.get('submerged:lightning_dragon_eggs').add(['iceandfire:dragonegg_electric', 'iceandfire:dragonegg_amethyst', 'iceandfire:dragonegg_copper', 'iceandfire:dragonegg_black'])

    //Sugar
    event.get('c:dusts/sugar').add('minecraft:sugar')

    //Sky Dust
    event.get('submerged:sky_dust').add('ae2:sky_dust')

    //Amethyst Dust
    event.get('submerged:amethyst_dust').add('submerged:amethyst_dust')

    //Diving Gear
    event.get('submerged:diving_gear').add([
        'minecraft:turtle_helmet', 
        'aq:turtle_master_helmet', 
        'aq:turtle_master_chestplate', 
        'aq:turtle_master_leggings', 
        'aq:turtle_master_boots', 
        'aq:turtle_chestplate', 
        'aq:turtle_leggings', 
        'aq:turtle_boots',
        'hybrid-aquatic:turtle_chestplate'
    ])

    //Hazmat Suit
    event.get('submerged:hazmat').add([
        'mekanism:hazmat_mask', 
        'mekanism:hazmat_gown', 
        'mekanism:hazmat_pants', 
        'mekanism:hazmat_boots',
        'aq:turtle_master_helmet',
        'aq:turtle_master_chestplate',
        'aq:turtle_master_leggings',
        'aq:turtle_master_boots'
    ])
})

ServerEvents.tags('block', event => {
    colors.forEach(color => {
        event.get(`bblcore:tintable/${color}`).remove(`colors:${color}_log`, `colors:${color}_wood`, `colors:${color}_stripped_log`, `colors:${color}_stripped_wood`)
    })

    //Roomopolis Non Counted Blocks
    event.get('roomopolis:not_needed_for_block_requirements').add(['naturesaura:nature_altar'])

    //Nether Portal Frame
    event.get('bblcore:nether_portal_frame').remove('minecraft:obsidian')

    //Test
    event.get('better_beacons:beacon_redirect').add('#minecraft:logs')
    //event.get('better_beacons:beacon_transparent').add('#minecraft:logs')
    //event.get('better_beacons:beacon_transparency').add('#minecraft:logs')
})
