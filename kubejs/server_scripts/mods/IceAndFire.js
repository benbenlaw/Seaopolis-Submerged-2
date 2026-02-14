//Ice and Fire

ServerEvents.recipes(event => {
    
    //Remove 
    event.remove({id: 'iceandfire:dragonforge/fire_dragon_blood'})
    event.remove({id: 'iceandfire:dragonforge/ice_dragon_blood'})
    event.remove({id: 'iceandfire:dragonforge/lightning_dragon_blood'})

    event.remove({id: 'iceandfire:dragonforge/dragonsteel_fire_ingot'})
    event.remove({id: 'iceandfire:dragonforge/dragonsteel_ice_ingot'})
    event.remove({id: 'iceandfire:dragonforge/dragonsteel_lightning_ingot'})

    //Replace Input
    event.replaceInput({id: 'iceandfire:dragon_stick'}, '#c:skulls', 'minecraft:dragon_head')

    //Orichalcum Ingot'
    addDragonForgeRecipe('fire', 'atlantis:orichalcum_blend', 'iceandfire:fire_dragon_blood', 'atlantis:orichalcum_ingot', 600)
    addDragonForgeRecipe('ice', 'atlantis:orichalcum_blend', 'iceandfire:ice_dragon_blood', 'atlantis:orichalcum_ingot', 600)
    addDragonForgeRecipe('lightning', 'atlantis:orichalcum_blend', 'iceandfire:lightning_dragon_blood', 'atlantis:orichalcum_ingot', 600)

    //Triarchium Ingots
    addDragonForgeRecipe('fire', 'iceandfire:dragonsteel_fire_ingot', 'submerged:triarchium_gem', 'submerged:triarchium_ingot', 500)
    addDragonForgeRecipe('ice', 'iceandfire:dragonsteel_ice_ingot', 'submerged:triarchium_gem', 'submerged:triarchium_ingot', 500)
    addDragonForgeRecipe('lightning', 'iceandfire:dragonsteel_lightning_ingot', 'submerged:triarchium_gem', 'submerged:triarchium_ingot', 500)

    //Dragon Forge Recipes
    addDragonForgeRecipe('fire', 'alltheores:steel_ingot', 'iceandfire:fire_dragon_blood', 'iceandfire:dragonsteel_fire_ingot', 1000)
    addDragonForgeRecipe('ice', 'alltheores:steel_ingot', 'iceandfire:ice_dragon_blood', 'iceandfire:dragonsteel_ice_ingot', 1000)
    addDragonForgeRecipe('lightning', 'alltheores:steel_ingot', 'iceandfire:lightning_dragon_blood', 'iceandfire:dragonsteel_lightning_ingot', 1000)

    //Dragon Breath Recipes (Items renamed to breath instead of blood)
    addDragonForgeRecipe('fire', 'minecraft:dragon_breath', 'minecraft:glass_bottle', 'iceandfire:fire_dragon_blood', 1000)
    addDragonForgeRecipe('ice', 'minecraft:dragon_breath', 'minecraft:glass_bottle', 'iceandfire:ice_dragon_blood', 1000)
    addDragonForgeRecipe('lightning', 'minecraft:dragon_breath', 'minecraft:glass_bottle', 'iceandfire:lightning_dragon_blood', 1000)


    //Dragon Forge Function
    function addDragonForgeRecipe(type, input, bloodItem, output, time) {
        event.custom({
            'type': 'iceandfire:dragonforge',
            'dragonType': type,
            'cookTime': time,
            'input': {
                'item': input
            },
            'blood': {
                'item': bloodItem
            },
            'result': {
                'id': output
            }
        })
    }
})
