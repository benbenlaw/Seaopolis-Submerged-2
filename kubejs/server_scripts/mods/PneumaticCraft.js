//PneumaticCraft

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: "pneumaticcraft:pressure_chamber/transistor"})
    event.remove({id: "pneumaticcraft:pressure_chamber/capacitor"})
    event.remove({id: "pneumaticcraft:printed_circuit_board"})

    //Replace Input
    event.replaceInput({id: "pneumaticcraft:uv_light_box"}, "pneumaticcraft:pcb_blueprint", 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]')

    //Blaze Powder
    event.recipes.pneumaticcraft.pressure_chamber(
        ['minecraft:blaze_rod'], 
        1.0, 
        ['3x minecraft:blaze_powder'])
    .id('submerged:pneumaticcraft/blaze_powder')

    //Nether Gravel 
    event.recipes.pneumaticcraft.pressure_chamber(
        ["4x submerged:living_gravel", "8x minecraft:nether_wart", "minecraft:lava_bucket"],
        2.0,
        ["4x submerged:nether_gravel", "minecraft:bucket"]
    ).id('submerged:pneumaticcraft/nether_gravel')

    event.recipes.pneumaticcraft.pressure_chamber(
        ["4x submerged:living_gravel", "8x minecraft:nether_wart", "casting:molten_blaze_bucket"],
        2.0,
        ["4x submerged:nether_gravel", "minecraft:bucket"]
    ).id('submerged:pneumaticcraft/nether_gravel_blaze')

    //Living Gravel
    event.recipes.pneumaticcraft.pressure_chamber(
        ["submerged:assembled_gravel", "submerged:living_mob_matter", 'mob_grinding_utils:fluid_xp_bucket'],
        2.0,
        ["submerged:living_gravel", 'minecraft:bucket']
    ).id('submerged:pneumaticcraft/living_gravel')

    //Assembled Gravel
    event.recipes.pneumaticcraft.pressure_chamber(
        ["4x submerged:totemic_infused_gravel", "4x minecraft:sand", "submerged:organic_water_bucket"],
        1.0,
        ["4x submerged:assembled_gravel", "minecraft:bucket"]
    ).id('submerged:pneumaticcraft/assembled_gravel')
    
    //Gold Powder
    event.recipes.pneumaticcraft.pressure_chamber(["naturesaura:gold_leaf"], 1.0, ["2x naturesaura:gold_powder"] ).id('submerged:pneumaticcraft/gold_powder')

    //Infused Alloy
    event.recipes.pneumaticcraft.pressure_chamber(["naturesaura:infused_iron", "naturesaura:tainted_gold", "6x minecraft:redstone"], 1.0, ["2x submerged:infused_alloy"] ).id('submerged:pneumaticcraft/infused_alloy')

    //Quartz Enriched Iron
    event.recipes.pneumaticcraft.pressure_chamber(["minecraft:quartz", "ae2:certus_quartz_crystal", "3x minecraft:iron_ingot"], 2.0, ["4x refinedstorage:quartz_enriched_iron"] ).id('submerged:pneumaticcraft/quartz_enriched_iron')

    //Netherite
    event.recipes.pneumaticcraft.pressure_chamber(["4x minecraft:netherite_scrap", "4x minecraft:gold_ingot"], 3.0, ["1x minecraft:netherite_ingot"] ).id('submerged:pneumaticcraft/netherite_ingot')

})
