//Ender IO

ServerEvents.recipes(event => {
    
    //Remove
    event.remove({id: 'enderio:fire_crafting/deepslate_infinity'})
    event.remove({id: 'enderio:fire_crafting/bedrock_infinity'})
    event.remove({id: 'enderio:sag_milling/cobbled_deepslate'})
    event.remove({id: 'enderio:basic_capacitor'})
    event.remove({id: 'enderio:alloy_smelting/photovoltaic_plate'})
    event.remove({id: 'enderio:photovoltaic_composite'})
 
    //Photovoltaic Composite
    event.shapeless('enderio:photovoltaic_composite', ['#c:gems/lapis', 'minecraft:coal', 'ae2:silicon']).id('submerged:enderio/photovoltaic_composite')

})
