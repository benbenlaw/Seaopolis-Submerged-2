//Create

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: "create:crafting/materials/andesite_alloy"})
    
    event.remove({id: "create:splashing/soul_sand"})
    event.remove({id: "create:splashing/red_sand"})
    event.remove({id: "create:splashing/gravel"})

    event.remove({id: "create:haunting/lapis_recycling"})

    //Replace Input
    event.replaceInput({id: "create:crafting/kinetics/deployer"}, "create:electron_tube", "minecraft:lapis_lazuli")

    //Pressing
    event.recipes.create.pressing(["minecraft:glass_bottle"], ["nautec:air_bottle"]).id('submerged:create/air_bottle')

    //Milling
    event.recipes.create.milling("naturesaura:gold_leaf", 200, "2x naturesaura:gold_powder").id('submerged:create/gold_powder')

    //Sandpaper Polishing
    event.recipes.create.sandpaper_polishing('pneumaticcraft:empty_pcb', 'pneumaticcraft:empty_pcb[pneumaticcraft:uv_exposure=100]').id('submerged:create/uv_exposed_pcb')

    //Mixing 
    //These recipes are located in submerged:recipes/create/mixing

    //Sequenced Assembly
    //These recipes are located in submerged:recipes/create/sequenced_assembly

})
