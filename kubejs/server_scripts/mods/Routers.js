//Routers

ServerEvents.recipes(event => {

    //Replace 
    event.replaceInput({mod: 'routers'}, 'minecraft:iron_ingot', '#c:nuggets/bronze')
    event.replaceInput({mod: 'routers'}, 'minecraft:copper_ingot', '#c:nuggets/copper')
    event.replaceInput({mod: 'routers'}, 'minecraft:hopper', '#c:ingots/aluminum')
    event.replaceInput({id: 'routers:round_robin_upgrade'}, 'minecraft:redstone', '#c:ingots/aluminum')

})
