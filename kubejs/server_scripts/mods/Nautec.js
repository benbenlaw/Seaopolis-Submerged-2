//Nautec

ServerEvents.recipes(event => {
    
    //Replace 
    event.replaceInput({id: "nautec:diving_chestplate"}, "minecraft:copper_ingot", "minecraft:redstone")

    //Aquarine Steel Compound
    event.recipes.shapeless('2x nautec:aquarine_steel_compound', [
        "minecraft:raw_iron", "minecraft:prismarine_crystals", "#c:ingots/steel"
    ]).id('nautec:aquarine_steel_compound')

    //Raw Iron
    event.recipes.nautec.item_transformation(
        "minecraft:iron_block", 100, 0.0, "minecraft:raw_iron"
    )

    //Salt Water - Mixing - DataPack Recipe

})
