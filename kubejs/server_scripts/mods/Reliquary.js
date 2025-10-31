//Reliquary

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'reliquary:uncrafting/redstone'})
    event.remove({id: 'reliquary:uncrafting/glowstone_dust'})
    event.remove({id: 'reliquary:uncrafting/glass_bottle'})
    event.remove({id: 'reliquary:uncrafting/gold_nugget'})
    event.remove({id: 'reliquary:uncrafting/ghast_tear'})
})
