//Core
ServerEvents.recipes(event => {
    
    //Replace Input 
    event.replaceInput({id: 'cloche:cloche'}, 'minecraft:dirt', 'strainers:purified_dirt')
    
    //Cloche
    event.shaped('bblcore:upgrade_base', ['AAA', 'A A', 'AAA'], {
        A: 'minecraft:iron_nugget'
    }).id('submerged:upgrade_base')

    //Test
    event.shaped('enderio:loot_capacitor[enderio:capacitor_data={base:4.0f,specializations:{fuel_efficiency:4.0f}}]', ['A'], {
        A: 'minecraft:iron_nugget'
    }).id('submerged:remove')
}) 