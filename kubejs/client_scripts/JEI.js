//JEI Recipe Viewer

RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove('#submerged:banned_items')
})