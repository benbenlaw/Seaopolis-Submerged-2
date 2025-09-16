//Tags in Recipes

ServerEvents.recipes(event => {

    //Replace Inputs
    event.replaceInput({}, "minecraft:crafting_table", '#c:player_workstations/crafting_tables')
    //event.replaceInput({}, "pneumaticcraft:plastic", "#c:plastics")

})

ServerEvents.tags("item", event => {

    //Player Workstations
    event.get("c:dusts/salt").add("nautec:salt")

    //Ingots
    event.get("c:ingots/quartz_enriched_iron").add("refinedstorage:quartz_enriched_iron")

    //Saplings 
    event.get("minecraft:saplings").add("naturesaura:ancient_sapling")

    //Plastics
    event.get("c:plastics").add("pneumaticcraft:plastic")

    //AE2 and RS Be Friends
    event.get("submerged:basic_storage_components").add(['refinedstorage:1k_storage_part', 'refinedstorage:64b_fluid_storage_part', 'refinedstorage_mekanism_integration:64b_chemical_storage_part', 'ae2:cell_component_1k'])
    event.get("submerged:advanced_storage_components").add(['refinedstorage:4k_storage_part', 'refinedstorage:256b_fluid_storage_part', 'refinedstorage_mekanism_integration:256b_chemical_storage_part', 'ae2:cell_component_4k'])
    event.get("submerged:elite_storage_components").add(['refinedstorage:16k_storage_part', 'refinedstorage:1024b_fluid_storage_part', 'refinedstorage_mekanism_integration:1024b_chemical_storage_part', 'ae2:cell_component_16k'])
    event.get("submerged:ultimate_storage_components").add(['refinedstorage:64k_storage_part', 'refinedstorage:4096b_fluid_storage_part', 'refinedstorage_mekanism_integration:8192b_chemical_storage_part', 'ae2:cell_component_64k'])

    event.get("submerged:logic_processors").add(['refinedstorage:basic_processor', 'ae2:logic_processor'])
    event.get("submerged:calculation_processors").add(['refinedstorage:improved_processor', 'ae2:calculation_processor'])
    event.get("submerged:engineering_processors").add(['refinedstorage:advanced_processor', 'ae2:engineering_processor'])



})

ServerEvents.tags("block", event => {

    //Saplings 
    event.get("minecraft:saplings").add("naturesaura:ancient_sapling")
})
