//Industrial Foregoing

ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({id: 'industrialforegoing:machine_frame_pity'}, '#minecraft:logs', '#submerged:pity_frame_logs')
    event.replaceInput({id: 'industrialforegoing:machine_frame_pity'}, 'minecraft:redstone_block', 'submerged:infused_alloy')
    event.replaceInput({id: 'industrialforegoing:ore_laser_base'}, 'industrialforegoing:machine_frame_advanced', 'industrialforegoing:machine_frame_simple')
    event.replaceInput({id: 'industrialforegoing:mob_duplicator'}, 'industrialforegoing:machine_frame_advanced', 'industrialforegoing:machine_frame_supreme')

    //Remove
    event.remove({id: /industrialforegoing:fluid_extractor\/.*/})
    event.remove({id: /industrialforegoing:laser_drill_ore\/.*/})
    event.remove({id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame'})

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

    //Fluid Extractor Recipes
    //In data/submerged/recipe/industrialforgoing/fluid_extractor/

    //Blank Spawn Egg
    addDissolutionRecipe([
        Ingredient.of('minecraft:egg').toJson(),
        Ingredient.of('minecraft:egg').toJson(),
        Ingredient.of('minecraft:egg').toJson(),
        Ingredient.of('minecraft:egg').toJson(),
        Ingredient.of('minecraft:egg').toJson(),
        Ingredient.of('minecraft:egg').toJson(),
        Ingredient.of('minecraft:egg').toJson(),
        Ingredient.of('minecraft:egg').toJson()
    ], 'industrialforegoing:ether_gas', 500, 'submerged:blank_spawn_egg', 300)

    //Advanced Machine Frame
    addDissolutionRecipe([
        Ingredient.of('#c:plastics').toJson(), 
        Ingredient.of('industrialforegoing:machine_frame_simple').toJson(),
        Ingredient.of('#c:plastics').toJson(), 
        Ingredient.of('enderio:grains_of_infinity').toJson(), 
        Ingredient.of('enderio:grains_of_infinity').toJson(), 
        Ingredient.of('minecraft:gold_ingot').toJson(),
        Ingredient.of('alltheores:diamond_gear').toJson(),
        Ingredient.of('minecraft:gold_ingot').toJson()
    ], 'industrialforegoing:pink_slime', 500, 'industrialforegoing:machine_frame_advanced', 300)

    //Ancient Gravel
    addOreLaserBase('submerged:ancient_lens', 'submerged:ancient_gravel', 100)

    //Grains of Infinity
    addOreLaserBase('industrialforegoing:black_laser_lens', 'enderio:grains_of_infinity', 100)

    //Dissolution Chamber Function
    function addDissolutionRecipe(inputs, fluidIn, fluidAmount, output, time) {
        event.custom({
            'type': 'industrialforegoing:dissolution_chamber',
            'input': inputs,
            'inputFluid': {
                'amount': fluidAmount,
                'fluid': fluidIn
            },
            'output': Item.of(output).toJson(),
            'processingTime': time
        }).id(`submerged:industrialforgoing/dissolution_chamber/${output.split(':')[1]}`)
    }

    //Ore Laser Base Function
    function addOreLaserBase(catalyst, output, weight) {
        event.custom({
            "type": "industrialforegoing:laser_drill_ore",
            "catalyst": {"item": catalyst},
            "output": {"item": output},
            "rarity": [
                {
                "biome_filter": {
                    "blacklist": [],
                    "whitelist": []
                },
                "depth_max": 122,
                "depth_min": -64,
                "dimension_filter": {
                    "blacklist": [
                    ],
                    "whitelist": [
                        "minecraft:overworld"
                    ]
                },
                "weight": weight
                }
            ]
        })
    }
})
