//Banned Items and Blocks
ServerEvents.tags("item", event => {

    //Banned Items
    event.get("submerged:banned_items").add([
        "nautec:cast_iron_nugget",
        "nautec:cast_iron_ingot",
        "nautec:cast_iron_rod",
        "nautec:gear",
        "nautec:whisk"

    ])
})

ServerEvents.tags("block", event => {

})

