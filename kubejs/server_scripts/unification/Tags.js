//Tags in Recipes

ServerEvents.recipes(event => {

    //Replace Inputs
    event.replaceInput({}, 'minecraft:crafting_table', '#c:player_workstations/crafting_tables')

})

ServerEvents.tags("item", event => {

    //Player Workstations
    event.get("c:dusts/salt").add("nautec:salt")

})
