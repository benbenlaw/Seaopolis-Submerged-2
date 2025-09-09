//Pipez

ServerEvents.recipes(event => {

    //Item Pipe
    event.shaped('pipez:item_pipe', ['AAA', '   ', 'AAA'], {
        A: '#c:ingots/aluminum'
    }).id('pipez:item_pipe')
})
