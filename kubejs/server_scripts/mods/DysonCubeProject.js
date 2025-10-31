//Dyson Cube Project

ServerEvents.recipes(event => {
    
    //Remove
    event.remove({id: 'dysoncubeproject:solar_sail'})
    event.remove({id: 'dysoncubeproject:beam'})
    event.remove({id: 'dysoncubeproject:beam_package'})
    event.remove({id: 'dysoncubeproject:solar_sail_package'})

    //Replace Input
    event.replaceInput({id: 'dysoncubeproject:em_railejector_controller'}, 'minecraft:copper_block', 'mekanism:ultimate_induction_provider')
    event.replaceInput({id: 'dysoncubeproject:ray_receiver_controller'}, 'dysoncubeproject:beam', 'mekanism:ultimate_induction_cell')

})