//Draconic Evolution

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'draconicevolution:components/draconium_ingot_from_dust'})
    event.remove({id: 'draconicevolution:components/draconium_core'})
    event.remove({id: 'draconicevolution:components/wyvern_core'})
    event.remove({id: 'draconicevolution:compress/draconium_block'})
    event.remove({id: 'draconicevolution:machines/wyvern_crafting_injector'})
    event.remove({id: 'draconicevolution:awakened_draconium_block'})
    event.remove({id: 'draconicevolution:machines/reactor_core'})

    //Replace Input

    //Luminessence
    event.recipes.draconicevolution.fusion_crafting(
        "minecraft:glowstone_dust",
        [
            "minecraft:glowstone_dust",
            "alltheores:lumium_dust",
            "minecraft:gunpowder",
            ["draconicevolution:draconium_core", false],
            ["draconicevolution:wyvern_core", false],
            ["draconicevolution:awakened_core", false],
            ["draconicevolution:chaotic_core", false],
        ],
        "extendedcrafting:luminessence",
        "chaotic",
        100000, //energy
    ).id('submerged:draconicevolution/luminessence')

    //Luminessence Block
    event.recipes.draconicevolution.fusion_crafting(
        'compressedblocks:crated_glowstone_dust',
        [
            'compressedblocks:crated_glowstone_dust',
            "alltheores:lumium_block",
            'compressedblocks:crated_gunpowder',
            ["draconicevolution:draconium_core", false],
            ["draconicevolution:wyvern_core", false],
            ["draconicevolution:awakened_core", false],
            ["draconicevolution:chaotic_core", false],
        ],  
        "extendedcrafting:luminessence_block",
        "chaotic",
        900000, //energy
    ).id('submerged:draconicevolution/luminessence_block')

    //Ender Ingot
    event.recipes.draconicevolution.fusion_crafting(
        "enderio:pulsating_alloy_ingot",
        [
            "minecraft:ender_pearl",
            ["draconicevolution:draconium_core", false],
            ["draconicevolution:wyvern_core", false],
            ["draconicevolution:awakened_core", false],
            ["draconicevolution:chaotic_core", false],
        ],
        "extendedcrafting:ender_ingot",
        "chaotic",
        100000, //energy
    ).id('submerged:draconicevolution/ender_ingot')

    //Ender Ingot Block
    event.recipes.draconicevolution.fusion_crafting(
        "enderio:pulsating_alloy_block",
        [
            "compressedblocks:crated_ender_pearl",
            ["draconicevolution:draconium_core", false],
            ["draconicevolution:wyvern_core", false],
            ["draconicevolution:awakened_core", false],
            ["draconicevolution:chaotic_core", false],
        ],
        "extendedcrafting:ender_ingot_block",
        "chaotic",
        900000, //energy
    ).id('submerged:draconicevolution/ender_ingot_block')
        

    //Redstone Ingot
    event.recipes.draconicevolution.fusion_crafting(
        "minecraft:redstone",
        [
            "enderio:redstone_alloy_ingot",
            ["draconicevolution:draconium_core", false], 
            ["draconicevolution:wyvern_core", false], 
            ["draconicevolution:awakened_core", false], 
            ["draconicevolution:chaotic_core", false], 
        ], 
        "extendedcrafting:redstone_ingot",
        "chaotic",
        100000, //energy
    ).id('submerged:draconicevolution/redstone_ingot') 

    //Redstone Ingot Block
    event.recipes.draconicevolution.fusion_crafting(
        "minecraft:redstone_block",
        [
            "enderio:redstone_alloy_block",
            ["draconicevolution:draconium_core", false],
            ["draconicevolution:wyvern_core", false],
            ["draconicevolution:awakened_core", false],
            ["draconicevolution:chaotic_core", false],
        ],
        "extendedcrafting:redstone_ingot_block",  
        "chaotic",
        900000, //energy
    ).id('submerged:draconicevolution/redstone_ingot_block')

    //Black Iron Ingot
    event.recipes.draconicevolution.fusion_crafting(
        "minecraft:iron_ingot",
        [
            ["draconicevolution:draconium_core", false], 
            ["draconicevolution:wyvern_core", false], 
            ["draconicevolution:awakened_core", false], 
            ["draconicevolution:chaotic_core", false], 
        ], 
        "extendedcrafting:black_iron_ingot",
        "chaotic",
        100000, //energy
    ).id('submerged:draconicevolution/black_iron_ingot') 

    //Black Iron Block
    event.recipes.draconicevolution.fusion_crafting(
        "minecraft:iron_block",
        [
            ["draconicevolution:draconium_core", false], 
            ["draconicevolution:wyvern_core", false], 
            ["draconicevolution:awakened_core", false], 
            ["draconicevolution:chaotic_core", false], 
        ], 
        "extendedcrafting:black_iron_block",
        "chaotic",
        900000, //energy
    ).id('submerged:draconicevolution/black_iron_block') 

    //Draconium Core
    event.shaped('draconicevolution:draconium_core', ['ABA', 'BCB', 'ABA'], {
        A: 'draconicevolution:draconium_ingot',
        B: 'submerged:prime_ingot',
        C: 'draconicevolution:dragon_heart'
    }).id('submerged:draconicevolution/draconium_core')
    
    //Wyvern Core tier can be (draconium, wyvern, draconic, chaotic)
    event.recipes.draconicevolution.fusion_crafting(
        "draconicevolution:draconium_core",
        [
            "draconicevolution:draconium_ingot", 
            "draconicevolution:draconium_ingot", 
            "draconicevolution:draconium_ingot", 
            "draconicevolution:draconium_ingot", 
            "minecraft:nether_star", 
            "minecraft:nether_star", 
            "minecraft:nether_star", 
            "minecraft:nether_star", 
            ["iceandfire:lightning_dragon_heart", false], 
            ["iceandfire:ice_dragon_heart", false], 
            ["iceandfire:fire_dragon_heart", false], 
            ["draconicevolution:dragon_heart", false], 
        ], 
        "draconicevolution:wyvern_core",
        "draconium",
        1000000, //energy
    ).id('submerged:draconicevolution/wyvern_core') 
    
    //Draconium Block
    event.recipes.draconicevolution.fusion_crafting(
        "draconicevolution:draconium_ingot",
        [
            "draconicevolution:draconium_ingot", 
            "draconicevolution:draconium_ingot", 
            "draconicevolution:draconium_ingot", 
            "draconicevolution:draconium_ingot", 
            "draconicevolution:draconium_ingot", 
            "draconicevolution:draconium_ingot", 
            "draconicevolution:draconium_ingot", 
            "draconicevolution:draconium_ingot", 
        ], 
        "draconicevolution:draconium_block",
        "wyvern",
        2500000, //energy
    ).id('submerged:draconicevolution/draconium_block')
    
    //Wyvern Injector
    event.recipes.draconicevolution.fusion_crafting(
        "draconicevolution:basic_crafting_injector",
        [
            "draconicevolution:wyvern_core", 
            "draconicevolution:wyvern_core", 
            "draconicevolution:draconium_core", 
            "draconicevolution:draconium_core", 
            "submerged:prime_ingot", 
            "submerged:prime_ingot", 
            "submerged:prime_ingot", 
            "submerged:prime_ingot", 
        ], 
        "draconicevolution:wyvern_crafting_injector",
        "draconium",
        50000, //energy
    ).id('submerged:draconicevolution/wyvern_crafting_injector')


})
