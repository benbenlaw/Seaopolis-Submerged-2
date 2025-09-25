//All The Ores

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: /alltheores:crafting\/hammer/})
    event.remove({id: /alltheores:crafting\/.*\/plate/})
    event.remove({id: /alltheores:crafting\/.*\/rod/})
    event.remove({id: 'alltheores:crafting/enderium/alloy_blending_from_dust'})
    event.remove({id: 'alltheores:crafting/steel/alloy_blending_from_dust'})

})
