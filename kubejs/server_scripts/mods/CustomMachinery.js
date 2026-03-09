//Custom Machinery

ServerEvents.recipes(event => {

    //Chemical Compressor
        event.recipes.custommachinery.custom_machine("submerged:chemical_compressor", 100)
        .requireChemical("10000x mekanism:antimatter")
        .requireEnergyPerTick(100000)
        .produceItem('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:antimatter"]')
        .id('submerged:chemical_compressor/antimatter')

    //Fluid Compressor
    event.recipes.custommachinery.custom_machine("submerged:fluid_compressor", 100)
        .requireFluid("10000x submerged:liquid_rainbow")
        .requireEnergyPerTick(100000)
        .produceItem('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:rainbow"]')
        .id('submerged:fluid_compressor/rainbow')

    event.recipes.custommachinery.custom_machine("submerged:fluid_compressor", 100)
        .requireFluid("25000x mob_grinding_utils:fluid_xp")
        .requireEnergyPerTick(100000)
        .produceItem('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:fluid_xp"]')
        .id('submerged:fluid_compressor/fluid_xp')

    event.recipes.custommachinery.custom_machine("submerged:fluid_compressor", 100)
        .requireFluid("1000000x minecraft:lava")
        .requireEnergyPerTick(100000)
        .produceItem('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:lava"]')
        .id('submerged:fluid_compressor/lava')

    event.recipes.custommachinery.custom_machine("submerged:fluid_compressor", 100)
        .requireFluid("1000000x minecraft:water")
        .requireEnergyPerTick(100000)
        .produceItem('extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:water"]')
        .id('submerged:fluid_compressor/water')





    //Spoil Bag Opener
    event.recipes.custommachinery.custom_machine("submerged:spoil_bag_opener", 100)
        .requireItem("forcecraft:spoils_bag")
        .lootTableOutput("forcecraft:spoils/tier1")

    event.recipes.custommachinery.custom_machine("submerged:spoil_bag_opener", 100)
        .requireItem("forcecraft:spoils_bag_t2")
        .lootTableOutput("forcecraft:spoils/tier2")

    event.recipes.custommachinery.custom_machine("submerged:spoil_bag_opener", 100)
        .requireItem("forcecraft:spoils_bag_t3")
        .lootTableOutput("forcecraft:spoils/tier3")
        

    //Mini Pressure Chamber recipe generator
    addPressureChamberRecipe(2, ["minecraft:iron_block"],["pneumaticcraft:compressed_iron_block"], [], [])
    addPressureChamberRecipe(2, ["submerged:living_gravel", "2x minecraft:nether_wart"],["submerged:nether_gravel"], ["100x casting:molten_blaze"], [])
    addPressureChamberRecipe(2.5, ["4x minecraft:packed_ice"],["minecraft:blue_ice"], [], [])
    addPressureChamberRecipe(2, ["4x minecraft:ice"],["minecraft:packed_ice"], [], [])
    addPressureChamberRecipe(1, ["submerged:totemic_infused_gravel", "minecraft:sand"],["submerged:assembled_gravel"], ["250x submerged:organic_water"], [])
    addPressureChamberRecipe(3, ['enderio:skeletal_contractor', 'enderio:ender_resonator', 'enderio:guardian_diode', 'enderio:mind_killer', 'enderio:z_logic_controller'],["submerged:ai_controller"], ["1000x industrialforegoing:latex"], [])
    addPressureChamberRecipe(1, ['#c:stones'],["pneumaticcraft:compressed_stone"], [], [])
    addPressureChamberRecipe(1, ['2x minecraft:gunpowder', '2x minecraft:rotten_flesh', '2x minecraft:spider_eye'],[], ["pneumaticcraft:plastic"], ["pneumaticcraft:etching_acid"])
    addPressureChamberRecipe(1.5, ['2x minecraft:redstone_torch', '3x #pneumaticcraft:wiring', 'pneumaticcraft:plastic'],['3x pneumaticcraft:empty_pcb'], [], [])
    addPressureChamberRecipe(1.5, ['4x minecraft:snow_block'],['minecraft:ice'], [], [])
    addPressureChamberRecipe(1, ['minecraft:gold_ingot', '2x minecraft:redstone'],['pneumaticcraft:turbine_blade'], [], [])
    addPressureChamberRecipe(3, ['4x minecraft:gold_ingot', '4x minecraft:netherite_scrap'],['minecraft:netherite_ingot'], [], [])
    addPressureChamberRecipe(1, ['4x #c:dyes/green'],['4x minecraft:slime_ball'], ["1000x minecraft:milk"], [])
    addPressureChamberRecipe(1.5, ['minecraft:wheat'],['3x pneumaticcraft:wheat_flour'], [], [])
    addPressureChamberRecipe(1.5, ['submerged:ancient_gravel'],['submerged:teary_gravel'], ["125x submerged:warden_tears"], [])
    addPressureChamberRecipe(1, ['naturesaura:infused_iron', 'naturesaura:tainted_gold', '6x minecraft:redstone'],['2x submerged:infused_alloy'], [], [])
    addPressureChamberRecipe(2, ['minecraft:quartz', 'ae2:certus_quartz_crystal', '3x minecraft:iron_ingot'],['4x refinedstorage:quartz_enriched_iron'], [], [])
    addPressureChamberRecipe(2, ['submerged:living_gravel', 'minecraft:nether_wart'],['submerged:nether_gravel'], ["250x minecraft:lava"], [])
    addPressureChamberRecipe(2, ['submerged:assembled_gravel', 'opolisutilities:ender_pearl_fragment'],['submerged:living_gravel'], ["125x mob_grinding_utils:fluid_xp"], [])
    addPressureChamberRecipe(2, ['minecraft:iron_ingot'],['pneumaticcraft:ingot_iron_compressed'], [], [])
    addPressureChamberRecipe(1, ['minecraft:blaze_rod'],['3x minecraft:blaze_powder'], [], [])
    addPressureChamberRecipe(1, ['naturesaura:gold_leaf'],['3x naturesaura:gold_powder'], [], [])
    addPressureChamberRecipe(2.5, ['pneumaticcraft:upgrade_matrix', 'minecraft:amethyst_shard'],['pneumaticcraft:solar_wafer'], [], [])
    addPressureChamberRecipe(2, ['submerged:living_gravel', 'minecraft:nether_wart'],['submerged:nether_gravel'], ["25x industrialforegoing:pink_slime", '125x industrialforegoing:meat'], [])
    addPressureChamberRecipe(3, ['2x pneumaticcraft:pressure_chamber_glass', '2x pneumaticcraft:pressure_chamber_interface', 'pneumaticcraft:pressure_chamber_valve', '21x pneumaticcraft:pressure_chamber_wall'],['custommachinery:custom_machine_item[custommachinery:machine="submerged:mini_pressure_chamber"]'], [], [])
    addPressureChamberRecipe(1.5, ['4x pneumaticcraft:ingot_iron_compressed', 'casting:gear_mold'],['pneumaticcraft:compressed_iron_gear', 'casting:gear_mold'], [], [])
    addPressureChamberRecipe(1.5, ['submerged:corrupted_prismarine_crystal'],['submerged:prismarine_ingot'], [], [])
    addPressureChamberRecipe(4.0, ["atlantis:sunken_gravel", "2x iceandfire:dread_shard", "submerged:dreaded_draconic_compound"],['submerged:draconic_gravel', "submerged:dreaded_draconic_compound"], [], [])

    function addPressureChamberRecipe(pressure, inputs, results, fluidInputs, fluidOutputs) {
        let cmRecipe = event.recipes.custommachinery
            .custom_machine("submerged:mini_pressure_chamber", 150)
            .requirePressure(pressure, 25, pressure * 75)

        inputs.forEach(input => {
            cmRecipe.requireItem(input)
        })

        fluidInputs.forEach(fluidInput => {
            cmRecipe.requireFluid(fluidInput)
        })

        results.forEach(result => {
            cmRecipe.produceItem(result)
            //cmRecipe.id(`submerged:mini_pressure_chamber/${results[0].split(':')[1]}`);
        })

        fluidOutputs.forEach(fluidOutput => {
            cmRecipe.produceFluid(fluidOutput)
            //cmRecipe.id(`submerged:mini_pressure_chamber/${fluidOutput[0].split(':')[1]}`);
        })


        return cmRecipe
    }

    //Cured 
    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireStructure([["a     a"," bbbbb "," bbbbb "," bb bb "," bbbbb "," bbbbb ","a     a"],["a     a","       ","       ","   m   ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["c     c","       ","       ","       ","       ","       ","c     c"],["       ","       ","       ","   d   ","       ","       ","       "]], {"a":"starforge:cosmic_pillar[axis=y]","b":"starforge:cosmic_planks","c":"starforge:tier_5_star_forge_cap","d":"starforge:red_star"})
        .requireItem("submerged:water_purifier")
        .requireItem("submerged:air_purifier")
        .requireItem("submerged:prime_alloy_ingot")
        .requireItem('64x nanomirai:repair_nano')
        .requireItem('nanomirai:support_nano[rarity="epic"]')
        .requireFluid("32000x submerged:salt_water")
        .requireChemical('32000x mekanism:oxygen')
        .runCommandOnEnd("tag @p add cured")
        .id('submerged:infinity_forge/cured_nano')

    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireStructure([["a     a"," bbbbb "," bbbbb "," bb bb "," bbbbb "," bbbbb ","a     a"],["a     a","       ","       ","   m   ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["c     c","       ","       ","       ","       ","       ","c     c"],["       ","       ","       ","   d   ","       ","       ","       "]], {"a":"starforge:cosmic_pillar[axis=y]","b":"starforge:cosmic_planks","c":"starforge:tier_5_star_forge_cap","d":"starforge:red_star"})
        .requireItem("submerged:water_purifier")
        .requireItem("submerged:air_purifier")
        .requireItem("submerged:prime_alloy_ingot")
        .requireItem('64x nanomirai:repair_nano') 
        .requireFluid("32000x submerged:salt_water")
        .requireChemical('32000x mekanism:oxygen')
        .requireSource('8000')
        .runCommandOnEnd("tag @p add cured")
        .id('submerged:infinity_forge/cured_ars')

    //Prime Alloy Ingot
    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireStructure([["a     a"," bbbbb "," bbbbb "," bb bb "," bbbbb "," bbbbb ","a     a"],["a     a","       ","       ","   m   ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["c     c","       ","       ","       ","       ","       ","c     c"],["       ","       ","       ","   d   ","       ","       ","       "]], {"a":"starforge:cosmic_pillar[axis=y]","b":"starforge:cosmic_planks","c":"starforge:tier_5_star_forge_cap","d":"starforge:red_star"})
        .requireItem("submerged:create_ingot")
        .requireItem("submerged:fishium_ingot")
        .requireItem("submerged:gravel_ingot")
        .requireItem("submerged:digital_ingot")
        .requireItem("submerged:mekanism_ingot")
        .requireItem("submerged:foregoing_ingot")
        .requireSU(128, 2)
        .requireEnergyPerTick(100000)
        .produceItem("submerged:prime_alloy_ingot")
        .id('submerged:infinity_forge/prime_alloy_ingot_create')

    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireStructure([["a     a"," bbbbb "," bbbbb "," bb bb "," bbbbb "," bbbbb ","a     a"],["a     a","       ","       ","   m   ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["c     c","       ","       ","       ","       ","       ","c     c"],["       ","       ","       ","   d   ","       ","       ","       "]], {"a":"starforge:cosmic_pillar[axis=y]","b":"starforge:cosmic_planks","c":"starforge:tier_5_star_forge_cap","d":"starforge:red_star"})
        .requireItem("submerged:pneumatic_ingot")
        .requireItem("submerged:fishium_ingot")
        .requireItem("submerged:gravel_ingot")
        .requireItem("submerged:digital_ingot")
        .requireItem("submerged:mekanism_ingot")
        .requireItem("submerged:foregoing_ingot")
        .requirePressure(7, 25)
        .requireEnergyPerTick(100000)
        .produceItem("submerged:prime_alloy_ingot")
        .id('submerged:infinity_forge/prime_alloy_ingot_pneumatic')


    //Foregoing Ingot

    //WIP

    //Foregoing Ingot
    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireStructure([["a     a"," bbbbb "," bbbbb "," bb bb "," bbbbb "," bbbbb ","a     a"],["a     a","       ","       ","   m   ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["c     c","       ","       ","       ","       ","       ","c     c"],["       ","       ","       ","   d   ","       ","       ","       "]], {"a":"starforge:cosmic_pillar[axis=y]","b":"starforge:cosmic_planks","c":"starforge:tier_5_star_forge_cap","d":"starforge:red_star"})
        .requireItem("64x industrialforegoing:pink_slime_ingot")
        .requireItem("64x pneumaticcraft:plastic")
        .requireItem('submerged:prime_ingot')
        .requireFluid("32000x industrialforegoing:ether_gas")
        .requireEnergyPerTick(50000)
        .produceItem("submerged:foregoing_ingot")
        .id('submerged:infinity_forge/foregoing_ingot')

    //Mekanism Ingot
    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireStructure([["a     a"," bbbbb "," bbbbb "," bb bb "," bbbbb "," bbbbb ","a     a"],["a     a","       ","       ","   m   ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["c     c","       ","       ","       ","       ","       ","c     c"],["       ","       ","       ","   d   ","       ","       ","       "]], {"a":"starforge:cosmic_pillar[axis=y]","b":"starforge:cosmic_planks","c":"starforge:tier_5_star_forge_cap","d":"starforge:red_star"})
        .requireItem("64x mekanism:ingot_refined_obsidian")
        .requireItem("64x mekanism:ingot_refined_glowstone")
        .requireItem("64x mekanism:alloy_reinforced")
        .requireItem('submerged:prime_ingot')
        .requireChemical('50000x mekmm:unstable_dimensional_gas')
        .requireEnergyPerTick(50000)
        .produceItem("submerged:mekanism_ingot")
        .id('submerged:infinity_forge/mekanism_ingot')

    //Digital Ingot
    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireStructure([["a     a"," bbbbb "," bbbbb "," bb bb "," bbbbb "," bbbbb ","a     a"],["a     a","       ","       ","   m   ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["c     c","       ","       ","       ","       ","       ","c     c"],["       ","       ","       ","   d   ","       ","       ","       "]], {"a":"starforge:cosmic_pillar[axis=y]","b":"starforge:cosmic_planks","c":"starforge:tier_5_star_forge_cap","d":"starforge:red_star"})
        .requireItem("64x submerged:certus_ingot")
        .requireItem("64x submerged:prismarine_ingot")
        .requireItem("64x refinedstorage:quartz_enriched_iron")
        .requireItem("64x submerged:quartz_enriched_gold")
        .requireItem("64x extendedae:entro_ingot")
        .requireItem("submerged:prime_ingot")
        .requireEnergyPerTick(50000)
        .produceItem("submerged:digital_ingot")

    //Gravel Ingot
    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireStructure([["a     a"," bbbbb "," bbbbb "," bb bb "," bbbbb "," bbbbb ","a     a"],["a     a","       ","       ","   m   ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["c     c","       ","       ","       ","       ","       ","c     c"],["       ","       ","       ","   d   ","       ","       ","       "]], {"a":"starforge:cosmic_pillar[axis=y]","b":"starforge:cosmic_planks","c":"starforge:tier_5_star_forge_cap","d":"starforge:red_star"})
        .requireItem("64x submerged:star_gravel")
        .requireItem("64x submerged:toxic_gravel")
        .requireItem("64x submerged:teary_gravel")
        .requireItem("64x submerged:ancient_gravel")
        .requireItem('compressedblocks:c6_gravel')
        .requireItem('submerged:prime_ingot')
        .requireEnergyPerTick(50000)
        .produceItem("submerged:gravel_ingot")
        .id('submerged:infinity_forge/gravel_ingot')

    //Fishium Ingot
    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireStructure([["a     a"," bbbbb "," bbbbb "," bb bb "," bbbbb "," bbbbb ","a     a"],["a     a","       ","       ","   m   ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["c     c","       ","       ","       ","       ","       ","c     c"],["       ","       ","       ","   d   ","       ","       ","       "]], {"a":"starforge:cosmic_pillar[axis=y]","b":"starforge:cosmic_planks","c":"starforge:tier_5_star_forge_cap","d":"starforge:red_star"})
        .requireItem("16x minecraft:heart_of_the_sea")
        .requireItem("16x submerged:essence_of_the_sea")
        .requireItem("1x submerged:prime_ingot")
        .requireItem('reliquary:emperor_chalice')
        .requireEnergyPerTick(50000)
        .requireFluid("1000x submerged:liquid_rainbow")
        .produceItem("submerged:fishium_ingot")
        .id('submerged:infinity_forge/fishium_ingot')

    //Infinity Fish Food
    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireStructure([["a     a"," bbbbb "," bbbbb "," bb bb "," bbbbb "," bbbbb ","a     a"],["a     a","       ","       ","   m   ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["c     c","       ","       ","       ","       ","       ","c     c"],["       ","       ","       ","   d   ","       ","       ","       "]], {"a":"starforge:cosmic_pillar[axis=y]","b":"starforge:cosmic_planks","c":"starforge:tier_5_star_forge_cap","d":"starforge:red_star"})
        .requireItem("64x resourcefish:basic_fish_food")
        .requireItem("64x resourcefish:metallic_fish_food")
        .requireItem("64x resourcefish:crystal_fish_food")
        .requireItem("64x resourcefish:nether_fish_food")
        .requireItem("64x resourcefish:basic_mob_fish_food")
        .requireItem("64x resourcefish:ender_fish_food")
        .requireEnergyPerTick(75000)
        .produceItem("submerged:infinity_fish_food")
        .id('submerged:infinity_forge/infinity_fish_food')

    //Create Ingot
    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireStructure([["a     a"," bbbbb "," bbbbb "," bb bb "," bbbbb "," bbbbb ","a     a"],["a     a","       ","       ","   m   ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["c     c","       ","       ","       ","       ","       ","c     c"],["       ","       ","       ","   d   ","       ","       ","       "]], {"a":"starforge:cosmic_pillar[axis=y]","b":"starforge:cosmic_planks","c":"starforge:tier_5_star_forge_cap","d":"starforge:red_star"})
        .requireItem("16x create:andesite_alloy")
        .requireItem("16x alltheores:brass_ingot")
        .requireItem("16x create:cardboard")
        .requireItem("16x create:sturdy_sheet")
        .requireItem("1x submerged:prime_ingot")
        .requireItem("1x submerged:ai_controller")
        .requireSU(128, 2)
        .requireEnergyPerTick(75000)
        .produceItem("submerged:create_ingot")
        .id('submerged:infinity_forge/create_ingot')

    //Pneumatic Ingot
    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireStructure([["a     a"," bbbbb "," bbbbb "," bb bb "," bbbbb "," bbbbb ","a     a"],["a     a","       ","       ","   m   ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["c     c","       ","       ","       ","       ","       ","c     c"],["       ","       ","       ","   d   ","       ","       ","       "]], {"a":"starforge:cosmic_pillar[axis=y]","b":"starforge:cosmic_planks","c":"starforge:tier_5_star_forge_cap","d":"starforge:red_star"})
        .requireItem("16x pneumaticcraft:ingot_iron_compressed")
        .requireItem("16x pneumaticcraft:advanced_pressure_tube")
        .requireItem("16x pneumaticcraft:reinforced_pressure_tube")
        .requireItem("16x pneumaticcraft:upgrade_matrix")
        .requireItem("1x submerged:prime_ingot")
        .requireItem("1x submerged:ai_controller")
        .requirePressure(5, 25)
        .requireEnergyPerTick(75000)
        .produceItem("submerged:pneumatic_ingot")
        .id('submerged:infinity_forge/pneumatic_ingot')

    //Prime Ingot
    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireStructure([["a     a"," bbbbb "," bbbbb "," bb bb "," bbbbb "," bbbbb ","a     a"],["a     a","       ","       ","   m   ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["a     a","       ","       ","       ","       ","       ","a     a"],["c     c","       ","       ","       ","       ","       ","c     c"],["       ","       ","       ","   d   ","       ","       ","       "]], {"a":"starforge:cosmic_pillar[axis=y]","b":"starforge:cosmic_planks","c":"starforge:tier_5_star_forge_cap","d":"starforge:red_star"})
        .requireItem("16x submerged:cobblestone_ingot")
        .requireItem("16x alltheores:lead_ingot")
        .requireItem("16x alltheores:silver_ingot")
        .requireItem("16x alltheores:iridium_ingot")
        .requireItem("16x alltheores:platinum_ingot")
        .requireItem("16x alltheores:nickel_ingot")
        .requireFluid("720x submerged:molten_vanillarite")
        .requireEnergyPerTick(50000)
        .produceItem ("submerged:prime_ingot")
        .id('submerged:infinity_forge/prime_ingot')


})
