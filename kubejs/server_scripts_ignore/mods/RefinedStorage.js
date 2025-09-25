//Refined Storage
ServerEvents.recipes(event => {

    //Remove
    event.remove({id: "refinedstorage:quartz_enriched_iron"})
    event.remove({id: "refinedstorage:basic_processor"})
    event.remove({id: "refinedstorage:advanced_processor"})
    event.remove({id: "refinedstorage:improved_processor"})
})
