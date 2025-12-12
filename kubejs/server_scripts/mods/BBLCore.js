//Core
ServerEvents.recipes(event => {
    
    //Replace Input 
    event.replaceInput({id: 'cloche:cloche'}, 'minecraft:dirt', 'strainers:purified_dirt')
    
    //Cloche
    event.shaped('bblcore:upgrade_base', ['AAA', 'A A', 'AAA'], {
        A: 'minecraft:iron_nugget'
    }).id('submerged:upgrade_base')

}) 