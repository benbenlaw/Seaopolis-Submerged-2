//Applied Energistics 2
ServerEvents.recipes(event => {
 
    //Replace Input
    event.replaceInput({id: 'ae2:network/blocks/inscribers'}, 'minecraft:copper_ingot', '#c:silicon')
    event.replaceInput({id: 'ae2:network/blocks/crystal_processing_charger'}, 'minecraft:copper_ingot', 'pneumaticcraft:printed_circuit_board')

    //Remove
    event.remove({id: 'ae2:inscriber/engineering_processor_print'})
    event.remove({id: 'ae2:inscriber/calculation_processor_print'})
    event.remove({id: 'ae2:inscriber/logic_processor_print'})
    event.remove({id: 'ae2:inscriber/silicon_print'})

    //Photovoltaic Plate
    addInscriberRecipe('enderio:photovoltaic_composite', '#c:plates/iron', 'enderio:photovoltaic_composite', 'enderio:photovoltaic_plate')

    //Basic Capacitor
    addInscriberRecipe('#c:ingots/aluminum', 'pneumaticcraft:capacitor', 'minecraft:copper_ingot', 'enderio:basic_capacitor')

    //Transistor
    addInscriberRecipe('#pneumaticcraft:wiring', 'pneumaticcraft:plastic', 'minecraft:redstone', 'pneumaticcraft:transistor')

    //Capacitor
    addInscriberRecipe('#pneumaticcraft:wiring', 'pneumaticcraft:plastic', '#c:silicon', 'pneumaticcraft:capacitor')

    //Finished PCB
    addInscriberRecipe('pneumaticcraft:transistor', 'pneumaticcraft:unassembled_pcb', 'pneumaticcraft:capacitor', 'pneumaticcraft:printed_circuit_board')

    //Charged Sand
    addChargerRecipe('submerged:nether_gravel', 'submerged:charged_gravel')

    //Printed Logic Circuit
    addInscriberRecipe('refinedstorage:quartz_enriched_iron', 'pneumaticcraft:printed_circuit_board', 'minecraft:gold_ingot' , '4x ae2:printed_logic_processor')

    //Printed Calculation Circuit
    addInscriberRecipe('refinedstorage:quartz_enriched_iron', 'pneumaticcraft:printed_circuit_board', 'ae2:certus_quartz_crystal' , '4x ae2:printed_calculation_processor')

    //Printed Engineering Circuit
    addInscriberRecipe('refinedstorage:quartz_enriched_iron', 'pneumaticcraft:printed_circuit_board', 'minecraft:prismarine_crystals' , '4x ae2:printed_engineering_processor')
    
    //Printed Silicon
    addSimpleInscriberRecipe('#c:silicon' , 'ae2:printed_silicon')

    //Inscriber Function
    function addInscriberRecipe(bottom, middle, top, result) {
        event.custom({
            type: 'ae2:inscriber',
            ingredients: {
                bottom: Ingredient.of(bottom).toJson(),
                middle: Ingredient.of(middle).toJson(),
                top: Ingredient.of(top).toJson()
            },
            mode: 'press',
            result: Item.of(result).toJson()
        }).id(`ae2:inscriber/${result.split(':')[1]}`)
    }

    //Inscriber Function
    function addSimpleInscriberRecipe(input, result) {
        event.custom({
            type: 'ae2:inscriber',
            ingredients: {
                middle: Ingredient.of(input).toJson(),
            },
            mode: 'press',
            result: Item.of(result).toJson()
        }).id(`ae2:inscriber/${result.split(':')[1]}`)
    }

    //Charger Function
    function addChargerRecipe(input, result) {
        event.custom({
            type: 'ae2:charger',
            ingredient: Ingredient.of(input).toJson(),
            result: Item.of(result).toJson()
        }).id(`ae2:charger/${result.split(':')[1]}`)
    }
})
