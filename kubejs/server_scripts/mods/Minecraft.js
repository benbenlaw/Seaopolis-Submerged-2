//Minecraft

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'minecraft:crafting_table'})

    //Kelp
    event.shaped('minecraft:kelp', ['AA', 'AA'], {
        A: 'resourcefish:caviar[resourcefish:fish_type="submerged:kelp"]'
    }).id('submerged:kelp')

    //Ancient Debris
    event.shaped('minecraft:ancient_debris', ['AA', 'AA'], {
        A: 'strainers:debris_ore_piece'
    }).id('submerged:ancient_debris')

})
