//Casting

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'casting:smelting/black_brick'})

    //Black Bricks
    event.smelting('casting:black_brick', 'submerged:porcelain_clay').id('submerged:black_brick')

    //Melting 
    event.recipes.casting.melting("#minecraft:leaves", "50x submerged:organic_water", 100).id("submerged:melting/leaves")
    event.recipes.casting.melting("#minecraft:saplings", "15x submerged:organic_water", 100).id("submerged:melting/saplings")
    event.recipes.casting.melting("#submerged:colored_apples", "150x submerged:organic_water", 100).id("submerged:melting/colored_apples")
    event.recipes.casting.melting("#c:foods", "150x submerged:organic_water", 100).id("submerged:melting/crops")
    event.recipes.casting.melting("#c:plastics", "1000x pneumaticcraft:plastic", 1000).id("submerged:melting/plastic")
    event.recipes.casting.melting("ae2:certus_quartz_dust", "250x submerged:molten_certus_quartz", 1000).id("submerged:melting/certus_quartz_dust")
    event.recipes.casting.melting("ae2:certus_quartz_crystal", "250x submerged:molten_certus_quartz", 1000).id("submerged:melting/certus_quartz_crystal")
    event.recipes.casting.melting("submerged:porcelain_clay", "250x casting:molten_black_brick", 1000).id("submerged:melting/porcelain_clay")
    
    //Solidifier
    event.recipes.casting.solidifier("minecraft:gravel", "100x submerged:organic_water", "submerged:refined_gravel").id("submerged:solidifier/refined_gravel")
    event.recipes.casting.solidifier("#c:glass_panes/colorless", "500x industrialforegoing:pink_slime", "industrialforegoing:pink_slime").id("submerged:solidifier/pink_slime")
    event.recipes.casting.solidifier("#c:molds/ingot", "1000x pneumaticcraft:plastic", "pneumaticcraft:plastic").id("submerged:solidifier/plastic")
    event.recipes.casting.solidifier("#c:molds/dust", "250x submerged:molten_certus_quartz", "ae2:certus_quartz_dust").id("submerged:solidifier/certus_quartz_dust")
    event.recipes.casting.solidifier("#c:molds/gem", "250x submerged:molten_certus_quartz", "ae2:certus_quartz_crystal").id("submerged:solidifier/certus_quartz_crystal")

    event.recipes.casting.solidifier("#c:molds/key", "360x casting:molten_copper", "submerged:copper_key").id("submerged:solidifier/copper_key")
    event.recipes.casting.solidifier("#c:molds/key", "360x casting:molten_iron", "submerged:iron_key").id("submerged:solidifier/iron_key")
    event.recipes.casting.solidifier("#c:molds/key", "360x casting:molten_netherite", "submerged:netherite_key").id("submerged:solidifier/netherite_key")
    event.recipes.casting.solidifier("#c:molds/key", "4000x casting:molten_stone", "submerged:stone_key").id("submerged:solidifier/stone_key")


    //Mixer
    event.recipes.casting.mixing("360x casting:molten_quartz_enriched_iron", ["270x casting:molten_iron", "250x casting:molten_quartz", "250x submerged:molten_certus_quartz"]).id("casting:mixer/molten_quartz_enriched_iron")

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