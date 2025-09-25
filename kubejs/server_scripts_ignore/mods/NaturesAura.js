//Natures Aura

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'naturesaura:gold_powder'})
    event.remove({id: 'naturesaura:tree_ritual/conversion_catalyst'})

    //Replace Input
    event.replaceInput({id: 'naturesaura:bottle_two_the_rebottling'}, '#minecraft:planks', 'naturesaura:ancient_planks')

    //Blank Spawn Egg
    event.recipes.naturesaura.tree_ritual('submerged:blank_spawn_egg', ['naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:nether"}]', 'minecraft:egg', 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:nether"}]', 'minecraft:egg', 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:nether"}]', 'minecraft:egg', 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:nether"}]', 'minecraft:egg']).id('submerged:naturesaura/blank_spawn_egg')

    //Transmutation
    event.recipes.naturesaura.tree_ritual('naturesaura:conversion_catalyst', ['naturesaura:gold_brick', 'minecraft:wither_skeleton_skull', 'minecraft:brewing_stand', 'naturesaura:tainted_gold', 'minecraft:glowstone', 'naturesaura:infused_stone']).id('submerged:naturesaura/conversion_catalyst')

    //Brilliant Fiber
    event.shaped('4x naturesaura:gold_fiber', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:short_grass',
        B: 'submerged:quartz_enriched_gold',
    }).id('naturesaura:gold_fiber')

    event.shaped('4x naturesaura:gold_fiber', ['AAA', 'ABA', 'AAA'], {
        A: '#submerged:colored_short_grass',
        B: 'submerged:quartz_enriched_gold',
    }).id('submerged:gold_fiber')

    event.recipes.naturesaura.altar('minecraft:glowstone_dust', 'naturesaura:gold_powder', 1000).id('submerged:glowstone_dust')

})
