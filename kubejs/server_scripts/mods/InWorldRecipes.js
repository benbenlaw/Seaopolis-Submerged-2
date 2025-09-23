//In World Recipes

ServerEvents.recipes(event => {

    //Prismarine Crystal
    event.recipes.inworldrecipes.block_interaction(
        "right", "submerged:unactivated_prismarine_crystal", "submerged:prismarine_crystal_activator",
        false, true, false, false).outputBlockState("nautec:prismarine_crystal")
    .id("submerged:prismarine_crystal")

    //Log Sheets
    event.recipes.inworldrecipes.block_interaction(
        "left", "#minecraft:logs", "totemic:totem_whittling_knife",
        true, false, true, false).outputBlockState("minecraft:air").results(["6x opolisutilities:log_sheet"])
    .id("submerged:log_sheet")

    //Living Gravel
    event.custom({
        "type": "inworldrecipes:drop_item_in_fluid",
        "dropped_items": [{"item": "minecraft:gravel"}],
        "fluid": "nautec:eas",
        "consume_fluid": false,
        "results": [{"item": {"id": "submerged:living_gravel"}}]
    }).id("submerged:living_gravel")
})