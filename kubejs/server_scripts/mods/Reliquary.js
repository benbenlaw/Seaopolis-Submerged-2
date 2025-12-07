//Reliquary

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'reliquary:uncrafting/redstone'})
    event.remove({id: 'reliquary:uncrafting/glowstone_dust'})
    event.remove({id: 'reliquary:uncrafting/glass_bottle'})
    event.remove({id: 'reliquary:uncrafting/gold_nugget'})
    event.remove({id: 'reliquary:uncrafting/ghast_tear'})
    event.remove({id: 'reliquary:alkahestry/charging/glowstone'})
    event.remove({id: 'reliquary:alkahestry/charging/glowstone_dust'})
    event.remove({id: 'reliquary:alkahestry/charging/redstone'})
    event.remove({id: 'reliquary:alkahestry/charging/redstone_block'})
    event.remove({id: 'reliquary:alkahestry/drain/redstone'})

    //Tome Charging 
    addTomeChargingRecipe('mekmm:uu_matter', 512)

    function addTomeChargingRecipe(input, charge) {
        event.custom({
            "type": "reliquary:alkahestry_charging",
            "charge": charge,
            "ingredient": {
                "item": input
            }
        }).id(`submerged:reliquary_tome_charging/${input.replace(':', '_')}`)
    }

})
