//Resource Fish

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'resourcefish:infusing_upgrade'})

    event.remove({id: 'resourcefish:breeding/peridot'})
    event.remove({id: 'resourcefish:breeding/sapphire'})
    event.remove({id: 'resourcefish:breeding/ruby'})
    event.remove({id: 'resourcefish:breeding/iridium'})
    event.remove({id: 'resourcefish:breeding/osmium'})
    event.remove({id: 'resourcefish:breeding/copper'})
    event.remove({id: 'resourcefish:breeding/tin'})
    event.remove({id: 'resourcefish:breeding/amethyst'})
    event.remove({id: 'resourcefish:breeding/uranium'})
    event.remove({id: 'resourcefish:breeding/aluminum'})
    event.remove({id: 'resourcefish:breeding/iron'})
    event.remove({id: 'resourcefish:breeding/diamond'})
    event.remove({id: 'resourcefish:breeding/nickel'})
    event.remove({id: 'resourcefish:breeding/quartz'})
    event.remove({id: 'resourcefish:breeding/ancient'})
    event.remove({id: 'resourcefish:breeding/redstone'})
    event.remove({id: 'resourcefish:breeding/lead'})
    event.remove({id: 'resourcefish:breeding/lapis'})
    event.remove({id: 'resourcefish:breeding/emerald'})
    event.remove({id: 'resourcefish:breeding/silver'})
    event.remove({id: 'resourcefish:breeding/platinum'})
    event.remove({id: 'resourcefish:breeding/zinc'})
    event.remove({id: 'resourcefish:breeding/coal'})


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
