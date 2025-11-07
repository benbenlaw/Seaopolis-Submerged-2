//Infinity Storage
ServerEvents.recipes(event => {
        
    //Replace Input
    event.replaceInput({id: 'infinitystorage:empty_infinity_drive'}, 'minecraft:nether_star', 'mekanism:pellet_antimatter')

    //Infinity Storage Drive 
    event.shaped('infinitystorage:infinity_storage_drive', ['AAA', 'BCB', 'AAA'], {
        A: 'minecraft:netherite_ingot',
        B: 'ae2:cell_component_256k',
        C: 'submerged:essence_of_the_sea'
    }).id('infinitystorage:infinity_storage_drive')


})