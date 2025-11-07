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
})
