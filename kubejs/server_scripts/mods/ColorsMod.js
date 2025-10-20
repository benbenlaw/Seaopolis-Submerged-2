//Colors
ServerEvents.recipes(event => {
        
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