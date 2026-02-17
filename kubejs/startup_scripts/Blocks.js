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

    event.create('submerged:assembled_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:nether_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:charged_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:matter_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:ancient_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:teary_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:toxic_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:fiery_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:stormy_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:icy_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:star_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:draconic_gravel')
        .hardness(2)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()

    event.create('submerged:pressure_chamber_controller', 'cardinal')
        .hardness(2)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()

    event.create('submerged:nether_brick_lock')
        .hardness(2)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()

    event.create('submerged:tuff_brick_lock')
        .hardness(2)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()

    event.create('submerged:nether_star_block')
        .hardness(3)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()

    event.create('submerged:nether_force_bricks')
        .hardness(2)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        
    event.create('submerged:nether_portal_frame')
        .hardness(50)
        .tagBlock(['minecraft:mineable/pickaxe', 'bblcore:nether_portal_frame'])

    event.create('submerged:solclipsium_block')
        .hardness(5)
        .tagBlock('minecraft:mineable/pickaxe').tagBlock('c:blocks/solclipsium')
        .soundType('metal')

    event.create('submerged:unactive_atlantis_portal_frame')
        .hardness(-1)
        .soundType('metal')

    event.create('submerged:active_atlantis_portal_frame')
        .hardness(-1)
        .soundType('metal')

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

