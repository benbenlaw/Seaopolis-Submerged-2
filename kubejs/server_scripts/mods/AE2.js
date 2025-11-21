//Applied Energistics 2
ServerEvents.recipes(event => {
 
    //Replace Input
    event.replaceInput({id: 'ae2:network/blocks/inscribers'}, 'minecraft:copper_ingot', '#c:silicon')
    event.replaceInput({id: 'ae2:network/blocks/crystal_processing_charger'}, 'minecraft:copper_ingot', 'pneumaticcraft:printed_circuit_board')

    //Remove
    event.remove({id: 'extendedae:quartz_blend'})
    event.remove({id: 'extendedae:quartz_blend_alt'})
    event.remove({id: 'extendedae:blasting/quartz_blend'})
    event.remove({id: 'ae2:network/cells/item_storage_components_cell_256k_part'})

    //Remove
    //event.remove({id: 'ae2:inscriber/engineering_processor_print'})
    //event.remove({id: 'ae2:inscriber/calculation_processor_print'})
    //event.remove({id: 'ae2:inscriber/logic_processor_print'})
    //event.remove({id: 'ae2:inscriber/silicon_print'})

    //Tiny TNT
    event.shaped('3x ae2:tiny_tnt', ['ABA', 'BAB', 'ABA'], {
        A: 'minecraft:coal',
        B: 'minecraft:sand'
    }).id('ae2:tiny_tnt')
    
    //Matter Condenser
    event.shaped('ae2:condenser', ['AAA', 'BCB', 'AAA'], {
        A: 'minecraft:iron_ingot',
        B: 'ae2:fluix_dust',
        C: 'ae2:cell_component_16k'
    }).id('ae2:network/blocks/io_condenser')

    //Basic Storage Component
    event.shaped('ae2:cell_component_1k', ['ADA', 'BCB', 'ABA'], {
        A: '#c:silicon',
        B: '#c:glass_blocks',
        C: 'submerged:logic_processor',
        D: 'refinedstorage:quartz_enriched_iron'
    }).id('ae2:cell_component_1k')

    //Advanced Storage Component
    event.shaped('ae2:cell_component_4k', ['ADA', 'BCB', 'ABA'], {
        A: 'minecraft:redstone',
        B: 'ae2:cell_component_1k',
        C: 'submerged:logic_processor',
        D: 'refinedstorage:quartz_enriched_iron'
    }).id('ae2:cell_component_4k')

    //Elite Storage Component
    event.shaped('ae2:cell_component_16k', ['ADA', 'BCB', 'ABA'], {
        A: 'minecraft:glowstone_dust',
        B: 'ae2:cell_component_4k',
        C: 'submerged:engineering_processor',
        D: 'refinedstorage:quartz_enriched_iron'
    }).id('ae2:cell_component_16k')

    //Ultimate Storage Component
    event.shaped('ae2:cell_component_64k', ['ADA', 'BCB', 'ABA'], {
        A: 'submerged:infused_alloy',
        B: 'ae2:cell_component_16k',
        C: 'submerged:engineering_processor',
        D: 'refinedstorage:quartz_enriched_iron'
    }).id('ae2:cell_component_64k')

    //Best
    event.shaped('ae2:cell_component_256k', ['ADA', 'BCB', 'ABA'], {
        A: 'ae2:singularity',
        B: 'ae2:cell_component_64k',
        C: 'submerged:calculation_processor',
        D: 'refinedstorage:quartz_enriched_iron'
    }).id('ae2:cell_component_256k')

    //Photovoltaic Plate
    addInscriberRecipe('enderio:photovoltaic_composite', '#c:plates/iron', 'enderio:photovoltaic_composite', '2x enderio:photovoltaic_plate')
    addInscriberRecipe('enderio:photovoltaic_composite', '#c:plates/aluminum', 'enderio:photovoltaic_composite', 'enderio:photovoltaic_plate')
    addInscriberRecipe('enderio:photovoltaic_composite', '#c:plates/zinc', 'enderio:photovoltaic_composite', 'enderio:photovoltaic_plate')
    addInscriberRecipe('enderio:photovoltaic_composite', '#c:plates/tin', 'enderio:photovoltaic_composite', 'enderio:photovoltaic_plate')

    //Basic Capacitor
    addInscriberRecipe('#c:ingots/aluminum', 'pneumaticcraft:capacitor', 'minecraft:copper_ingot', 'enderio:basic_capacitor')

    //Transistor
    addInscriberRecipe('#pneumaticcraft:wiring', 'minecraft:redstone', 'pneumaticcraft:plastic', 'pneumaticcraft:transistor')

    //Capacitor
    addInscriberRecipe('#pneumaticcraft:wiring', '#c:silicon', 'pneumaticcraft:plastic', 'pneumaticcraft:capacitor')

    //Finished PCB
    addInscriberRecipe('pneumaticcraft:transistor', 'pneumaticcraft:unassembled_pcb', 'pneumaticcraft:capacitor', 'pneumaticcraft:printed_circuit_board')

    //Charged Sand
    addChargerRecipe('submerged:nether_gravel', 'submerged:charged_gravel')

    //Logic Circuit
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
        }).id(`ae2:inscriber/${result.split(':')[1]}_from_${bottom.split(':')[1]}_${middle.split(':')[1]}_${top.split(':')[1]}`)
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
