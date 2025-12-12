//Custom Machinery

ServerEvents.recipes(event => {

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

    //TEST
    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireItem("minecraft:cobblestone")
        .requireItem("sand")
        .requireItem("gravel")
        .requireItem("diamond")
        .requireFluid("100x casting:molten_obsidian")
        .requireChemical("100x mekanism:diamond")
        .requireEnergyPerTick(10000)
        .requirePressure(5, 25)
        .requireSU(5, 5)
        .requireSource(5000)

        .produceItem("emerald")
        .id('submerged:test')

    //Mini Pressure Chamber recipe generator
    addPressureChamberRecipe(2, ["minecraft:iron_block"],["pneumaticcraft:compressed_iron_block"], [], [])
    addPressureChamberRecipe(2, ["submerged:living_gravel", "2x minecraft:nether_wart"],["submerged:nether_gravel"], ["100x casting:molten_blaze"], [])
    addPressureChamberRecipe(2.5, ["4x minecraft:packed_ice"],["minecraft:blue_ice"], [], [])
    addPressureChamberRecipe(2, ["4x minecraft:ice"],["minecraft:packed_ice"], [], [])
    addPressureChamberRecipe(1, ["submerged:totemic_infused_gravel", "minecraft:sand"],["submerged:assembled_gravel"], ["250x submerged:organic_water"], [])
    addPressureChamberRecipe(3, ['enderio:skeletal_contractor', 'enderio:ender_resonator', 'enderio:guardian_diode', 'enderio:mind_killer', 'enderio:z_logic_controller'],["submerged:ai_controller"], [], [])
    addPressureChamberRecipe(1, ['#c:stones'],["pneumaticcraft:compressed_stone"], [], [])
    addPressureChamberRecipe(1, ['2x minecraft:gunpowder', '2x minecraft:rotten_flesh', '2x minecraft:spider_eye'],[], ["pneumaticcraft:plastic"], ["pneumaticcraft:etching_acid"])
    addPressureChamberRecipe(1.5, ['2x minecraft:redstone_torch', '3x #pneumaticcraft:wiring', 'pneumaticcraft:plastic'],['3x pneumaticcraft:empty_pcb'], [], [])
    addPressureChamberRecipe(1.5, ['4x minecraft:snow_block'],['minecraft:ice'], [], [])
    addPressureChamberRecipe(1, ['minecraft:gold_ingot', '2x minecraft:redstone'],['pneumaticcraft:turbine_blade'], [], [])
    addPressureChamberRecipe(3, ['4x minecraft:gold_ingot', '4x minecraft:netherite_scrap'],['minecraft:netherite_ingot'], [], [])
    addPressureChamberRecipe(1, ['4x #c:dyes/green'],['4x minecraft:slime_ball'], ["1000x minecraft:milk"], [])
    addPressureChamberRecipe(1.5, ['minecraft:wheat'],['3x pneumaticcraft:wheat_flour'], [], [])
    addPressureChamberRecipe(1.5, ['submerged:ancient_gravel'],['submerged:teary_gravel'], ["125x submerged:warden_tears"], [])
    addPressureChamberRecipe(1, ['naturesaura:infused_iron', 'naturesaura:tainted_gold', '6x minecraft:redstone'],['submerged:infused_alloy'], [], [])
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

    
    //Enable this to generate Mini Pressure Chamber recipes from PneumaticCraft, export the files to 
    //data/submerged/recipes/custommachinery and then disable it again to avoid duplicates.
    //Change recipes that have bucket outputs where needed 
    /*
    event.forEachRecipe({ type: "pneumaticcraft:pressure_chamber" }, recipe => {

        const inputs = recipe.json.get("inputs")
        const results = recipe.json.get("results")
        const pressure = recipe.json.get("pressure")

        console.log(`Processing recipe with pressure: ${pressure}`);

        let cmRecipe = event.recipes.custommachinery
            .custom_machine("submerged:mini_pressure_chamber", 150)
            .requirePressure(pressure, 25, )

        function elemToString(elem) {
            if (!elem) return null
            if (typeof elem === 'string') return elem
            if (typeof elem.getAsString === 'function') return elem.getAsString()
            return elem.toString().replace(/^"(.*)"$/, "$1")
        }

        inputs.forEach(input => {
            let countElem = input.get("count")
            let count = countElem && countElem.getAsInt ? countElem.getAsInt() : 1

            if (input.get("item")) {
                let itemId = elemToString(input.get("item"))

                if (itemId === "minecraft:milk_bucket") {
                    let fluidAmount = 1000 * count
                    cmRecipe.requireFluid(`${fluidAmount}x minecraft:milk`)
                    return
                }

                if (itemId.endsWith("_bucket") && itemId !== "minecraft:bucket") {
                    let fluidId = itemId.replace("_bucket", "")
                    let fluidAmount = 1000 * count
                    cmRecipe.requireFluid(`${fluidAmount}x ${fluidId}`)
                    return
                }

                let ingredientString = `${count}x ${itemId}`
                cmRecipe.requireItem(ingredientString)
                return
            }

            if (input.get("tag")) {
                let tagId = elemToString(input.get("tag"))
                let ingredientString = `${count}x #${tagId}`
                cmRecipe.requireItem(ingredientString)
                return
            }
        })

        results.forEach(result => {
            cmRecipe.produceItem(result)
        })
    })
        */
})
