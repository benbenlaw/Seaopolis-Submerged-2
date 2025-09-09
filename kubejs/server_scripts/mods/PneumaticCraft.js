//PneumaticCraft

ServerEvents.recipes(event => {

    //Remove


    //Pressurized Sand
    event.recipes.pneumaticcraft.pressure_chamber(
        ["4x minecraft:sand", "4x #c:nuggets/bronze", "submerged:organic_water_bucket"],
        1.0,
        ["4x submerged:pressurized_sand", "minecraft:bucket"]
    ).id('submerged:pneumaticcraft/pressurized_sand')

    //Pressurized Bottle
    event.recipes.pneumaticcraft.pressure_chamber(["minecraft:glass_bottle"], 1.0, ["nautec:air_bottle"] ).id('submerged:pneumaticcraft/air_bottle')
    event.recipes.pneumaticcraft.pressure_chamber(["naturesaura:gold_leaf"], 1.0, ["2x naturesaura:gold_powder"] ).id('submerged:pneumaticcraft/gold_powder')

})
