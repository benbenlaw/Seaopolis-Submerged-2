//Natures Aura

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'naturesaura:gold_powder'})

    //Replace Input
    event.replaceInput({id: "naturesaura:bottle_two_the_rebottling"}, '#minecraft:planks', 'naturesaura:ancient_planks')

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
