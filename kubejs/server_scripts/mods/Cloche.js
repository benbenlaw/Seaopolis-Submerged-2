//Cloche
ServerEvents.recipes(event => {
    
    //Cloche
    event.shaped('cloche:cloche', ['DAD', 'BCB', 'DAD'], {
        A: 'minecraft:iron_ingot',
        B: 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]',
        C: 'strainers:purified_dirt',
        D: '#c:ingots/aluminum'
    }).id('submerged:cloche')

    event.shaped('cloche:cloche', ['DAD', 'BCB', 'DAD'], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:water_bucket',
        C: 'strainers:purified_dirt',
        D: '#c:ingots/aluminum'
    }).id('cloche:cloche')

    //Mulch
    event.recipes.cloche.cloche('strainers:mulch', 'strainers:mulch', 1200,
        [
            ["strainers:mulch"]
        ]
    ).id('submerged:cloche/mulch')
    
    //Godlen Leaves
    event.recipes.cloche.cloche('strainers:mulch', 'strainers:mulch', 1200,
        [
            ["strainers:mulch"]
        ]
    ).id('submerged:cloche/mulch')

    //Saplings
    addSaplingRecipe('forcecraft:force_sapling', '#minecraft:dirt', 'forcecraft:force_log', 'forcecraft:force_leaves')
    addSaplingRecipeWithExtra('naturesaura:ancient_sapling', '#minecraft:dirt', 'naturesaura:ancient_log', 'naturesaura:ancient_leaves', 'naturesaura:gold_leaf', 0.6)
    addSaplingRecipe('ars_nouveau:blue_archwood_sapling', '#minecraft:dirt', 'ars_nouveau:blue_archwood_log', 'ars_nouveau:blue_archwood_leaves')
    addSaplingRecipe('ars_nouveau:red_archwood_sapling', '#minecraft:dirt', 'ars_nouveau:red_archwood_log', 'ars_nouveau:red_archwood_leaves')
    addSaplingRecipe('ars_nouveau:green_archwood_sapling', '#minecraft:dirt', 'ars_nouveau:green_archwood_log', 'ars_nouveau:green_archwood_leaves')
    addSaplingRecipe('ars_nouveau:purple_archwood_sapling', '#minecraft:dirt', 'ars_nouveau:purple_archwood_log', 'ars_nouveau:purple_archwood_leaves')
    
    //Sapling Function
    function addSaplingRecipe(sapling, soil, log, leaves) {
        event.recipes.cloche.cloche(sapling, soil, 1200,
            [
                ['2x ' + log],
                [sapling, 0.2],
                ['minecraft:stick', 0.2]
            ]
        ).shearsResult(leaves).id('submerged:cloche/' + sapling.replace(':', '_'))
    }
    function addSaplingRecipeWithExtra(sapling, soil, log, leaves, extraItem, chance) {
        event.recipes.cloche.cloche(sapling, soil, 1200,
            [
                ['2x ' + log],
                [sapling, 0.2],
                ['minecraft:stick', 0.2],
                [extraItem, chance]
            ]
        ).shearsResult(leaves).id('submerged:cloche/' + sapling.replace(':', '_'))
    }
})