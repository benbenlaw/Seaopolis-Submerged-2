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
