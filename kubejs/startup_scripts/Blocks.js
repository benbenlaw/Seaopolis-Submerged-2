//Blocks

Platform.getInfo('submerged').name = 'Submerged'

StartupEvents.registry("block", (event) => {

    //Misc Blocks
    event.create('submerged:refined_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:totemic_infused_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:living_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:pressurized_sand')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .sandSoundType()

    event.create('submerged:pressure_chamber_controller')
        .hardness(2)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()

    //Terracotta Lock Blocks
    colors.forEach(color => {
        event.create(`submerged:${color}_terracotta_lock`)
            .hardness(3)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBoth('submerged:terracotta_lock')
            .stoneSoundType()
            .fullBlock(true)
    })
})


BlockEvents.modification(event => {

    colors.forEach(color => {
        event.modify(`minecraft:${color}_terracotta`, block => {
            block.destroySpeed = 0.2
            block.requiresTool = false
        })
    })
})

