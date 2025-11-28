//Modifications

ItemEvents.modification(event => {

    event.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64
    })

    event.modify('minecraft:snowball', item => {
        item.maxStackSize = 64
    })

})
