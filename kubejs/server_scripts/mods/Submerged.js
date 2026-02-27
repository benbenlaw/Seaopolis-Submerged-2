//Submerged

ServerEvents.recipes(event => {

    //Smelting
    event.smelting('minecraft:netherite_scrap', 'submerged:ancient_debris_dust').id(`submerged:netherite_scrap`)
 
    //Nether Star Block
    event.shapeless('extendedcrafting:nether_star_block', ['submerged:nether_star_block']).id('submerged:nether_star_block_to_extendedcrafting')

    //Dark Dye
    event.shapeless('submerged:dark_dye', ['submerged:prime_ingot', 'minecraft:black_dye', 'minecraft:brown_dye', 'minecraft:light_gray_dye', 'minecraft:gray_dye', 'minecraft:green_dye', 'minecraft:cyan_dye', 'minecraft:blue_dye', 'minecraft:red_dye']).id('submerged:dark_dye')

    //Bright Dye
    event.shapeless('submerged:bright_dye', ['submerged:prime_ingot', 'minecraft:yellow_dye', 'minecraft:lime_dye', 'minecraft:purple_dye', 'minecraft:orange_dye', 'minecraft:pink_dye', 'minecraft:white_dye', 'minecraft:magenta_dye', 'minecraft:light_blue_dye']).id('submerged:bright_dye')

    //Water Purifier
    event.shaped('submerged:water_purifier', [' A ', 'BCB', ' A '], {
        A: 'minecraft:iron_ingot',
        B: 'submerged:prime_alloy_ingot',
        C: 'minecraft:heart_of_the_sea'
    }).id('submerged:water_purifier')

    //Air Purifier
    event.shaped('submerged:air_purifier', [' A ', 'BCB', ' A '], {
        A: 'minecraft:iron_ingot',
        B: 'submerged:prime_alloy_ingot',
        C: 'minecraft:nether_star'
    }).id('submerged:air_purifier')

    //Fluid Compressor
    event.shaped('custommachinery:custom_machine_item[custommachinery:machine="submerged:fluid_compressor"]', ['AAA', 'BCB', 'AAA'], {
        A: 'extendedcrafting:black_iron_ingot',
        B: 'mob_grinding_utils:jumbo_tank',
        C: 'extendedcrafting:ultimate_catalyst'
    }).id('submerged:fluid_compressor')

    //Chemical Compressor
    event.shaped('custommachinery:custom_machine_item[custommachinery:machine="submerged:chemical_compressor"]', ['AAA', 'BCB', 'AAA'], {
        A: 'extendedcrafting:black_iron_ingot',
        B: 'mekmm:ultimate_max_chemical_tank',
        C: 'extendedcrafting:ultimate_catalyst'
    }).id('submerged:chemical_compressor')

    //Dragon Breath Bucket
    event.shaped('submerged:dragons_breath_bucket', [' A ', 'ABA', ' A '], {
        A: 'minecraft:dragon_breath', 
        B: 'minecraft:bucket',
    }).id('submerged:dragons_breath_bucket')

    //Atlantis Sphere
    event.shaped('submerged:atlantis_sphere', [' A ', 'ABA', ' A '], {
        A: 'atlantis:orb_of_atlantis',
        B: 'submerged:iron_key'
    }).id('submerged:atlantis_sphere')

    //Infinity Forge
    event.shaped('custommachinery:custom_machine_item[custommachinery:machine="submerged:infinity_forge"]', ['AAA', 'CBC', 'AAA'], {
        A: 'starforge:star_ingot',
        B: 'starforge:star_forge',
        C: 'starforge:star_gem'
    }).id('submerged:infinity_forge')

    //Spoil Bag Opener
    event.shaped('custommachinery:custom_machine_item[custommachinery:machine="submerged:spoil_bag_opener"]', ['AAA', 'BCB', 'AAA'], {
        A: 'minecraft:iron_ingot',
        B: 'forcecraft:spoils_bag',
        C: 'minecraft:obsidian'
    }).id('submerged:spoil_bag_opener')

    //Iridium Ore
    event.shaped('alltheores:iridium_ore', ['AA', 'AA'], {
        A: 'submerged:iridium_ore_piece'
    }).id('submerged:iridium_ore')

    //Ice 
    event.shaped('minecraft:ice', ['AA', 'AA'], {
        A: 'submerged:ice_ball'
    }).id('submerged:ice')

    //Infinity Drives
    addInfinityDrive('sand')
    addInfinityDrive('gravel')
    addInfinityDrive('dirt')
    addInfinityDrive('stone')

    //Infinity Drives Function
    function addInfinityDrive(stack) {
        event.shaped(`submerged:infinity_${stack}_drive`, ['AAA', 'ABA', 'AAA'], {
            A: stack,
            B: 'infinitystorage:empty_infinity_drive'
        }).id(`submerged:infinity_${stack}_drive`)
    }
    //Fiery Gravel
    event.shaped('8x submerged:fiery_gravel', ['AAA', 'ABA', 'AAA'], {
        A: 'submerged:teary_gravel',
        B: 'iceandfire:dragonsteel_fire_ingot'
    }).id('submerged:fiery_gravel')

    //Stormy Gravel
    event.shaped('8x submerged:stormy_gravel', ['AAA', 'ABA', 'AAA'], {
        A: 'submerged:teary_gravel',
        B: 'iceandfire:dragonsteel_lightning_ingot'
    }).id('submerged:stormy_gravel')

    //Icy Gravel
    event.shaped('8x submerged:icy_gravel', ['AAA', 'ABA', 'AAA'], {
        A: 'submerged:teary_gravel',
        B: 'iceandfire:dragonsteel_ice_ingot'
    }).id('submerged:icy_gravel')

    //Zombie Trial Sphere
    event.shaped('submerged:zombie_trial_sphere', ['AAA', 'ABA', 'AAA'], {
        A: 'submerged:living_gravel',
        B: 'submerged:copper_key'
    }).id('submerged:zombie_trial_sphere')
    
    //Essence of the Sea
    event.shaped('submerged:essence_of_the_sea', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:nautilus_shell',
        B: 'minecraft:heart_of_the_sea',
        C: 'mekmm:uu_matter'
    }).id('submerged:essence_of_the_sea')

    //Shrieking Sphere
    event.shaped('submerged:shrieking_sphere', [' A ', 'ABA', ' A '], {
        A: 'nanomirai:sculmium_ingot',
        B: 'submerged:starry_key'
    }).id('submerged:shrieking_sphere')

    //Sculk Shrieker
    event.shaped('minecraft:sculk_shrieker', ['A', 'B'], {
        A: 'nanomirai:sculk_lens',
        B: 'minecraft:sculk_catalyst'
    }).id('submerged:sculk_shrieker')

    //Solclipsium Block
    event.shapeless('submerged:solclipsium_block', ['9x submerged:solclipsium_ingot']).id('submerged:solclipsium_block_from_ingot')

    //Prime Ingot
    event.shapeless('9x submerged:prime_nugget', ['submerged:prime_ingot']).id('submerged:prime_ingot_from_nuggets')
    event.shapeless('submerged:prime_ingot', ['9x submerged:prime_nugget']).id('submerged:prime_nugget_from_ingot')

    //Prime Alloy Ingot
    event.shapeless('9x submerged:prime_alloy_nugget', ['submerged:prime_alloy_ingot']).id('submerged:prime_alloy_ingot_from_nuggets')
    event.shapeless('submerged:prime_alloy_ingot', ['9x submerged:prime_alloy_nugget']).id('submerged:prime_alloy_nugget_from_ingot')

    //Solclipsium Ingot
    event.shapeless('9x submerged:solclipsium_ingot', ['submerged:solclipsium_block']).id('submerged:solclipsium_ingot_from_block')
    event.shapeless('submerged:solclipsium_ingot', ['9x submerged:solclipsium_nugget']).id('submerged:solclipsium_ingot_from_nuggets')

    //Solclipsium Nugget
    event.shapeless('9x submerged:solclipsium_nugget', ['submerged:solclipsium_ingot']).id('submerged:solclipsium_nugget_from_ingot')

    //Wooden Gear
    event.shaped('submerged:wooden_gear', [' A ', 'ABA', ' A '], {
        A: 'minecraft:stick',
        B: '#minecraft:planks'
    }).id('submerged:wooden_gear')

    //Catalog Flares
    event.shaped('submerged:catalog_flares', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:paper',
        B: 'minecraft:book'
    }).id('submerged:catalog_flares')

    //Catalog Simple Blocks
    event.shaped('submerged:catalog_simple_blocks', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:cobblestone',
        B: 'minecraft:book'
    }).id('submerged:catalog_simple_blocks')

    //Wooden Key
    event.shaped('submerged:wooden_key', ['AA ', 'AA ', ' A '], {
        A: 'minecraft:stick'
    }).id('submerged:wooden_key')

    //Porcelain Clay
    event.shapeless('3x submerged:porcelain_clay', ['minecraft:clay_ball', 'minecraft:clay_ball',  'minecraft:bone_meal']).id('submerged:porcelain_clay')

    //Nether Brick Sphere
    event.shaped('submerged:nether_brick_sphere', ['CAC', 'ABA', 'CAC'], {
        A: 'minecraft:nether_bricks',
        C: 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:nether"}]',
        B: 'submerged:netherite_key'
    }).id('submerged:nether_brick_sphere_naturesaura')

    event.shaped('submerged:nether_brick_sphere', ['CAC', 'ABA', 'CAC'], {
        A: 'minecraft:nether_bricks',
        C: 'submerged:nether_force_bricks',
        B: 'submerged:netherite_key'
    }).id('submerged:nether_brick_sphere_forcecraft')

    //Nether Portal Sphere
    event.shaped('submerged:nether_portal_sphere', [' A ', 'ABA', ' A '], {
        A: 'minecraft:nether_bricks',
        B: 'submerged:netherite_key'
    }).id('submerged:nether_portal_sphere')

    //Ancient Lens
    event.shaped('submerged:ancient_lens', ['ABA', 'BCB', 'ABA'], {
        A: '#submerged:pity_frame_logs',
        B: 'enderio:grains_of_infinity',
        C: '#c:glass_panes'
    }).id('submerged:ancient_lens')

    //Matter Gravel
    event.shaped('8x submerged:matter_gravel', ['AAA', 'ABA', 'AAA'], {
        A: 'submerged:charged_gravel',
        B: 'ae2:matter_ball'
    }).id('submerged:matter_gravel')

    //Mass Color Crafting
    colors.forEach(color => {

        //Colored Dirt
        event.shaped(`colors:${color}_dirt`, ['AA', 'AA'], {
            A: `submerged:${color}_dirt_pile`
        }).id(`submerged:${color}_dirt`)

        //Pinata Terracotta
        event.shaped(`shops:pinata_flare[shops:pinata_id="submerged:terracotta/${color}"]`, ['AAA', 'ABA', 'AAA'], {
            A: `submerged:${color}_terracotta_rocks`,
            B: `shops:crate_flare[shops:crate_id="submerged:starting/${color}"]`
        }).id(`submerged:${color}_terracotta_pinata`)
    
        //Tunnel Key
        event.shaped(`submerged:${color}_tunnel_key`, [' A ', 'ABA', ' A '], {
            A: '#c:glass_blocks',
            B: `submerged:${color}_sphere_key`
        }).id(`submerged:${color}_tunnel_key`)

        //Big Sphere Key
        event.shaped(`submerged:${color}_big_sphere_key`, ['AAA', 'AAA', 'AAA'], {
            A: `submerged:${color}_sphere_key`
        }).id(`submerged:${color}_big_sphere_key`)

        //Long Sphere Key
        event.shaped(`submerged:${color}_long_sphere_key`, ['AA'], {
            A: `submerged:${color}_sphere_key`
        }).id(`submerged:${color}_long_sphere_key`)

        //Deep Sphere Key
        event.shaped(`submerged:${color}_deep_sphere_key`, ['A', 'A'], {
            A: `submerged:${color}_sphere_key`
        }).id(`submerged:${color}_deep_sphere_key`)

        //Terractotta Rock
        event.shapeless(`minecraft:${color}_terracotta`, 
            [`4x submerged:${color}_terracotta_rocks`
        ]).id(`submerged:${color}_terracotta`)

        //Starting Colored Flare
        event.shapeless(`shops:crate_flare[shops:crate_id="submerged:starting/${color}"]`, 
            ['submerged:unloaded_flare', `submerged:${color}_terracotta_rocks`]).id(`submerged:${color}_starting_flare`)
    
        //Sphere Key
        event.shaped(`submerged:${color}_sphere_key`, [' A ', 'ABA', ' A '], {
            A: `submerged:${color}_terracotta_rocks`,
            B: 'submerged:stone_key'
        }).id(`submerged:${color}_sphere_key`)

        event.shaped(`submerged:${color}_sphere_key`, [' A ', 'ABA', ' A '], {
            A: `colors:${color}_leaves`,
            B: 'submerged:stone_key'
        }).id(`submerged:${color}_sphere_key_from_leaves`)

        //Cube Key
        event.shaped(`submerged:${color}_cube_key`, ['A A', ' B ', 'A A'], {
            A: `submerged:${color}_terracotta_rocks`,
            B: 'submerged:stone_key'
        }).id(`submerged:${color}_cube_key`)

        event.shaped(`submerged:${color}_cube_key`, ['A A', ' B ', 'A A'], {
            A: `colors:${color}_leaves`,
            B: 'submerged:stone_key'
        }).id(`submerged:${color}_cube_key_from_leaves`)

        //Deep Cube Key
        event.shaped(`submerged:${color}_big_cube_key`, ['AAA', 'AAA', 'AAA'], {
            A: `submerged:${color}_cube_key`
        }).id(`submerged:${color}_big_cube_key`)

        //Long Cube Key
        event.shaped(`submerged:${color}_long_cube_key`, ['AA'], {
            A: `submerged:${color}_cube_key`
        }).id(`submerged:${color}_long_cube_key`)

        //Deep Cube Key
        event.shaped(`submerged:${color}_deep_cube_key`, ['A', 'A'], {
            A: `submerged:${color}_cube_key`
        }).id(`submerged:${color}_deep_cube_key`)


    })

    //Mesh Mold
    event.shaped(`submerged:mesh_mold`, [' A ', 'ABA', ' A '], {
        A: 'casting:black_brick',
        B: '#strainers:meshes'
    }).id('submerged:mesh_mold')
    
    //Key Mold
    event.shaped(`submerged:key_mold`, [' A ', 'ABA', ' A '], {
        A: 'casting:black_brick',
        B: 'submerged:wooden_key'
    }).id('submerged:key_mold')

    //Pressure Chamber Controller
    event.shaped(`submerged:pressure_chamber_controller`, [' A ', 'ABA', ' A '], {
        A: 'pneumaticcraft:reinforced_bricks',
        B: '#submerged:keys/pressure_chamber'
    }).id('submerged:pressure_chamber_controller')

    //Pressure Chamber Key 3x3
    event.shaped(`submerged:3x3_pressure_chamber`, [' A ', ' B ', ' A '], {
        A: 'pneumaticcraft:reinforced_bricks',
        B: 'submerged:copper_key'
    }).id('submerged:3x3_pressure_chamber')

    //Pressure Chamber Key 4x4
    event.shaped(`submerged:4x4_pressure_chamber`, [' A ', 'ABA', ' A '], {
        A: 'pneumaticcraft:reinforced_bricks',
        B: 'submerged:copper_key'
    }).id('submerged:4x4_pressure_chamber')

    //Pressure Chamber Key 5x5
    event.shaped(`submerged:5x5_pressure_chamber`, ['AAA', ' B ', 'AAA'], {
        A: 'pneumaticcraft:reinforced_bricks',
        B: 'submerged:copper_key'
    }).id('submerged:5x5_pressure_chamber')

    //Overworld Altar Key
    event.shaped(`submerged:overworld_altar`, [' A ', 'ABA', ' A '], {
        A: 'naturesaura:ancient_log',
        B: 'submerged:stone_key'
    }).id('submerged:overworld_altar')

})
