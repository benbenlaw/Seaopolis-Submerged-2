//Resource Fish

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'resourcefish:infusing_upgrade'})

    //Infusing Upgrade
    event.shaped('resourcefish:infusing_upgrade', ['ABA', 'A A', 'ABA'], {
        A: 'minecraft:copper_ingot',
        B: 'alltheores:fluorite_dust'
    }).id('resourcefish:infusing_upgrade')

    //Metallic Fish Food
    event.shaped('6x resourcefish:metallic_fish_food', [' A ', 'ABA', ' A '], {
        A: 'resourcefish:basic_fish_food',
        B: 'alltheores:fluorite_dust'
    }).id('resourcefish:metallic_fish_food')

    //Crystal Fish Food


    //Nether Fish Food
    event.shaped('6x resourcefish:nether_fish_food', [' A ', 'ABA', ' A '], {
        A: 'resourcefish:basic_fish_food',
        B: 'minecraft:lava_bucket'
    }).id('resourcefish:nether_fish_food')

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
