//Just Another Void Dimension

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'javd:portal_block'})

    //Portal Block
    event.shaped('javd:portal_block', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:obsidian',
        B: 'extendedcrafting:the_ultimate_ingot'
    }).id('submerged:javd/portal_block')
    

})


