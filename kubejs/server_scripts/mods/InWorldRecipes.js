//In World Recipes

ServerEvents.recipes(event => {

    //Grass Block
    event.recipes.inworldrecipes.block_interaction(
        "right", "minecraft:dirt", "minecraft:bone_meal",
        false, true, false, true).outputBlockState("minecraft:grass_block")
    .id("submerged:grass_block")

    //Log Sheets
    event.recipes.inworldrecipes.block_interaction(
        "left", "#minecraft:logs", "totemic:totem_whittling_knife",
        true, false, true, false).results(["6x opolisutilities:log_sheet"])
    .id("submerged:log_sheet")

    //Living Gravel
    event.custom({
        "type": "inworldrecipes:drop_item_in_fluid",
        "dropped_items": [{"item": "opolisutilities:ender_pearl_fragment"}, {"item": "submerged:assembled_gravel"}],
        "fluid": "mob_grinding_utils:fluid_xp",
        "consume_fluid": true,
        "results": [{"item": {"id": "submerged:living_gravel"}}]
    }).id("submerged:living_gravel")

    //Exothermic Water
    event.custom({
        "type": "inworldrecipes:drop_item_in_fluid_converts_fluid",
        "dropped_item":{"item": "opolisutilities:mini_coal","count": 4},
        "fluid": "minecraft:water",
        "new_fluid": "submerged:exothermic_water",
        "destroy_items": true
    }).id("submerged:exothermic_water")

    //Totemic Infused Water
    event.custom({
        "type": "inworldrecipes:drop_item_in_fluid_converts_fluid",
        "dropped_item":{"item": "submerged:totemic_infused_gravel","count": 64},
        "fluid": "minecraft:water",
        "new_fluid": "submerged:totemic_infused_water",
        "destroy_items": true
    }).id("submerged:totemic_infused_water")

    //Salt Water
    event.custom({
        "type": "inworldrecipes:drop_item_in_fluid_converts_fluid",
        "dropped_item":{"item": "mekanism:block_salt","count": 1},
        "fluid": "minecraft:water",
        "new_fluid": "submerged:salt_water",
        "destroy_items": true
    }).id("submerged:salt_water")

})