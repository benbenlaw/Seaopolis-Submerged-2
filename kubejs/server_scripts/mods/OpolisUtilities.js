//Opolis Utilities

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'opolisutilities:smart_crafting_table'})
    event.remove({id: 'opolisutilities:log_sheet'})
    event.remove({id: 'opolisutilities:resource_generator'})
    event.remove({id: 'opolisutilities:fluid_generator'})

    //Replace Input
    event.replaceInput({id: 'opolisutilities:block_breaker'}, 'minecraft:dispenser', '#minecraft:pickaxes')

    //Mini Charcoal
    event.smelting('2x opolisutilities:mini_charcoal', 'colors:green_planks').id('submerged:mini_charcoal')

})
