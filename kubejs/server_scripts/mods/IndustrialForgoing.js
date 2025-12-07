//Industrial Foregoing

ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({id: 'industrialforegoing:machine_frame_pity'}, '#minecraft:logs', '#submerged:pity_frame_logs')
    event.replaceInput({id: 'industrialforegoing:machine_frame_pity'}, 'minecraft:redstone_block', 'submerged:infused_alloy')
    event.replaceInput({id: 'industrialforegoing:ore_laser_base'}, 'industrialforegoing:machine_frame_advanced', 'industrialforegoing:machine_frame_simple')
    event.replaceInput({id: 'industrialforegoing:mob_duplicator'}, 'industrialforegoing:machine_frame_advanced', 'industrialforegoing:machine_frame_supreme')
    event.replaceInput({id: 'industrialforegoing:washing_factory'}, 'industrialforegoing:meat_feeder', 'alltheores:aluminum_block')

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

    //Ancient Gravel
    addDissolutionRecipe([
        Ingredient.of('submerged:matter_gravel').toJson(),
        Ingredient.of('submerged:matter_gravel').toJson(),
        Ingredient.of('submerged:matter_gravel').toJson(),
        Ingredient.of('submerged:matter_gravel').toJson(),
        Ingredient.of('submerged:matter_gravel').toJson(),
        Ingredient.of('submerged:matter_gravel').toJson(),
        Ingredient.of('submerged:matter_gravel').toJson(),
        Ingredient.of('submerged:matter_gravel').toJson()
    ], 'submerged:time_fluid', 250, '8x submerged:ancient_gravel', 300)

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
    ], 'submerged:time_fluid', 500, 'submerged:blank_spawn_egg', 300)

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

    //Sculk 
    addOreLaserBase('nanomirai:sculk_lens', 'minecraft:sculk', 1)

    //Ancient Gravel
    addOreLaserBase('submerged:ancient_lens', 'submerged:grains_of_time', 1)

    //Grains of Infinity
    addOreLaserBase('industrialforegoing:black_laser_lens', 'enderio:grains_of_infinity', 1)
    
    //Stone 
    addOreLaserBase('industrialforegoing:light_gray_laser_lens', 'minecraft:stone', 1000)

    //Warden 
    addFluidLaserBase('nanomirai:sculk_lens', 'minecraft:warden', 'submerged:warden_tears', 100)

    //Ender Dragon
    addFluidLaserBase('industrialforegoing:pink_laser_lens', 'minecraft:ender_dragon', 'submerged:dragons_breath', 50)


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
                "depth_max": 200,
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
        }).id(`submerged:industrialforgoing/laser_drill_ore/${output.split(':')[1]}`)
    }

    //Fluid Laser Base Function
    function addFluidLaserBase(catalyst, entity, output, outputAmount) {
        event.custom({
            "type": "industrialforegoing:laser_drill_fluid",
            "catalyst": {"item": catalyst},
            "entity_data": {
                "data": {},
                "display": "",
                "entity": {
                "type": entity
                }
            },
            "output": {
                "amount": outputAmount,
                "fluid": output
            },
            "rarity": [
                {
                "biome_filter": {
                    "blacklist": [],
                    "whitelist": []
                },
                "depth_max": 256,
                "depth_min": -64,
                "dimension_filter": {
                    "blacklist": [],
                    "whitelist": []
                },
                "weight": 8
                }
            ]
        })
    }
})
