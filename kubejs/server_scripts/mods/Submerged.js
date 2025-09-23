//Submerged

ServerEvents.recipes(event => {

    //Smelting
    event.smelting('ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"casting:molten_coal"}]', 'submerged:ceramic_solid_coal_bucket').id(`submerged:ceramic_molten_coal_bucket`)
    event.smelting('casting:molten_coal_bucket', 'submerged:solid_coal_bucket').id(`submerged:molten_coal_bucket`)
    event.smelting('minecraft:netherite_scrap', 'submerged:ancient_debris_dust').id(`submerged:netherite_scrap`)
    
    //Catalog Flares
    event.shapeless('submerged:catalog_flares', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:paper',
        B: 'minecraft:book'
    }).id('submerged:catalog_flares')

    //Catalog Blocks
    event.shapeless('submerged:catalog_simple_blocks', ['AAA', 'ABA', 'AAA'], {
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

    //Prismarine Crystal Activator
    event.shaped('submerged:prismarine_crystal_activator', [' BC', ' AB', 'A  '], {
        A: 'minecraft:stick',
        B: 'minecraft:prismarine_shard',
        C: 'minecraft:prismarine_crystals'
    }).id('submerged:prismarine_crystal_activator')

    //Ancient Lens
    event.shaped('submerged:ancient_lens', ['ABA', 'BCB', 'ABA'], {
        A: 'naturesaura:ancient_log',
        B: 'enderio:grains_of_infinity',
        C: 'nautec:prismarine_lens'
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

    })

    //Ceramic Solid Coal Bucket 
    event.shaped(`submerged:ceramic_solid_coal_bucket`, ['AAA', 'ABA', 'AAA'], {
        A: 'opolisutilities:mini_coal',
        B: 'ceramicbucket:ceramic_bucket'
    }).id(`submerged:ceramic_solid_coal_bucket`)

    //Solid Coal Bucket
    event.shaped(`submerged:solid_coal_bucket`, ['AAA', 'ABA', 'AAA'], {
        A: 'opolisutilities:mini_coal',
        B: 'minecraft:bucket'
    }).id(`submerged:solid_coal_bucket`)

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

    //Prismarine Sphere Key
    event.shaped(`submerged:prismarine_sphere_key`, [' A ', 'ABA', ' A '], {
        A: 'minecraft:prismarine_crystals',
        B: 'submerged:copper_key'
    }).id('submerged:prismarine_sphere_key')

})
