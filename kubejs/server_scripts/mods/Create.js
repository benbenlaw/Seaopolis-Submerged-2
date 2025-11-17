//Create

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'create:crafting/materials/andesite_alloy'})
    
    event.remove({id: 'create:splashing/soul_sand'})
    event.remove({id: 'create:splashing/red_sand'})
    event.remove({id: 'create:splashing/gravel'})

    event.remove({id: 'create:haunting/lapis_recycling'})
    event.remove({id: 'create:crushing/diamond_ore'})
    event.remove({id: 'create:crushing/deepslate_diamond_ore'})
    event.remove({id: 'create:crushing/emerald_ore'})
    event.remove({id: 'create:crushing/deepslate_emerald_ore'})

    //Replace Input
    event.replaceInput({id: 'create:crafting/kinetics/deployer'}, 'create:electron_tube', 'minecraft:lapis_lazuli')
    event.replaceInput({id: 'create:crafting/kinetics/goggles'}, '#c:plates/gold', '#c:plates/brass')
    event.replaceInput({id: 'create:crafting/kinetics/wrench'}, '#c:plates/gold', '#c:plates/brass')

    //Milling
    event.recipes.create.milling('2x naturesaura:gold_powder', 'naturesaura:gold_leaf')

    //Sandpaper Polishing
    event.recipes.create.sandpaper_polishing('pneumaticcraft:empty_pcb[pneumaticcraft:uv_exposure=100]', 'pneumaticcraft:empty_pcb').id('submerged:create/uv_exposed_pcb')
    //Mixing 
    //These recipes are located in submerged:recipes/create/mixing

    //Sequenced Assembly
    //These recipes are located in submerged:recipes/create/sequenced_assembly

})
