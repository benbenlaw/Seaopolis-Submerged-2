//Industrial Foregoing

ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({id: "industrialforegoing:machine_frame_pity"}, "#minecraft:logs", "naturesaura:ancient_log")
    event.replaceInput({id: "industrialforegoing:machine_frame_pity"}, "minecraft:redstone_block", "submerged:infused_alloy")

    //Remove
    event.remove({id: /industrialforegoing:fluid_extractor\/.*/})

    //Material Stone Worker
    event.shaped('industrialforegoing:material_stonework_factory', ['AGA', 'EBF', 'DCD'], {
        A: '#c:plastics',
        B: 'industrialforegoing:machine_frame_pity',
        C: 'industrialforegoing:pink_slime',
        D: '#c:gears/gold',
        E: 'minecraft:iron_pickaxe',
        F: 'minecraft:furnace',
        G: 'smartcrafting:smart_crafting_table'
    }).id('industrialforegoing:material_stonework_factory')


    //Fluid Extractor
    //In data/submerged/recipe/industrialforgoing/fluid_extractor/ancient_logs.json
})
