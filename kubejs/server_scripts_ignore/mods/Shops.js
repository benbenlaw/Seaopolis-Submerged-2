//Shops

ServerEvents.recipes(event => {

    //Shop
    event.shaped('shops:shop', ['AAA', 'BCB', 'AAA'], {
        A: '#minecraft:planks',
        B: '#c:player_workstations/crafting_tables',
        C: '#c:chests/wooden'
    }).id('shops:shop')

})
