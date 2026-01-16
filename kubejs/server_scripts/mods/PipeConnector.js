//Pipe Connector

ServerEvents.recipes(event => {

    //Replace Input
    event.shaped('pipe_connector:pipe_connector', [' A ', 'BCB', 'BBB'], {
        A: 'minecraft:copper_ingot',
        B: 'alltheores:aluminum_ingot',
        C: '#pipe_connector:placeable_items'
    }).id('pipe_connector:pipe_connector')


    event.replaceInput({id: 'pipe_connector:pipe_connector'}, 'minecraft:iron_ingot', 'alltheores:aluminum_ingot')
})
