//Aqquatic Additions

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'aq:duplicate_turtle_master_crafting_upgrade' })

    //Replace Input
    event.replaceInput({id: 'aq:turtle_ingot_2' }, "minecraft:gold_ingot", "alltheores:lead_ingot")
    event.replaceInput({id: 'aq:turtle_master_crafting_upgrade' }, "minecraft:prismarine_shard", "alltheores:lead_block")
    event.replaceInput({id: 'aq:turtle_master_crafting_upgrade' }, "minecraft:heart_of_the_sea", "minecraft:netherite_upgrade_smithing_template")

    //Template Duplicate
    event.shaped('2x aq:turtle_master_crafting_upgrade', ['ABA', 'ACA', 'AAA'], {
        A: 'minecraft:prismarine_shard',
        B: 'aq:turtle_master_crafting_upgrade',
        C: 'minecraft:turtle_scute',
    }).id('aq:duplicate_turtle_master_crafting_upgrade')

})
