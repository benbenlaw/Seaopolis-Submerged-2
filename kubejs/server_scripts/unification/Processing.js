//Processing

ServerEvents.recipes(event => {

    //Smelting Ore
    event.remove({type: 'smelting', input: '#c:ores'})
    event.remove({type: 'smelting', input: '#c:raw_materials'})
    event.remove({type: 'blasting', input: '#c:ores'})
    event.remove({type: 'blasting', input: '#c:raw_materials'})
    event.remove({type: 'casting:melting', input: '#c:ores'})
    event.remove({type: "minecraft:crafting_shaped", output: '#c:gears'})

    //Meshes
    addMeshCastingRecipe('strainers:copper_mesh', '450x casting:molten_copper')
    addMeshCastingRecipe('strainers:blaze_mesh', '450x casting:molten_blaze')
    addMeshCastingRecipe('strainers:tin_mesh', '450x casting:molten_tin')
    addMeshCastingRecipe('strainers:diamond_mesh', '450x casting:molten_diamond')
    addMeshCastingRecipe('strainers:bronze_mesh', "450x casting:molten_bronze")
    addMeshCastingRecipe('strainers:emerald_mesh', "450x casting:molten_emerald")
    addMeshCastingRecipe('strainers:iron_mesh', "450x casting:molten_iron")
    addMeshCastingRecipe('strainers:netherite_mesh', "450x casting:molten_netherite")
    addMeshCastingRecipe('strainers:quartz_mesh', "1500x casting:molten_quartz")
    addMeshCastingRecipe('strainers:obsidian_mesh', "8000x casting:molten_obsidian")
    addMeshCastingRecipe('strainers:lapis_mesh', "450x casting:molten_lapis")
    addMeshCastingRecipe('strainers:gold_mesh', "450x casting:molten_gold")
    addMeshCastingRecipe('strainers:redstone_mesh', "450x casting:molten_redstone")

    function addMeshCastingRecipe(mesh, fluidStack) {
        event.remove({id: mesh});
        event.recipes.casting.solidifier("submerged:mesh_mold", 
            fluidStack, mesh).id(`submerged:${mesh.split(':')[1]}`);
    }

    /*

    //Gears
    addCreateGearRecipe('minecraft:diamond', 'alltheores:diamond_gear')
    addCreateGearRecipe('minecraft:iron_ingot', 'alltheores:iron_gear')
    addCreateGearRecipe('minecraft:gold_ingot', 'alltheores:gold_gear')
    addCreateGearRecipe('#c:ingots/steel', 'alltheores:steel_gear')
    addCreateGearRecipe('alltheores:bronze_ingot', 'alltheores:bronze_gear')
    addCreateGearRecipe('alltheores:brass_ingot', 'alltheores:brass_gear')
    addCreateGearRecipe('alltheores:electrum_ingot', 'alltheores:electrum_gear')
    addCreateGearRecipe('alltheores:invar_ingot', 'alltheores:invar_gear')
    addCreateGearRecipe('alltheores:constantan_ingot', 'alltheores:constantan_gear')
    addCreateGearRecipe('alltheores:silver_ingot', 'alltheores:silver_gear')
    addCreateGearRecipe('alltheores:nickel_ingot', 'alltheores:nickel_gear')
    addCreateGearRecipe('alltheores:platinum_ingot', 'alltheores:platinum_gear')
    addCreateGearRecipe('alltheores:uranium_ingot', 'alltheores:uranium_gear')
    addCreateGearRecipe('alltheores:tin_ingot', 'alltheores:tin_gear')
    addCreateGearRecipe('minecraft:copper_ingot', 'alltheores:copper_gear')
    addCreateGearRecipe('alltheores:aluminum_ingot', 'alltheores:aluminum_gear')
    addCreateGearRecipe('alltheores:lead_ingot', 'alltheores:lead_gear')
    addCreateGearRecipe('alltheores:zinc_ingot', 'alltheores:zinc_gear')
    addCreateGearRecipe('alltheores:signalum_ingot', 'alltheores:signalum_gear')
    addCreateGearRecipe('alltheores:lumium_ingot', 'alltheores:lumium_gear')
    addCreateGearRecipe('alltheores:enderium_ingot', 'alltheores:enderium_gear')
    addCreateGearRecipe('minecraft:netherite_ingot', 'alltheores:netherite_gear')
    addCreateGearRecipe('enderio:energized_ingot', 'enderio:energized_gear')


    


    //Create Gears Function
    function addCreateGearRecipe(input, output) {
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": Ingredient.of(input).toJson(),
            "loops": 1,
            "results": [Item.of(output).toJson()],
            "sequence": [
                {
                "type": "create:deploying",
                "ingredients": [Ingredient.of(input).toJson(), Ingredient.of("casting:gear_mold").toJson()],
                "keep_held_item": true,
                "results": [Item.of(output).toJson()],
                },
                {
                "type": "create:deploying",
                "ingredients": [Ingredient.of(input).toJson(), Ingredient.of(input).toJson()],
                "keep_held_item": true,
                "results": [Item.of(output).toJson()],
                },
                {
                "type": "create:deploying",
                "ingredients": [Ingredient.of(input).toJson(), Ingredient.of(input).toJson()],
                "keep_held_item": true,
                "results": [Item.of(output).toJson()],
                },
                {
                "type": "create:deploying",
                "ingredients": [Ingredient.of(input).toJson(), Ingredient.of(input).toJson()],
                "keep_held_item": true,
                "results": [Item.of(output).toJson()],
                }
            ],
            "transitional_item": Item.of("submerged:incomplete_gear").toJson()
        }).id(`submerged:${output.split(':')[1]}`)
    }


    */



})
