//Mod Specific Unification

ServerEvents.recipes(event => {

    //Remove Banned Item Recipes
    event.remove({output: '#submerged:banned_items'})

    //Nautech
    event.replaceInput({}, 'nautec:cast_iron_nugget', '#c:nuggets/steel')
    event.replaceInput({}, 'nautec:cast_iron_ingot', '#c:ingots/steel')
    event.replaceInput({}, 'nautec:cast_iron_rod', '#c:rods/steel')
    event.replaceInput({}, 'nautec:gear', '#c:gears/steel')
    event.replaceInput({}, 'nautec:whisk', 'create:whisk')
})
    