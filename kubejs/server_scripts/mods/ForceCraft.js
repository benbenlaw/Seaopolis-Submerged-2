//Force Craft

ServerEvents.recipes(event => {
    
    //Remove
    event.remove({id: /forcecraft:transmutation\/(?!upgrade_core)/})
    event.remove({id: 'forcecraft:force_ingot_from_gold'})
    event.remove({id: 'forcecraft:force_ingot_from_iron'})

    //Withering Dust
    addGrindingRecipe('minecraft:wither_skeleton_skull', 'enderio:withering_powder')

    //Ghast Tear
    addFreezingRecipe('enderio:withering_powder', 'minecraft:ghast_tear')

    //Force Sapling
    event.shapeless('forcecraft:force_sapling', ['#minecraft:saplings', 'naturesaura:gold_fiber']).id('forcecraft:force_sapling')

    //Infuser
    event.shaped('forcecraft:infuser', ['AAA', 'BBB', 'A A'], {
        A: 'forcecraft:force_ingot',
        B: 'minecraft:obsidian'
    }).id('submerged:infuser')

    //Force Gem
    event.shaped('forcecraft:force_gem', [' A ', 'AAA', 'ABA'], {
        A: 'forcecraft:force_nugget',
        B: 'minecraft:gold_ingot'
    }).id('forcecraft:force_gem')

    //Upgrade Tome
    event.shaped('forcecraft:upgrade_tome', [' A ', 'ABA', ' A '], {
        A: 'forcecraft:force_gem',
        B: 'minecraft:book'
    }).id('forcecraft:upgrade_tome')

    //Glowstone Dust
    addGrindingRecipe('forcecraft:force_nugget', 'minecraft:glowstone_dust')

    //Tainted Gold
    addFreezingRecipe('minecraft:gold_ingot', 'naturesaura:tainted_gold')
    addFreezingRecipe('minecraft:iron_ingot', 'naturesaura:infused_iron')

    //Grinding Function
    function addGrindingRecipe(input, output) {
        event.custom({
            type: 'forcecraft:grinding',
            experience: 0.1,
            ingredient: Ingredient.of(input).toJson(),
            processTime: 400,
            results: [
                Item.of(output).toJson()
            ],
            secondaryChance: 0.0
        }).id(`submerged:grinding/${input.split(':')[1]}_to_${output.split(':')[1]}`)
    }
    
    //Freezing Function
    function addFreezingRecipe(input, output) {
        event.custom({
            type: 'forcecraft:freezing',
            experience: 0.1,
            ingredient: Ingredient.of(input).toJson(),
            processTime: 400,
            results: [
                Item.of(output).toJson()
            ],
            secondaryChance: 0.0
        }).id(`submerged:grinding/${input.split(':')[1]}_to_${output.split(':')[1]}`)
    }


})
