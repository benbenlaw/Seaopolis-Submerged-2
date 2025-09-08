//JEI Recipe Viewer

RecipeViewerEvents.removeEntriesCompletely("item", event => {
    event.remove("nautec:cast_iron_nugget");
    event.remove("nautec:cast_iron_ingot");
    event.remove("nautec:cast_iron_rod");
});