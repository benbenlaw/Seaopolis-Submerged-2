//Minecraft

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'minecraft:netherite_ingot'})
    event.remove({id: 'minecraft:crafting_table'})

    //Wither Skeleton Spawn Egg
    event.shaped('minecraft:wither_skeleton_spawn_egg', ['CAC', 'ABA', 'CAC'], {
        A: 'minecraft:coal',
        B: 'submerged:blank_spawn_egg',
        C: 'minecraft:bone'
    }).id('submerged:wither_skeleton_spawn_egg')

    //Kelp
    event.shaped('minecraft:kelp', ['AA', 'AA'], {
        A: 'resourcefish:caviar[resourcefish:fish_type="submerged:kelp"]'
    }).id('submerged:kelp')

    //Ancient Debris
    event.shaped('minecraft:ancient_debris', ['AA', 'AA'], {
        A: 'strainers:debris_ore_piece'
    }).id('submerged:ancient_debris')

})
