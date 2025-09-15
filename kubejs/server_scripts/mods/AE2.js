//Applied Energistics 2
ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({id: 'ae2:network/blocks/inscribers'}, 'minecraft:copper_ingot', '#c:silicon')
    event.replaceInput({id: 'ae2:network/blocks/crystal_processing_charger'}, 'minecraft:copper_ingot', 'pneumaticcraft:printed_circuit_board')

    //Transistor
    addInscriberRecipe('#pneumaticcraft:wiring', 'pneumaticcraft:plastic', 'minecraft:redstone', 'pneumaticcraft:transistor')

    //Capacitor
    addInscriberRecipe('#pneumaticcraft:wiring', 'pneumaticcraft:plastic', '#c:silicon', 'pneumaticcraft:capacitor')

    //Finished PCB
    addInscriberRecipe('pneumaticcraft:transistor', 'pneumaticcraft:unassembled_pcb', 'pneumaticcraft:capacitor', 'pneumaticcraft:printed_circuit_board')

    //Charged Sand
    addChargerRecipe('minecraft:sand', 'submerged:charged_sand')


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

    //Charger Function
    function addChargerRecipe(input, result) {
        event.custom({
            type: 'ae2:charger',
            ingredient: Ingredient.of(input).toJson(),
            result: Item.of(result).toJson()
        }).id(`ae2:charger/${result.split(':')[1]}`)
    }
})
