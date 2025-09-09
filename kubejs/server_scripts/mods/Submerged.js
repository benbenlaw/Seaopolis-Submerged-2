//Submerged

ServerEvents.recipes(event => {

    //Smelting
    event.smelting('ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"casting:molten_coal"}]', "submerged:ceramic_solid_coal_bucket").id(`submerged:ceramic_molten_coal_bucket`)
    event.smelting('casting:molten_coal_bucket', "submerged:solid_coal_bucket").id(`submerged:molten_coal_bucket`)

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
        B: 'pipez:wrench'
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
