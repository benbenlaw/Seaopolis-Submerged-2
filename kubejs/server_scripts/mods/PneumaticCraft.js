//PneumaticCraft

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: "pneumaticcraft:pressure_chamber/transistor"})
    event.remove({id: "pneumaticcraft:pressure_chamber/capacitor"})
    event.remove({id: "pneumaticcraft:pressure_chamber/coal_to_diamond"})
    event.remove({id: "pneumaticcraft:printed_circuit_board"})

    //Replace Input
    event.replaceInput({id: "pneumaticcraft:uv_light_box"}, "pneumaticcraft:pcb_blueprint", 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]')

    //Draconic Gravel
    event.recipes.pneumaticcraft.pressure_chamber(
        ["atlantis:sunken_gravel", "2x iceandfire:dread_shard", "submerged:dreaded_draconic_compound"],
        4.0,
        ["submerged:draconic_gravel"]
    ).id('submerged:pneumaticcraft/draconic_gravel')

    //Prismarine Ingot
    event.recipes.pneumaticcraft.pressure_chamber(
        ['submerged:corrupted_prismarine_crystal'],
        1.5,
        ['submerged:prismarine_ingot']
    ).id('submerged:pneumaticcraft/prismarine_ingot')

    //Mini Pressure Chamber Recipe
    event.recipes.pneumaticcraft.pressure_chamber(
        ['2x pneumaticcraft:pressure_chamber_glass', '2x pneumaticcraft:pressure_chamber_interface', 'pneumaticcraft:pressure_chamber_valve', '21x pneumaticcraft:pressure_chamber_wall'],
        3.0,
        ['custommachinery:custom_machine_item[custommachinery:machine="submerged:mini_pressure_chamber"]']
    ).id('submerged:pneumaticcraft/mini_pressure_chamber')

    //Compressed Iron Gear
    event.recipes.pneumaticcraft.pressure_chamber(
        ['4x pneumaticcraft:ingot_iron_compressed', 'casting:gear_mold'],
        1.5,
        ['pneumaticcraft:compressed_iron_gear', 'casting:gear_mold']
    ).id('submerged:pneumaticcraft/compressed_iron_gear')

    //Teary Gravel
    event.recipes.pneumaticcraft.pressure_chamber(
        ["8x submerged:ancient_gravel", "submerged:warden_tears_bucket"],
        2.0,
        ["8x submerged:teary_gravel", "minecraft:bucket"]
    ).id('submerged:pneumaticcraft/teary_gravel')

    //Ai Controller
    event.recipes.pneumaticcraft.pressure_chamber(
        ['enderio:mind_killer', 'enderio:z_logic_controller', 'enderio:guardian_diode', 'enderio:skeletal_contractor', 'enderio:ender_resonator', 'industrialforegoing:latex_bucket'],
        3.0,
        ['submerged:ai_controller', 'minecraft:bucket']
    ).id('submerged:pneumaticcraft/ai_controller')

    //Blaze Powder
    event.recipes.pneumaticcraft.pressure_chamber(
        ['minecraft:blaze_rod'], 
        1.0, 
        ['3x minecraft:blaze_powder'])
    .id('submerged:pneumaticcraft/blaze_powder')

    //Nether Gravel 
    event.recipes.pneumaticcraft.pressure_chamber(
        ["4x submerged:living_gravel", "4x minecraft:nether_wart", "minecraft:lava_bucket"],
        2.0,
        ["4x submerged:nether_gravel", "minecraft:bucket"]
    ).id('submerged:pneumaticcraft/nether_gravel')

    event.recipes.pneumaticcraft.pressure_chamber(
        ["10x submerged:living_gravel", "20x minecraft:nether_wart", "casting:molten_blaze_bucket"],
        2.0,
        ["10x submerged:nether_gravel", "minecraft:bucket"]
    ).id('submerged:pneumaticcraft/nether_gravel_blaze')

    event.recipes.pneumaticcraft.pressure_chamber(
        ["40x submerged:living_gravel", "40x minecraft:nether_wart", "1x industrialforegoing:pink_slime_bucket", "industrialforegoing:meat_bucket", "industrialforegoing:meat_bucket", "industrialforegoing:meat_bucket", "industrialforegoing:meat_bucket", "industrialforegoing:meat_bucket"],
        2.0,
        ["40x submerged:nether_gravel", "6x minecraft:bucket"]
    ).id('submerged:pneumaticcraft/nether_gravel_meat')

    //Living Gravel
    event.recipes.pneumaticcraft.pressure_chamber(
        ["8x submerged:assembled_gravel", "8x opolisutilities:ender_pearl_fragment", 'mob_grinding_utils:fluid_xp_bucket'],
        2.0,
        ["8x submerged:living_gravel", 'minecraft:bucket']
    ).id('submerged:pneumaticcraft/living_gravel')

    //Assembled Gravel
    event.recipes.pneumaticcraft.pressure_chamber(
        ["4x submerged:totemic_infused_gravel", "4x minecraft:sand", "submerged:organic_water_bucket"],
        1.0,
        ["4x submerged:assembled_gravel", "minecraft:bucket"]
    ).id('submerged:pneumaticcraft/assembled_gravel')
    
    event.recipes.pneumaticcraft.pressure_chamber(
        ["4x submerged:totemic_infused_gravel", "4x minecraft:sand", 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"submerged:organic_water"}]'],
        1.0,
        ["4x submerged:assembled_gravel", "ceramicbucket:ceramic_bucket"]
    ).id('submerged:pneumaticcraft/assembled_gravel_ceramic')
    
    //Gold Powder
    event.recipes.pneumaticcraft.pressure_chamber(["naturesaura:gold_leaf"], 1.0, ["2x naturesaura:gold_powder"] ).id('submerged:pneumaticcraft/gold_powder')

    //Infused Alloy
    event.recipes.pneumaticcraft.pressure_chamber(["naturesaura:infused_iron", "naturesaura:tainted_gold", "6x minecraft:redstone"], 1.0, ["2x submerged:infused_alloy"] ).id('submerged:pneumaticcraft/infused_alloy')

    //Quartz Enriched Iron
    event.recipes.pneumaticcraft.pressure_chamber(["minecraft:quartz", "ae2:certus_quartz_crystal", "3x minecraft:iron_ingot"], 2.0, ["4x refinedstorage:quartz_enriched_iron"] ).id('submerged:pneumaticcraft/quartz_enriched_iron')

    //Netherite
    event.recipes.pneumaticcraft.pressure_chamber(["4x minecraft:netherite_scrap", "4x minecraft:gold_ingot"], 3.0, ["1x minecraft:netherite_ingot"] ).id('submerged:pneumaticcraft/netherite_ingot')

})
