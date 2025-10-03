//Submerged

ServerEvents.recipes(event => {

    //Smelting
    event.smelting('minecraft:netherite_scrap', 'submerged:ancient_debris_dust').id(`submerged:netherite_scrap`)
    
    //Living Mob Matter
    event.shapeless('2x submerged:living_mob_matter', ['5x #submerged:valid_living_mob_matter']).id('submerged:living_mob_matter')

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
    event.shapeless('2x submerged:porcelain_clay', ['minecraft:clay_ball', 'minecraft:bone_meal']).id('submerged:porcelain_clay')

    //Nether Brick Sphere
    event.shaped('submerged:nether_brick_sphere', [' A ', 'ABA', ' A '], {
        A: 'minecraft:nether_bricks',
        B: 'submerged:netherite_key'
    }).id('submerged:nether_brick_sphere')

    //Nether Brick Lock
    event.shaped('submerged:nether_brick_lock', [' A ', 'ABA', ' A '], {
        A: 'minecraft:nether_brick',
        B: 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:nether"}]'
    }).id('submerged:nether_brick_lock')

    //Nether Portal Sphere
    event.shaped('submerged:nether_portal_sphere', [' A ', 'ABA', ' A '], {
        A: 'minecraft:nether_bricks',
        B: 'submerged:netherite_key'
    }).id('submerged:nether_portal_sphere')

    //Ancient Lens
    event.shaped('submerged:ancient_lens', ['ABA', 'BCB', 'ABA'], {
        A: 'naturesaura:ancient_log',
        B: 'enderio:grains_of_infinity',
        C: '#c:glass_panes'
    }).id('submerged:ancient_lens')

    //Matter Gravel
    event.shaped('4x submerged:matter_gravel', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:gravel',
        B: 'ae2:matter_ball'
    }).id('submerged:matter_gravel')

    //Basic Storage Component
    event.shaped('submerged:basic_storage_component', ['ADA', 'BCB', 'ABA'], {
        A: '#c:silicon',
        B: '#c:glass_blocks',
        C: 'ae2:logic_processor',
        D: 'refinedstorage:quartz_enriched_iron'
    }).id('submerged:basic_storage_component')

    //Advanced Storage Component
    event.shaped('submerged:advanced_storage_component', ['ADA', 'BCB', 'ABA'], {
        A: 'minecraft:redstone',
        B: 'submerged:basic_storage_component',
        C: 'ae2:logic_processor',
        D: 'refinedstorage:quartz_enriched_iron'
    }).id('submerged:advanced_storage_component')

    //Elite Storage Component
    event.shaped('submerged:elite_storage_component', ['ADA', 'BCB', 'ABA'], {
        A: 'minecraft:glowstone_dust',
        B: 'submerged:advanced_storage_component',
        C: 'ae2:logic_processor',
        D: 'refinedstorage:quartz_enriched_iron'
    }).id('submerged:elite_storage_component')

    //Ultimate Storage Component
    event.shaped('submerged:ultimate_storage_component', ['ADA', 'BCB', 'ABA'], {
        A: 'submerged:infused_alloy',
        B: 'submerged:elite_storage_component',
        C: 'ae2:logic_processor',
        D: 'refinedstorage:quartz_enriched_iron'
    }).id('submerged:ultimate_storage_component')

    //Mass Color Crafting
    colors.forEach(color => {

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

        //Colored Flare
        event.shapeless(`submerged:${color}_flare`, ['submerged:unloaded_flare', `submerged:${color}_terracotta_rocks`]).id(`submerged:${color}_dirt`)
    
        //Sphere Key
        event.shaped(`submerged:${color}_sphere_key`, ['AAA', 'ABA', 'AAA'], {
            A: `submerged:${color}_terracotta_rocks`,
            B: 'submerged:stone_key'
        }).id(`submerged:${color}_sphere_key`)

        event.shaped(`submerged:${color}_sphere_key`, ['AAA', 'ABA', 'AAA'], {
            A: `colors:${color}_leaves`,
            B: 'submerged:stone_key'
        }).id(`submerged:${color}_sphere_key_from_leaves`)

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

})
