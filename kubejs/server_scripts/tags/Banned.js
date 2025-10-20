//Banned Items and Blocks
ServerEvents.tags('item', event => {

    //Banned Items
    event.get('submerged:banned_items').add([
        'nautec:cast_iron_nugget',
        'nautec:cast_iron_ingot',
        'nautec:cast_iron_rod',
        'nautec:gear',
        'nautec:whisk',
        'refinedstorage:raw_basic_processor', 
        'refinedstorage:raw_advanced_processor', 
        'refinedstorage:raw_improved_processor',
        'opolisutilities:cloche',
        'opolisutilities:catalogue',
        'opolisutilities:catalogue_book',
        'opolisutilities:fluid_generator',
        'opolisutilities:resource_generator'
    ])
})

ServerEvents.tags('block', event => {

})

