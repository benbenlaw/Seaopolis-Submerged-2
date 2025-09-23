//Pipez

ServerEvents.recipes(event => {

    //Fluid Pipe
    event.shaped('16x pipez:fluid_pipe', ['AAA', '   ', 'AAA'], {
        A: '#c:ingots/tin'
    }).id('pipez:fluid_pipe')

    //Item Pipe
    event.shaped('16x pipez:item_pipe', ['AAA', '   ', 'AAA'], {
        A: '#c:ingots/aluminum'
    }).id('pipez:item_pipe')
})
