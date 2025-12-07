//Mekanism

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'mekmm:recycler/from_substrate'})
    event.remove({id: 'mekmm:recycler/from_stone'})
    event.remove({id: 'mekmm:recycler/from_dirt'})
    event.remove({id: 'mekanism:evaporating/lithium'})
    event.remove({id: 'mekanism:evaporating/brine'})
    event.remove({id: 'mekmm:compat/extendedae/stamper/concurrent_processor_print'})
    event.remove({id: 'mekmm:compat/ae2/stamper/printed_engineering_processor'})
    event.remove({id: 'mekmm:compat/ae2/stamper/printed_logic_processor'})
    event.remove({id: 'mekmm:compat/ae2/stamper/printed_calculation_processor'})

    //Replace Input 
    event.replaceInput({id: 'mekmm:cnc_rolling_mill'}, 'mekanism:basic_control_circuit', 'mekanism:elite_control_circuit')
    event.replaceInput({id: 'mekmm:ambient_gas_collector'}, 'mekanism:steel_casing', '#submerged:top_induction_mek')
    event.replaceInput({id: 'mekmm:recycler'}, 'alltheores:osmium_ingot', 'alltheores:uranium_ingot')

    //Cobblestone Ingot
    addSimpleStamperRecipe('compressedblocks:c5_cobblestone', 1, 'c:molds/ingot', 'submerged:cobblestone_ingot')

    //Recycler Recipes
    addRecyclerRecipe('#c:stones', 0.25)
    addRecyclerRecipe('#c:cobblestones', 0.25)

    //Nuclear Waste
    addOxidizingRecipe('mekanism:nuclear_waste', 25, 'alltheores:uranium_nugget')

    //Toxic Gravel
    addInjectingRecipe('submerged:toxic_gravel', 'submerged:teary_gravel', 'mekmm:unstable_dimensional_gas', 1)

    //Hazmat Suit Pieces
    event.recipes.mekanism.combining('mekanism:hazmat_mask', '5x alltheores:lead_ingot', 'mekanismtools:bronze_helmet').id('mekanism:hazmat_mask')
    event.recipes.mekanism.combining('mekanism:hazmat_gown', '8x alltheores:lead_ingot', 'mekanismtools:bronze_chestplate').id('mekanism:hazmat_gown')
    event.recipes.mekanism.combining('mekanism:hazmat_pants', '7x alltheores:lead_ingot', 'mekanismtools:bronze_leggings').id('mekanism:hazmat_pants')
    event.recipes.mekanism.combining('mekanism:hazmat_boots', '4x alltheores:lead_ingot', 'mekanismtools:bronze_boots').id('mekanism:hazmat_boots')
    
    //Beam
    addLatheRecipe('alltheores:steel_block', 1, 'dysoncubeproject:beam')
    addLatheRecipe('dysoncubeproject:beam', 4, 'dysoncubeproject:beam_package')
  
    //Sail
    addRollingRecipe('enderio:photovoltaic_plate', 1, 'dysoncubeproject:solar_sail')
    addRollingRecipe('dysoncubeproject:solar_sail', 8, 'dysoncubeproject:solar_sail_package')

    //All The Ores and Casting via Mekanism (INGOTS)
    addCastingRecipe('iron')
    addCastingRecipe('gold')
    addCastingRecipe('copper')
    addCastingRecipe('tin')
    addCastingRecipe('aluminum')
    addCastingRecipe('osmium')
    addCastingRecipe('lead')
    addCastingRecipe('uranium')
    addCastingRecipe('bronze')
    addCastingRecipe('steel')
    addCastingRecipe('nickel')
    addCastingRecipe('platinum')
    addCastingRecipe('silver')
    addCastingRecipe('zinc')
    addCastingRecipe('constantan')
    addCastingRecipe('electrum')
    addCastingRecipe('invar')
    addCastingRecipe('signalum')
    addCastingRecipe('lumium')
    addCastingRecipe('enderium')
    addCastingRecipe('iridium')

    //Casting loves Mekanism Compat
    function addCastingRecipe(type) {
        addStamperRecipe(`c:ingots/${type}`, 4, `c:molds/gear`, AlmostUnified.getTagTargetItem(`c:gears/${type}`))
        addStamperRecipe(`c:ingots/${type}`, 1, `c:molds/rod`, Item.of(AlmostUnified.getTagTargetItem(`c:rods/${type}`), 2))
        addStamperRecipe(`c:ingots/${type}`, 1, `c:molds/plate`, AlmostUnified.getTagTargetItem(`c:plates/${type}`))
        //addStamperRecipe(`c:ingots/${type}`, 1, `c:molds/dust`, AlmostUnified.getTagTargetItem(`c:dusts/${type}`))
    }

    //Stamper Function
    function addSimpleStamperRecipe(input, inputCount, mold, output) {
        event.custom({
            "type": "mekmm:stamper",
            "input": {
                "count": inputCount,
                "item": input
            },
            "mold": {
                "count": 1,
                "tag": mold
            },
            "output": Item.of(output).toJson()
        }).id(`submerged:mekanism_stamper/${output.replace(':', '_')}`)
    }

    //Stamper Function
    function addStamperRecipe(input, inputCount, mold, output) {
        event.custom({
            "type": "mekmm:stamper",
            "input": {
                "count": inputCount,
                "tag": input
            },
            "mold": {
                "count": 1,
                "tag": mold
            },
            "output": Item.of(output).toJson()
        }).id(`submerged:mekanism_stamper/${output.getId().replace(':', '_')}`)
    }

    //Lathe Function
    function addLatheRecipe(input, inputCount, output) {
        event.custom({
            "type": "mekmm:lathe",
            "input": {
                "count": inputCount,
                "item": input
            },
            "output": Item.of(output).toJson()
        }).id(`submerged:mekanism_lathe/${output.replace(':', '_')}`)
    }

    //Rolling Mill Function
    function addRollingRecipe(input, inputCount, output) {
        event.custom({
            "type": "mekmm:rolling_mill",
            "input": {
                "count": inputCount,
                "item": input
            },
            "output": Item.of(output).toJson()
        })
    }

    //Recycler Function
    function addRecyclerRecipe(input, chance) {
        event.custom({
            "type": "mekmm:recycler",
            "input": Ingredient.of(input).toJson(),
            "chance": chance,
            "output": {
                "count": 1,
                "id": "mekmm:scrap"
            }
        }).id(`submerged:mekanism_recycler/${input.replace(':', '_').replace('#', '')}`)
    } 

    //Oxidizing Function
    function addOxidizingRecipe(output, outputAmount, input) {
        event.custom({
            "type":"mekanism:oxidizing",
            "input":Ingredient.of(input).toJson(),
            "output":{
                "amount":outputAmount,
                "id":output
            }
        }).id(`submerged:mekanism_oxidizing/${output.replace(':', '_')}`)
    }

    //Injecting Function
    function addInjectingRecipe(output, input, gas, gasAmount) {
        event.custom({
            "type":"mekanism:injecting",
            "chemical_input":{
                "amount":gasAmount,
                "chemical":gas
            },
            "item_input":Ingredient.of(input).toJson(),
            "output":Item.of(output).toJson(),
            "per_tick_usage":true
        }).id(`submerged:mekanism_injecting/${output.replace(':', '_')}`)
    }

})
