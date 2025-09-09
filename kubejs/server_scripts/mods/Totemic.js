//Totemic

ServerEvents.recipes(event => {

    //Replace 
    event.replaceInput({id: "totemic:totem_whittling_knife"}, "minecraft:iron_ingot", "#c:ingots/bronze")
    event.replaceInput({id: "totemic:iron_bells"}, "minecraft:iron_nugget", "#c:nuggets/bronze")
})

TotemicEvents.ceremonyStartupSuccess(event => {
    
    event.server.runCommandSilent(`say A Totemic ceremony has started: ${event.ceremony}`)

    // event.cancel()
})