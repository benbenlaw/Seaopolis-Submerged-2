//Casting

ServerEvents.recipes(event => {

    //Melting 
    event.recipes.casting.melting("#minecraft:leaves", "50x submerged:organic_water", 100).id("submerged:melting/leaves")
    event.recipes.casting.melting("#minecraft:saplings", "15x submerged:organic_water", 100).id("submerged:melting/saplings")
    event.recipes.casting.melting("#submerged:colored_apples", "150x submerged:organic_water", 100).id("submerged:melting/colored_apples")
    event.recipes.casting.melting("#minecraft:crops", "150x submerged:organic_water", 100).id("submerged:melting/crops")

    //Solidifier
    event.recipes.casting.solidifier("minecraft:gravel", "1000x submerged:organic_water", "submerged:refined_gravel").id("submerged:refined_gravel")

    //Multiblock Controller
    event.shaped('casting:multiblock_controller', [' A ', 'ABA', ' A '], {
        A: '#c:ingots/bronze',
        B: 'casting:controller'
    }).id('casting:solidifier/multiblock/controller')

    //Multiblock Solidifier
    event.shaped('casting:multiblock_solidifier', [' A ', 'ABA', ' A '], {
        A: '#c:ingots/bronze',
        B: 'casting:solidifier'
    }).id('casting:solidifier/multiblock/solidifier')

    //Multiblock 
})












/*

   function ending(input, output) {
        let id = `${input.split(':')[1]}_to_${output.split(':')[1]}`
        let ing  = Ingredient.of(input).toJson()
        let stack = Item.of(output, 1)
        
        event.custom(
            {
                "type": "create_dragons_plus:ending",
                "ingredients": [
                    ing
                ],
                "results": [
                    stack
                ]
            }
        ).id(`test:test/ending/${id}`)
    }
*/