//Custom Machinery

ServerEvents.recipes(event => {

    //Remove
    event.recipes.custommachinery.custom_machine("submerged:infinity_forge", 200)
        .requireItem("minecraft:cobblestone")
        .requireItem("sand")
        .requireItem("gravel")
        .requireItem("diamond")
        .requireFluid("100x casting:molten_obsidian")
        .requireChemical("100x mekanism:diamond")
        .requireEnergyPerTick(10000)
        .requirePressure(5, 25)
        .requireSU(5, 5)
        .requireSource(5000)


        .produceItem("emerald")
        .id('submerged:test')

})
