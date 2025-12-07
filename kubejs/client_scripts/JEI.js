//JEI Recipe Viewer

RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove('#submerged:banned_items')
})

RecipeViewerEvents.addEntries('item', event => {
    event.add('bedrock_breaker:bedrock_breaker[max_damage=100,custom_data={last_layer:0b,the_end:0b}]')
})



