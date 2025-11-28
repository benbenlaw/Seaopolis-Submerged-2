//Aqquatic Additions

ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({id: 'aq:turtle_ingot_2' }, "minecraft:gold_ingot", "alltheores:lead_ingot")
    event.replaceInput({id: 'aq:turtle_master_crafting_upgrade' }, "minecraft:prismarine_shard", "alltheores:lead_block")
})
