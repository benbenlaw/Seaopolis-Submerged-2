//Mod Specific Unification

ServerEvents.recipes(event => {

    //Remove Banned Item Recipes
    event.remove({output: '#submerged:banned_items'})
    event.remove({id: 'ae2:blasting/silicon_from_certus_quartz_dust'})
    event.remove({id: 'refinedstorage:silicon'})
    event.remove({id: 'enderio:sag_milling/sand'})
    event.remove({id: 'enderio:sag_milling/clay'})
    event.remove({id: 'mekanism:compat/ae2/sand_to_silicon'})
    event.remove({id: 'mekanism:compat/ae2/certus_quartz_dust_to_silicon'})
    event.remove({id: 'ae2:smelting/silicon_from_certus_quartz_dust'})

    event.remove({id: 'refinedstorage_mekanism_integration:64b_chemical_storage_part'})
    event.remove({id: 'refinedstorage:64b_fluid_storage_part'})
    event.remove({id: 'ae2:network/cells/item_storage_components_cell_1k_part'})
    event.remove({id: 'refinedstorage:1k_storage_part'})

    event.remove({id: 'refinedstorage_mekanism_integration:256b_chemical_storage_part'})
    event.remove({id: 'refinedstorage:256b_fluid_storage_part'})
    event.remove({id: 'ae2:network/cells/item_storage_components_cell_4k_part'})
    event.remove({id: 'ae2:network/cells/item_storage_components_cell_16k_part'})
    event.remove({id: 'refinedstorage:1024b_fluid_storage_part'})
    event.remove({id: 'refinedstorage_mekanism_integration:1024b_chemical_storage_part'})
    event.remove({id: 'ae2:network/cells/item_storage_components_cell_64k_part'})
    event.remove({id: 'refinedstorage:4096b_fluid_storage_part'})
    event.remove({id: 'refinedstorage_mekanism_integration:8192b_chemical_storage_part'})
    event.remove({id: 'refinedstorage:4k_storage_part'})
    event.remove({id: 'refinedstorage:64k_storage_part'})
    event.remove({id: 'refinedstorage:16k_storage_part'})
    
    event.remove({id: /refinedstorage:.*_upgrade/})
    event.remove({id: /refinedstorage_mekanism_integration:.*_upgrade/})

    //Nautech
    event.replaceInput({}, 'nautec:cast_iron_nugget', '#c:nuggets/steel')
    event.replaceInput({}, 'nautec:cast_iron_ingot', '#c:ingots/steel')
    event.replaceInput({}, 'nautec:cast_iron_rod', '#c:rods/steel')
    event.replaceInput({}, 'nautec:gear', '#c:gears/steel')
    event.replaceInput({}, 'nautec:whisk', 'create:whisk')
})
    