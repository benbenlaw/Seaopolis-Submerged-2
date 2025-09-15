//Mod Specific Unification

ServerEvents.recipes(event => {

    //Remove Banned Item Recipes
    event.remove({output: '#submerged:banned_items'})
    event.remove({id: 'ae2:blasting/silicon_from_certus_quartz_dust'})
    event.remove({id: 'refinedstorage:silicon'})
    event.remove({id: 'enderio:sag_milling/sand'})
    event.remove({id: 'enderio:sag_milling/clay'})
    event.remove({id: 'mekanism:compat/ae2/sand_to_silicon'})
    event.remove({id: 'mekanism:compat/ae2/certus_quartz_dust_to_silicon'})
    event.remove({id: 'ae2:smelting/silicon_from_certus_quartz_dust'})

    //Nautech
    event.replaceInput({}, 'nautec:cast_iron_nugget', '#c:nuggets/steel')
    event.replaceInput({}, 'nautec:cast_iron_ingot', '#c:ingots/steel')
    event.replaceInput({}, 'nautec:cast_iron_rod', '#c:rods/steel')
    event.replaceInput({}, 'nautec:gear', '#c:gears/steel')
    event.replaceInput({}, 'nautec:whisk', 'create:whisk')
})
    