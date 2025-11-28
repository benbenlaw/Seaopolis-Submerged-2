//Natures Aura

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'naturesaura:gold_powder'})
    event.remove({id: 'naturesaura:tree_ritual/conversion_catalyst'})
    event.remove({id: 'naturesaura:altar/blaze'})

    //Replace Input
    event.replaceInput({id: 'naturesaura:bottle_two_the_rebottling'}, '#minecraft:planks', 'naturesaura:ancient_planks')

    //Blaze Powder
    event.recipes.naturesaura.altar('6x minecraft:blaze_powder', 'minecraft:blaze_rod', 500).id('submerged:blaze_powder')

    //Transmutation
    event.recipes.naturesaura.tree_ritual('naturesaura:conversion_catalyst', ['naturesaura:gold_brick', 'minecraft:wither_skeleton_skull', 'minecraft:brewing_stand', 'naturesaura:tainted_gold', 'minecraft:glowstone', 'naturesaura:infused_stone']).id('submerged:naturesaura/conversion_catalyst')

    //Brilliant Fiber
    event.shaped('4x naturesaura:gold_fiber', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:short_grass',
        B: 'minecraft:gold_ingot',
    }).id('naturesaura:gold_fiber')

    event.shaped('4x naturesaura:gold_fiber', ['AAA', 'ABA', 'AAA'], {
        A: '#submerged:colored_short_grass',
        B: 'minecraft:gold_ingot',
    }).id('submerged:gold_fiber')

    //Glowstone
    event.recipes.naturesaura.altar('minecraft:glowstone_dust', 'naturesaura:gold_powder', 1000).id('submerged:glowstone_dust')

    //Powder Snow Bucket
    event.recipes.naturesaura.altar('minecraft:powder_snow_bucket', 'minecraft:milk_bucket', 1000).id('submerged:powder_snow_bucket')


})
