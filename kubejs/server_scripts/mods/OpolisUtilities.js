//Opolis Utilities

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'opolisutilities:smart_crafting_table'})
    event.remove({id: 'opolisutilities:log_sheet'})

    //Replace Input
    event.replaceInput({id: 'opolisutilities:block_breaker'}, 'minecraft:dispenser', '#minecraft:pickaxes')

    //Mini Charcoal
    event.smelting('2x opolisutilities:mini_charcoal', 'colors:green_planks').id('submerged:mini_charcoal')

    //Resource Generator
    event.shaped('opolisutilities:resource_generator', ['AAA', 'C B', 'AAA'], {
        A: '#c:cobblestones',
        B: 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:lava"}]',
        C: 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]'
    }).id('seaopolis:resource_generator')

})
