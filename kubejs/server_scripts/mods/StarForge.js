//Star Forge

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'starforge:forge/blue_star'});
    event.remove({id: 'starforge:forge/white_star'});
    event.remove({id: 'starforge:forge/yellow_star'});
    event.remove({id: 'starforge:forge/orange_star'});
    event.remove({id: 'starforge:forge/red_star'});
    event.remove({id: 'starforge:forge/tier_1_star_forge_cap'});
    event.remove({id: 'starforge:forge/tier_2_star_forge_cap'});
    event.remove({id: 'starforge:forge/tier_3_star_forge_cap'});
    event.remove({id: 'starforge:forge/tier_4_star_forge_cap'});
    event.remove({id: 'starforge:forge/tier_5_star_forge_cap'});
    event.remove({id: 'starforge:forge/star_ingot'});
    event.remove({id: 'starforge:forge/star_gem'});

    //Replace Input
    event.replaceInput({id: 'starforge:star_forge'}, 'minecraft:heavy_weighted_pressure_plate', 'submerged:triarchium_ingot');
    event.replaceInput({id: 'starforge:pedestal'}, 'minecraft:heavy_weighted_pressure_plate', 'submerged:triarchium_ingot');
    
    //'atlantis:orichalcum_ingot', 'iceandfire:fire_dragon_blood'
    createStarForgeRecipe('atlantis:orichalcum_ingot', 'atlantis:orichalcum_blend', [], 5, 600, 100);

    //Drop of Atlantis
    createStarForgeRecipe('atlantis:drop_of_atlantis', 'starforge:star_gem', [
        'submerged:essence_of_the_sea',
        'submerged:prime_alloy_ingot',
        'submerged:prime_nugget',
    ], 5, 8000, 100);

    //Star Gem
    createStarForgeRecipe('starforge:star_gem', 'submerged:triarchium_gem', [], 5, 16000, 200);

    //Star Ingot
    createStarForgeRecipe('starforge:star_ingot', 'submerged:triarchium_ingot', [], 5, 16000, 200);

    //Star Gem - OLD
    /*
    createStarForgeRecipe('starforge:star_gem', 'submerged:triarchium_gem',
        [
            'minecraft:emerald', 
            'minecraft:lapis_lazuli', 
            'minecraft:diamond', 
            'minecraft:quartz', 
            'minecraft:amethyst_shard', 
            'minecraft:prismarine_crystals', 
            'alltheores:fluorite', 
            'ae2:certus_quartz_crystal', 
            'ae2:charged_certus_quartz_crystal', 
            'ae2:fluix_crystal', 
            'extendedae:entro_crystal', 
            '#submerged:force_ars_gem'
        ],
        5, 16000, 200);
    */

    //Star Ingot
    /*
    createStarForgeRecipe('starforge:star_ingot', 'submerged:prime_alloy_ingot',
        [
            'submerged:prime_ingot',
            'submerged:prime_alloy_ingot'
        ],
    5, 16000, 200);
    */

    //Blue Star
    createStarForgeRecipe('starforge:blue_star', 'submerged:nether_star_block', 
        [
            'alltheores:sapphire_block', 
            'alltheores:sapphire_block', 
            'alltheores:sapphire_block', 
            'alltheores:sapphire_block',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem'
        ], 
        0, 0, 200);

    //Tier 1 Cap
    createStarForgeRecipe('starforge:tier_1_star_forge_cap', 'minecraft:nether_star', 
        [
            'alltheores:sapphire_block', 
            'alltheores:sapphire_block', 
            'alltheores:sapphire_block', 
            'alltheores:sapphire_block',
        ], 
        0, 250, 200);

    //White Star
    createStarForgeRecipe('starforge:white_star', 'starforge:blue_star',
        [
            'minecraft:quartz_block',
            'minecraft:quartz_block',
            'minecraft:quartz_block',
            'minecraft:quartz_block',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem'
        ],
        1, 1000, 200);

    //Tier 2 Cap
    createStarForgeRecipe('starforge:tier_2_star_forge_cap', 'starforge:tier_1_star_forge_cap',
        [
            'minecraft:quartz_block',
            'minecraft:quartz_block',
            'minecraft:quartz_block',
            'minecraft:quartz_block',
        ],
        1, 500, 200);

    //Yellow Star
    createStarForgeRecipe('starforge:yellow_star', 'starforge:white_star',
        [
            'alltheores:lumium_block',
            'alltheores:lumium_block',
            'alltheores:lumium_block',
            'alltheores:lumium_block',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem'
        ],
        2, 2000, 200);

    //Tier 3 Cap
    createStarForgeRecipe('starforge:tier_3_star_forge_cap', 'starforge:tier_2_star_forge_cap',
        [
            'alltheores:lumium_block',
            'alltheores:lumium_block',
            'alltheores:lumium_block',
            'alltheores:lumium_block',
        ],
        2, 1000, 200);

    //Orange Star
    createStarForgeRecipe('starforge:orange_star', 'starforge:yellow_star',
        [
            'submerged:solclipsium_block',
            'submerged:solclipsium_block',
            'submerged:solclipsium_block',
            'submerged:solclipsium_block',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem'
        ],
        3, 4000, 200);

    //Tier 4 Cap
    createStarForgeRecipe('starforge:tier_4_star_forge_cap', 'starforge:tier_3_star_forge_cap',
        [
            'submerged:solclipsium_block',
            'submerged:solclipsium_block',
            'submerged:solclipsium_block',
            'submerged:solclipsium_block',
        ],
        3, 2000, 200);

    //Red Star
    createStarForgeRecipe('starforge:red_star', 'starforge:orange_star',
        [
            'alltheores:platinum_block',
            'alltheores:iridium_block',
            'alltheores:platinum_block',
            'alltheores:iridium_block',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem',
            'submerged:triarchium_gem'
        ],
        4, 8000, 200);

    //Tier 5 Cap
    createStarForgeRecipe('starforge:tier_5_star_forge_cap', 'starforge:tier_4_star_forge_cap',
        [
            'alltheores:platinum_block',
            'alltheores:iridium_block',
            'alltheores:platinum_block',
            'alltheores:iridium_block'
        ],
        4, 4000, 200);

    //Star Gravel
    createStarForgeRecipe('submerged:star_gravel', 'submerged:toxic_gravel',
        [
        ],
        4, 1000, 100);


    function createStarForgeRecipe(output, input, extraIngredients, tier, starPower, duration) {
        const formattedExtras = extraIngredients.map(ingredient => {
            
            if (typeof ingredient === 'object') return ingredient;            
            
            if (typeof ingredient === 'string' && ingredient.startsWith('#')) {
                return { tag: ingredient.substring(1) };
            }
            return { item: ingredient };
        });

        event.custom({
            type: "starforge:star_forge",
            tier: tier,
            star_power: starPower,
            duration: duration,
            input: {
                item: input
            },
            result: Item.of(output).toJson(),
            extra_ingredients: formattedExtras
        }).id(`submerged:starforge/${output.split(':')[1]}`);
    }

})
