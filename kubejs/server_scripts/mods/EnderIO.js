//Ender IO

ServerEvents.recipes(event => {
    
    //Remove
    event.remove({id: 'enderio:fire_crafting/deepslate_infinity'})
    event.remove({id: 'enderio:fire_crafting/bedrock_infinity'})
    event.remove({id: 'enderio:sag_milling/cobbled_deepslate'})
    event.remove({id: 'enderio:basic_capacitor'})
    event.remove({id: 'enderio:alloy_smelting/photovoltaic_plate'})
    event.remove({id: 'enderio:photovoltaic_composite'})
    event.remove({id: 'enderio:alloy_smelting/soularium_ingot'})
    event.remove({id: 'enderio:void_chassis'})
    event.remove({id: 'enderio:fermenting/fluid_liquid_darkness_still'})
    event.remove({id: 'enderio:fermenting/fluid_liquid_sunshine_still'})
    event.remove({id: 'enderio:dark_steel_helmet'})
    event.remove({id: 'enderio:dark_steel_chestplate'})
    event.remove({id: 'enderio:dark_steel_leggings'})
    event.remove({id: 'enderio:dark_steel_boots'})
    event.remove({id: 'enderio:dark_steel_pickaxe'})
    event.remove({id: 'enderio:dark_steel_axe'})
    event.remove({id: 'enderio:dark_steel_sword'})

    //Replace 
    event.replaceInput({id: 'enderio:soul_vial'}, '#c:glass_blocks/dark_fused_quartz', '#c:glass_blocks')
    event.replaceInput({id: 'enderio:double_layer_capacitor'}, '#c:dusts/coal', 'minecraft:lapis_block')
    event.replaceInput({id: 'enderio:pulsating_photovoltaic_module'}, '#c:dusts/coal', 'minecraft:lapis_block')
    event.replaceInput({id: 'enderio:pulsating_photovoltaic_module'}, '#c:glass_blocks/enlighted_fused_quartz', '#c:glass_blocks')
    event.replaceInput({id: 'enderio:vibrant_photovoltaic_module'}, '#c:glass_blocks/dark_fused_quartz', '#c:glass_blocks')

    //Alloy Smelter
    //event.recipes.enderio.alloy_smelting('refinedstorage:quartz_enriched_iron', ['3x minecraft:iron_ingot', 'ae2:certus_quartz_crystal', 'minecraft:quartz']).id('submerged:enderio/quartz_enriched_iron')
  
    //Enderman Head
    event.shaped('enderio:enderman_head', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:ender_pearl',
        B: '#minecraft:skulls'
    }).id('submerged:enderio/enderman_head')

    //Photovoltaic Composite
    event.shapeless('enderio:photovoltaic_composite', ['#c:gems/lapis', 'minecraft:coal', 'ae2:silicon']).id('submerged:enderio/photovoltaic_composite')
    event.shapeless('enderio:photovoltaic_composite', ['#c:gems/lapis', 'minecraft:coal', '#ae2:all_quartz']).id('submerged:enderio/photovoltaic_composite_quartz')

    //Void Chassis
    event.shaped('enderio:void_chassis', ['ABA', 'BCB', 'ABA'], {
        A: 'enderio:dark_steel_ingot',
        B: 'enderio:grains_of_infinity',
        C: 'submerged:ai_controller'
    }).id('submerged:enderio/void_chassis')

    //Wardens Smite
    addEnchanterRecipe('minecraft:sculk', 12, 'opolisutilities:wardens_smite', 1)

    //Enchanter 
    function addEnchanterRecipe(input, inputCount, enchantment, cost_multiplier) {
        event.custom({
            "type": "enderio:enchanting",
            "cost_multiplier": cost_multiplier,
            "enchantment": enchantment,
            "input": {
                "count": inputCount,
                "item": input
            }
        }).id(`submerged:enderio/enchanter/${input.split(':')[1]}_${enchantment.split(':')[1]}`)
    }

})
