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

    event.remove({id: 'create:mixing/andesite_alloy'})

    //Replace Input
    event.replaceInput({id: 'create:crafting/kinetics/deployer'}, 'create:electron_tube', 'minecraft:lapis_lazuli')
    event.replaceInput({id: 'create:crafting/kinetics/goggles'}, '#c:plates/gold', '#c:plates/brass')
    event.replaceInput({id: 'create:crafting/kinetics/wrench'}, '#c:plates/gold', '#c:plates/brass')

    //Pressing 
    event.recipes.create.pressing('submerged:prismarine_ingot', 'submerged:corrupted_prismarine_crystal').id('submerged:create/pressing/corrupted_prismarine_to_prismarine_ingot')

    //Milling
    event.recipes.create.milling('2x naturesaura:gold_powder', 'naturesaura:gold_leaf').id('submerged:create/milling/gold_leaf_to_gold_powder')
   
    //Spout
    event.recipes.create.filling('pneumaticcraft:empty_pcb[pneumaticcraft:uv_exposure=100]', ['pneumaticcraft:empty_pcb', '25x casting:molten_silicon']).id('submerged:create/filling/empty_pcb_with_silicon')



    //Mixing 
    //These recipes are located in submerged:recipes/create/mixing

    //Sequenced Assembly
    //These recipes are located in submerged:recipes/create/sequenced_assembly

})
