//Casting

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'casting:smelting/black_brick'})
    event.remove({id: 'casting:solidifier/experience/bottle'})

    //Plate Mold
    event.shaped('casting:plate_mold', [' A ', 'ABA', ' A '], {
        A: 'casting:black_brick',
        B: '#minecraft:wooden_pressure_plates'
    }).id('submerged:plate_mold')

    //Black Bricks
    event.smelting('casting:black_brick', 'submerged:porcelain_clay').id('submerged:black_brick')

    //Fuel
    event.recipes.casting.fuel('10x submerged:exothermic_water', 1000, 300 )

    //Melting 
    event.recipes.casting.melting('#minecraft:leaves', '50x submerged:organic_water', 100).id('submerged:melting/leaves')
    event.recipes.casting.melting('#minecraft:saplings', '15x submerged:organic_water', 100).id('submerged:melting/saplings')
    event.recipes.casting.melting('#submerged:colored_apples', '150x submerged:organic_water', 100).id('submerged:melting/colored_apples')
    event.recipes.casting.melting('minecraft:apple', '150x submerged:organic_water', 100).id('submerged:melting/apple')
    event.recipes.casting.melting('strainers:mulch', '250x submerged:organic_water', 100).id('submerged:melting/mulch')
    event.recipes.casting.melting('#c:plastics', '1000x pneumaticcraft:plastic', 1000).id('submerged:melting/plastic')
    event.recipes.casting.melting('ae2:certus_quartz_dust', '250x casting:molten_certus_quartz', 1000).id('submerged:melting/certus_quartz_dust')
    event.recipes.casting.melting('ae2:certus_quartz_crystal', '250x casting:molten_certus_quartz', 1000).id('submerged:melting/certus_quartz_crystal')
    event.recipes.casting.melting('submerged:porcelain_clay', '250x casting:molten_black_brick', 1000).id('submerged:melting/porcelain_clay')
    
    event.recipes.casting.melting('minecraft:rotten_flesh', '20x mob_grinding_utils:fluid_xp', 1000).id('submerged:melting/rotten_flesh')
    event.recipes.casting.melting('minecraft:bone', '20x mob_grinding_utils:fluid_xp', 1000).id('submerged:melting/bone')
    event.recipes.casting.melting('iceandfire:witherbone', '50x mob_grinding_utils:fluid_xp', 1000).id('submerged:melting/witherbone')
    event.recipes.casting.melting('minecraft:gunpowder', '40x mob_grinding_utils:fluid_xp', 1000).id('submerged:melting/gunpowder')
    event.recipes.casting.melting('forcecraft:pile_of_gunpowder', '10x mob_grinding_utils:fluid_xp', 1000).id('submerged:melting/pile_of_gunpowder')
    event.recipes.casting.melting('minecraft:spider_eye', '50x mob_grinding_utils:fluid_xp', 1000).id('submerged:melting/spider_eye')
    event.recipes.casting.melting('#forcecraft:chu_jelly', '25x mob_grinding_utils:fluid_xp', 1000).id('submerged:melting/chu_jelly')
    event.recipes.casting.melting('minecraft:slime_ball', '25x mob_grinding_utils:fluid_xp', 1000).id('submerged:melting/slime_ball')
    event.recipes.casting.melting('minecraft:arrow', '10x mob_grinding_utils:fluid_xp', 1000).id('submerged:melting/arrow')
    event.recipes.casting.melting('minecraft:skeleton_skull', '250x mob_grinding_utils:fluid_xp', 1000).id('submerged:melting/skeleton_skull')
    event.recipes.casting.melting('minecraft:zombie_head', '250x mob_grinding_utils:fluid_xp', 1000).id('submerged:melting/zombie_head')
    event.recipes.casting.melting('minecraft:creeper_head', '250x mob_grinding_utils:fluid_xp', 1000).id('submerged:melting/creeper_head')
    event.recipes.casting.melting('minecraft:wither_skeleton_skull', '500x mob_grinding_utils:fluid_xp', 1000).id('submerged:melting/wither_skeleton_skull')
    event.recipes.casting.melting('minecraft:dragon_head', '2000x mob_grinding_utils:fluid_xp', 1000).id('submerged:melting/dragon_head')

    
    event.recipes.casting.melting('submerged:nether_star_block', '500x submerged:molten_star', 1400).id('submerged:melting/nether_star_block')
    event.recipes.casting.melting('submerged:grains_of_time', '500x submerged:time_fluid', 1400).id('submerged:melting/grains_of_time')

    event.recipes.casting.melting('forcecraft:force_nugget', '10x submerged:molten_force', 1000).id('submerged:melting/force_nugget')
    event.recipes.casting.melting('forcecraft:force_ingot', '90x submerged:molten_force', 1000).id('submerged:melting/force_ingot')
    event.recipes.casting.melting('forcecraft:force_gear', '360x submerged:molten_force', 1000).id('submerged:melting/force_gear')

    event.recipes.casting.melting('submerged:solclipsium_ingot', '90x submerged:molten_solclipsium', 1400).id('submerged:melting/solclipsium_ingot')
    event.recipes.casting.melting('submerged:solclipsium_nugget', '10x submerged:molten_solclipsium', 1400).id('submerged:melting/solclipsium_nugget')


    //Solidifier
    event.recipes.casting.solidifier('strainers:purified_gravel', '100x submerged:organic_water', 'submerged:refined_gravel').id('submerged:solidifier/refined_gravel')
    event.recipes.casting.solidifier('#c:glass_panes/colorless', '500x industrialforegoing:pink_slime', 'industrialforegoing:pink_slime').id('submerged:solidifier/pink_slime')
    event.recipes.casting.solidifier('#c:molds/ingot', '1000x pneumaticcraft:plastic', 'pneumaticcraft:plastic').id('submerged:solidifier/plastic')
    event.recipes.casting.solidifier('#c:molds/dust', '250x casting:molten_certus_quartz', 'ae2:certus_quartz_dust').id('submerged:solidifier/certus_quartz_dust')
    event.recipes.casting.solidifier('#c:molds/gem', '250x casting:molten_certus_quartz', 'ae2:certus_quartz_crystal').id('submerged:solidifier/certus_quartz_crystal')

    event.recipes.casting.solidifier('#c:molds/key', '360x casting:molten_copper', 'submerged:copper_key').id('submerged:solidifier/copper_key')
    event.recipes.casting.solidifier('#c:molds/key', '360x casting:molten_iron', 'submerged:iron_key').id('submerged:solidifier/iron_key')
    event.recipes.casting.solidifier('#c:molds/key', '360x casting:molten_netherite', 'submerged:netherite_key').id('submerged:solidifier/netherite_key')
    event.recipes.casting.solidifier('#c:molds/key', '4000x casting:molten_stone', 'submerged:stone_key').id('submerged:solidifier/stone_key')
    event.recipes.casting.solidifier('#c:molds/key', '250x submerged:molten_star', 'submerged:starry_key').id('submerged:solidifier/starry_key')

    event.recipes.casting.solidifier('#c:molds/ingot', '90x submerged:molten_force', 'forcecraft:force_ingot').id('submerged:solidifier/force_ingot')
    event.recipes.casting.solidifier('#c:molds/nugget', '10x submerged:molten_force', 'forcecraft:force_nugget').id('submerged:solidifier/force_nugget')
    event.recipes.casting.solidifier('#c:molds/gear', '360x submerged:molten_force', 'forcecraft:force_gear').id('submerged:solidifier/force_gear')

    event.recipes.casting.solidifier('#c:molds/gear', '360x casting:molten_energetic_alloy', 'enderio:energized_gear').id('submerged:solidifier/energized_gear')
    event.recipes.casting.solidifier('#c:molds/gear', '360x casting:molten_vibrant_alloy', 'enderio:vibrant_gear').id('submerged:solidifier/vibrant_gear')
    event.recipes.casting.solidifier('#c:molds/dust', '500x submerged:time_fluid', 'submerged:grains_of_time').id('submerged:solidifier/grains_of_time')
    
    event.recipes.casting.solidifier('#c:molds/ingot', '90x submerged:molten_solclipsium', 'submerged:solclipsium_ingot').id('submerged:solidifier/solclipsium_ingot')
    event.recipes.casting.solidifier('#c:molds/nugget', '10x submerged:molten_solclipsium', 'submerged:solclipsium_nugget').id('submerged:solidifier/solclipsium_nugget')
   
    event.recipes.casting.solidifier('#c:molds/gem', '90x submerged:molten_triarchium', 'submerged:triarchium_gem').id('submerged:solidifier/triarchium_gem')
    
    event.recipes.casting.solidifier('minecraft:glass_bottle', '250x submerged:dragons_breath', 'minecraft:dragon_breath').id('submerged:solidifier/dragon_breath')
    event.recipes.casting.solidifier('minecraft:glass_bottle', '250x mob_grinding_utils:fluid_xp', 'minecraft:experience_bottle').id('submerged:solidifier/experience_bottle')
    
    event.recipes.casting.solidifier('#c:molds/dust', '250x mekanism:lithium', 'mekanism:dust_lithium').id('submerged:solidifier/dust_lithium')
    event.recipes.casting.solidifier('#c:molds/ingot', '90x casting:molten_certus_quartz', 'submerged:certus_ingot').id('submerged:solidifier/certus_ingot')

    //Mixer
    event.recipes.casting.mixing('360x casting:molten_quartz_enriched_iron', ['270x casting:molten_iron', '250x casting:molten_quartz', '250x casting:molten_certus_quartz']).id('casting:mixer/molten_quartz_enriched_iron')
    event.recipes.casting.mixing('360x casting:molten_soularium', ['250x submerged:molten_star', '4000x casting:molten_soul']).id('casting:mixer/soularium')
    event.recipes.casting.mixing('180x submerged:molten_solclipsium', ['1000x enderio:fluid_liquid_sunshine_still', '1000x enderio:fluid_liquid_darkness_still']).id('casting:mixer/solclipsium')
    event.recipes.casting.mixing('90x submerged:molten_triarchium', ['360x casting:molten_sapphire', '360x casting:molten_ruby', '360x casting:molten_peridot']).id('casting:mixer/triarchium')
    event.recipes.casting.mixing('90x submerged:molten_vanillarite', ['90x casting:molten_iron', '90x casting:molten_gold', '90x casting:molten_copper', '90x casting:molten_netherite']).id('casting:mixer/vanillarite')

    //Gear Mold
    event.shaped('casting:gear_mold', [' A ', 'ABA', ' A '], {
        A: 'casting:black_brick',
        B: '#c:plastics'
    }).id('submerged:gear_mold')

    //Multiblock Mixer
    event.shaped('casting:multiblock_mixer', [' A ', 'ABA', ' A '], {
        A: '#c:ingots/bronze',
        B: 'casting:mixer'
    }).id('casting/mixer/multiblock/mixer')

    //Multiblock Controller
    event.shaped('casting:multiblock_controller', [' A ', 'ABA', ' A '], {
        A: '#c:ingots/bronze',
        B: 'casting:controller'
    }).id('casting:solidifier/multiblock/controller')

    //Multiblock Solidifier
    event.shaped('casting:multiblock_solidifier', [' A ', 'ABA', ' A '], {
        A: '#c:ingots/bronze',
        B: 'casting:solidifier'
    }).id('casting:solidifier/multiblock/solidifier')

    //Multiblock Valve
    event.shaped('casting:multiblock_valve', [' A ', 'ABA', ' A '], {
        A: '#c:ingots/bronze',
        B: 'casting:black_bricks'
    }).id('casting:solidifier/multiblock/valve')

    //Multiblock Fuel Tank
    event.shaped('casting:multiblock_fuel_tank', [' A ', 'ABA', ' A '], {
        A: '#c:ingots/bronze',
        B: 'casting:tank'
    }).id('casting:solidifier/multiblock/fuel_tank')

    //Multiblock Coolant Tank
    event.shaped('casting:multiblock_coolant_tank', ['A A', ' B ', 'A A'], {
        A: '#c:ingots/bronze',
        B: 'casting:tank'
    }).id('casting:solidifier/multiblock/coolant_tank')

    //
})












/*

   function ending(input, output) {
        let id = `${input.split(':')[1]}_to_${output.split(':')[1]}`
        let ing  = Ingredient.of(input).toJson()
        let stack = Item.of(output, 1)
        
        event.custom(
            {
                'type': 'create_dragons_plus:ending',
                'ingredients': [
                    ing
                ],
                'results': [
                    stack
                ]
            }
        ).id(`test:test/ending/${id}`)
    }
*/