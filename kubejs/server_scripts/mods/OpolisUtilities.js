//Opolis Utilities

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'opolisutilities:smart_crafting_table'})
    event.remove({id: 'opolisutilities:log_sheet'})
    event.remove({id: 'opolisutilities:resource_generator'})
    event.remove({id: 'opolisutilities:fluid_generator'})

    //Replace Input
    event.replaceInput({id: 'opolisutilities:block_breaker'}, 'minecraft:dispenser', '#minecraft:pickaxes')
    event.replaceInput({id: 'opolisutilities:summoning_block'}, 'minecraft:hay_block', 'enderio:void_chassis')

    //Mini Charcoal
    event.smelting('2x opolisutilities:mini_charcoal', 'colors:green_planks').id('submerged:mini_charcoal')

    //Summoning Block
    event.recipes.opolisutilities.summoning_block('minecraft:rotten_flesh', 'minecraft:stone', 'minecraft:zombie').id('submerged:summoning_block/zombie')
    event.recipes.opolisutilities.summoning_block('minecraft:blaze_rod', 'minecraft:netherrack', 'minecraft:blaze').id('submerged:summoning_block/blaze')

})
