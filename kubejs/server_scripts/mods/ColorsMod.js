//Colors
ServerEvents.recipes(event => {
        

    //Remove
    colors.forEach(color => {
        event.remove({id: `colors:stonecutting/${color}_sapling_from_oak_sapling`})
        event.remove({id: `colors:stonecutting/${color}_planks_from_oak_planks`})
    })

    //Crafting Tables
    colors.forEach(color => {
        event.shaped(`colors:${color}_crafting_table`, ['AA', 'AA'], {
            A: `colors:${color}_planks`
        }).id(`colors:${color}_crafting_table`)
    })

    //Crafting Table
    event.shaped('minecraft:crafting_table', ['AA', 'AA'], {
        A: '#minecraft:planks'
    }).id('submerged:crafting_table')

})