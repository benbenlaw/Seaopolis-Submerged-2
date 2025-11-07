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

    //Disks and Drives

    createDriveRecipes('#submerged:basic_storage_components', 
        'ae2:item_storage_cell_1k', 'refinedstorage:1k_storage_disk', 'refinedstorage:1k_storage_block',
        'ae2:fluid_storage_cell_1k', 'refinedstorage:64b_fluid_storage_disk', 'refinedstorage:64b_fluid_storage_block',
        'appmek:chemical_storage_cell_1k', 'refinedstorage_mekanism_integration:64b_chemical_storage_disk', 'refinedstorage_mekanism_integration:64b_chemical_storage_block'
    )

    createDriveRecipes('#submerged:advanced_storage_components',
        'ae2:item_storage_cell_4k', 'refinedstorage:4k_storage_disk', 'refinedstorage:4k_storage_block',
        'ae2:fluid_storage_cell_4k', 'refinedstorage:256b_fluid_storage_disk', 'refinedstorage:256b_fluid_storage_block',
        'appmek:chemical_storage_cell_4k', 'refinedstorage_mekanism_integration:256b_chemical_storage_disk', 'refinedstorage_mekanism_integration:256b_chemical_storage_block'
    )

    createDriveRecipes('#submerged:elite_storage_components',
        'ae2:item_storage_cell_16k', 'refinedstorage:16k_storage_disk', 'refinedstorage:16k_storage_block', 
        'ae2:fluid_storage_cell_16k', 'refinedstorage:1024b_fluid_storage_disk', 'refinedstorage:1024b_fluid_storage_block',
        'appmek:chemical_storage_cell_16k', 'refinedstorage_mekanism_integration:1024b_chemical_storage_disk', 'refinedstorage_mekanism_integration:1024b_chemical_storage_block'
    )

    createDriveRecipes('#submerged:ultimate_storage_components',
        'ae2:item_storage_cell_64k', 'refinedstorage:64k_storage_disk', 'refinedstorage:64k_storage_block',
        'ae2:fluid_storage_cell_64k', 'refinedstorage:4096b_fluid_storage_disk', 'refinedstorage:4096b_fluid_storage_block',
        'appmek:chemical_storage_cell_64k', 'refinedstorage_mekanism_integration:8192b_chemical_storage_disk', 'refinedstorage_mekanism_integration:8192b_chemical_storage_block'
    )
        
    //Final AE2 Drives 
    event.shaped('ae2:item_storage_cell_256k', ['ADA', 'DBD', 'CCC'], {
            A: '#c:glass_blocks',
            B: 'ae2:cell_component_256k',
            C: 'refinedstorage:quartz_enriched_iron',
            D: 'minecraft:redstone'
        }).id('submerged:item_storage_cell_256k')
    event.remove({id: 'ae2:network/cells/item_storage_cell_256k'})

    event.shaped('ae2:fluid_storage_cell_256k', ['ADA', 'DBD', 'CEC'], {
            A: '#c:glass_blocks',
            B: 'ae2:cell_component_256k',
            C: 'refinedstorage:quartz_enriched_iron',
            D: 'minecraft:redstone',
            E: 'refinedstorage:quartz_enriched_copper'
        }).id('submerged:fluid_storage_cell_256k')
    event.remove({id: 'ae2:network/cells/fluid_storage_cell_256k'})
    
    event.shaped('appmek:chemical_storage_cell_256k', ['ADA', 'DBD', 'CCC'], {
            A: '#c:glass_blocks',
            B: 'ae2:cell_component_256k',
            C: 'alltheores:osmium_ingot',
            D: 'minecraft:redstone',
        }).id('submerged:chemical_storage_cell_256k')
    event.remove({id: 'ae2:network/cells/chemical_storage_cell_256k'})   

    function createDriveRecipes(storage, 
        ae2IdItem, rsIdItem, rsIdItemBlock, 
        ae2IdFluid, rsIdFluid, rsIdFluidBlock, 
        ae2IdChemical, rsIdChemical, rsIdChemicalBlock) {
        
        event.shaped(ae2IdItem, ['ADA', 'DBD', 'CCC'], {
            A: '#c:glass_blocks',
            B: storage,
            C: 'refinedstorage:quartz_enriched_iron',
            D: 'minecraft:redstone'
        }).id(`submerged:${ae2IdItem.split(':')[1]}`)
        event.remove({id: `ae2:network/cells/${ae2IdItem.split(':')[1]}`})

        event.shaped(ae2IdFluid, ['ADA', 'DBD', 'CEC'], {
            A: '#c:glass_blocks',
            B: storage,
            C: 'refinedstorage:quartz_enriched_iron',
            D: 'minecraft:redstone',
            E: 'refinedstorage:quartz_enriched_copper'
        }).id(`submerged:${ae2IdFluid.split(':')[1]}`)
        event.remove({id: `ae2:network/cells/${ae2IdFluid.split(':')[1]}`})

        event.shaped(ae2IdChemical, ['ADA', 'DBD', 'CCC'], {
            A: '#c:glass_blocks',
            B: storage,
            C: 'alltheores:osmium_ingot',
            D: 'minecraft:redstone',
        }).id(`submerged:${ae2IdChemical.split(':')[1]}`)
        event.remove({id: `ae2:network/cells/${ae2IdChemical.split(':')[1]}`})


        
        event.shaped(rsIdItem, ['DDD', 'ABA', 'CCC'], {
            A: '#c:glass_blocks',
            B: storage,
            C: 'refinedstorage:quartz_enriched_iron',
            D: 'minecraft:redstone'
        }).id(`submerged:${rsIdItem.split(':')[1]}`)
        event.remove({id: rsIdItem})
        event.remove({id: `refinedstorage:${rsIdItem.split(':')[1]}_from_storage_housing`})

        event.shaped(rsIdItemBlock, ['ABA', 'ACA', 'ADA'], {
            A: 'refinedstorage:quartz_enriched_iron',
            B: storage,
            C: 'refinedstorage:machine_casing',
            D: 'minecraft:redstone'
        }).id(`submerged:${rsIdItemBlock.split(':')[1]}`)
        event.remove({id: rsIdItemBlock})
        
        event.shaped(rsIdFluid, ['DDD', 'ABA', 'CEC'], {
            A: '#c:glass_blocks',
            B: storage,
            C: 'refinedstorage:quartz_enriched_iron',
            D: 'minecraft:redstone',
            E: 'refinedstorage:quartz_enriched_copper'
        }).id(`submerged:${rsIdFluid.split(':')[1]}`)
        event.remove({id: rsIdFluid})
        event.remove({id: `refinedstorage:${rsIdFluid.split(':')[1]}_from_storage_housing`})

        event.shaped(rsIdFluidBlock, ['ABA', 'ECE', 'ADA'], {
            A: 'refinedstorage:quartz_enriched_iron',
            B: storage,
            C: 'refinedstorage:machine_casing',
            D: 'minecraft:redstone',
            E: 'refinedstorage:quartz_enriched_copper'
        }).id(`submerged:${rsIdFluidBlock.split(':')[1]}`)
        event.remove({id: rsIdFluidBlock})

        event.shaped(rsIdChemical, ['DDD', 'ABA', 'CCC'], {
            A: '#c:glass_blocks',
            B: storage,
            C: 'alltheores:osmium_ingot',
            D: 'minecraft:redstone',
        }).id(`submerged:${rsIdChemical.split(':')[1]}`)
        event.remove({id: rsIdChemical})
        event.remove({id: `refinedstorage_mekanism_integration:${rsIdChemical.split(':')[1]}_from_storage_housing`})

        event.shaped(rsIdChemicalBlock, ['ABA', 'ECE', 'ADA'], {
            A: 'alltheores:osmium_ingot',
            B: storage,
            C: 'refinedstorage:machine_casing',
            D: 'minecraft:redstone',
            E: 'alltheores:osmium_ingot'

        }).id(`submerged:${rsIdChemicalBlock.split(':')[1]}`)
        event.remove({id: rsIdChemicalBlock})

    }


})
    