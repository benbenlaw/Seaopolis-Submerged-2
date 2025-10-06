//Storage Drawers
ServerEvents.recipes(event => {
    
    //Relace Input
    event.replaceInput({id: 'storagedrawers:controller'}, 'minecraft:comparator', 'minecraft:amethyst_shard')
    event.replaceInput({id: 'storagedrawers:controller'}, 'minecraft:diamond', 'minecraft:amethyst_block')
   
    event.replaceInput({id: 'storagedrawers:controller_io'}, 'minecraft:comparator', 'minecraft:amethyst_shard')
    event.replaceInput({id: 'storagedrawers:controller_io'}, 'minecraft:gold_ingot', 'minecraft:iron_ingot')
    
    event.replaceInput({mod: 'storagedrawers'}, 'minecraft:gold_ingot', 'alltheores:bronze_ingot')
    event.replaceInput({mod: 'storagedrawers'}, 'minecraft:gold_nugget', 'alltheores:bronze_nugget')

})