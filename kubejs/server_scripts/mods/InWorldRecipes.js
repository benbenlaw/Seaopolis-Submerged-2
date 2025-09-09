//In World Recipes

ServerEvents.recipes(event => {

    //Living Gravel
    event.custom({
        "type": "inworldrecipes:drop_item_in_fluid",
        "dropped_items": [{"item": "minecraft:gravel"}],
        "fluid": "nautec:eas",
        "consume_fluid": false,
        "results": [{"item": {"id": "submerged:living_gravel"}}]
    }).id("submerged:living_gravel")
})