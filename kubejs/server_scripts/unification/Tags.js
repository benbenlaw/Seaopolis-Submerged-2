//Tags in Recipes

ServerEvents.recipes(event => {

    //Replace Inputs
    event.replaceInput({}, 'minecraft:crafting_table', '#c:player_workstations/crafting_tables')

})

ServerEvents.tags("item", event => {

    //Player Workstations
    event.get("c:dusts/salt").add("nautec:salt")

    //Ingots
    event.get("c:ingots/quartz_enriched_iron").add("refinedstorage:quartz_enriched_iron")

    //Saplings 
    event.get("minecraft:saplings").add("naturesaura:ancient_sapling")
})

ServerEvents.tags("block", event => {

    //Saplings 
    event.get("minecraft:saplings").add("naturesaura:ancient_sapling")
})
