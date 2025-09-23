//Routers

ServerEvents.recipes(event => {

    //Replace 
    event.replaceInput({mod: 'routers'}, 'minecraft:iron_ingot', '#c:nuggets/bronze')
    event.replaceInput({mod: 'routers'}, 'minecraft:hopper', '#c:ingots/aluminum')

})
