//PneumaticCraft

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: "pneumaticcraft:pressure_chamber/transistor"})
    event.remove({id: "pneumaticcraft:pressure_chamber/capacitor"})
    event.remove({id: "pneumaticcraft:printed_circuit_board"})

    //Replace Input
    event.replaceInput({id: "pneumaticcraft:uv_light_box"}, "pneumaticcraft:pcb_blueprint", 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]')

    //Pressurized Sand
    event.recipes.pneumaticcraft.pressure_chamber(
        ["4x minecraft:sand", "4x #c:nuggets/bronze", "submerged:organic_water_bucket"],
        1.0,
        ["4x submerged:pressurized_sand", "minecraft:bucket"]
    ).id('submerged:pneumaticcraft/pressurized_sand')

    //Pressurized Bottle
    event.recipes.pneumaticcraft.pressure_chamber(["minecraft:glass_bottle"], 1.0, ["nautec:air_bottle"] ).id('submerged:pneumaticcraft/air_bottle')
    event.recipes.pneumaticcraft.pressure_chamber(["naturesaura:gold_leaf"], 1.0, ["2x naturesaura:gold_powder"] ).id('submerged:pneumaticcraft/gold_powder')
    event.recipes.pneumaticcraft.pressure_chamber([
        "naturesaura:infused_iron", "naturesaura:tainted_gold", "6x minecraft:redstone"
    ], 1.0, ["2x submerged:infused_alloy"] ).id('submerged:pneumaticcraft/infused_alloy')

})
