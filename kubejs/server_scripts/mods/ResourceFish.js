//Resource Fish

ServerEvents.recipes(event => {

    //Tank
    event.shaped('resourcefish:tank_controller', ['AAA', 'CBC', 'AAA'], {
        A: 'minecraft:copper_ingot',
        B: 'mob_grinding_utils:tank',
        C: 'minecraft:redstone'
    }).id('resourcefish:tank_controller')

    //Caviar Processor
    event.shaped('resourcefish:caviar_processor', ['AAA', 'CBC', 'AAA'], {
        A: 'minecraft:copper_ingot',
        B: 'resourcefish:caviar',
        C: 'minecraft:redstone'
    }).id('resourcefish:caviar_processor')

    //Breeding Upgrade
    event.shaped('resourcefish:breeding_upgrade', ['AAA', 'B B', 'AAA'], {
        A: 'minecraft:copper_ingot',
        B: 'resourcefish:caviar'
    }).id('resourcefish:breeding_upgrade')

})
