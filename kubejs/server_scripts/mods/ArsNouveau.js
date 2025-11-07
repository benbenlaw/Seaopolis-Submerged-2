//Ars Nouveau
ServerEvents.recipes(event => {
    
    //Remove 
    event.remove({id: 'ars_nouveau:imbuement_amethyst'})
    event.remove({id: 'ars_nouveau:imbuement_lapis'})

    //Antimatter
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'alltheores:uranium_ingot',
            'alltheores:fluorite',
            'mekanism:pellet_plutonium',
            'mekanism:pellet_polonium',
        ],
         "submerged:solclipsium_ingot", "mekanism:pellet_antimatter", 2000, true
    ).id('submerged:enchanting_apparatus/pellet_antimatter')

    //Sculmium Ingot
    event.recipes.ars_nouveau.imbuement('nanomirai:raw_sculmium', 'nanomirai:sculmium_ingot', 100, ['nanomirai:amethyst_lens']).id('submerged:imbuement/sculmium_ingot')

    //Sculk Vein
    event.recipes.ars_nouveau.imbuement('minecraft:vine', 'minecraft:sculk_vein', 25, ['nanomirai:sculk_lens']).id('submerged:imbuement/sculk_vein')

    //Gold Enriched Quartz
    event.recipes.ars_nouveau.enchanting_apparatus(['refinedstorage:quartz_enriched_iron'],
         "minecraft:gold_block", "6x submerged:quartz_enriched_gold", 1000, true
    ).id('submerged:enchanting_apparatus/quartz_enriched_gold')

    //Graphite
    event.recipes.ars_nouveau.enchanting_apparatus(['submerged:quartz_enriched_gold'],
            "minecraft:coal_block", "6x nanomirai:graphite", 1000, true
    ).id('submerged:enchanting_apparatus/graphite')

    //Amethyst Lens
    event.recipes.ars_nouveau.enchanting_apparatus(['#submerged:industrial_lenses'],
         "minecraft:amethyst_block", "nanomirai:amethyst_lens", 1000, true
    ).id('submerged:enchanting_apparatus/amethyst_lens')
    
    //Source Gem 
    event.recipes.ars_nouveau.imbuement('submerged:solclipsium_ingot', 'ars_nouveau:source_gem', 250).id('submerged:imbuement/solclipsium_ingot')

    //Blue Archwood Sapling
    event.shaped('ars_nouveau:blue_archwood_sapling', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:blue_dye',
        B: 'submerged:solclipsium_nugget',
        C: '#minecraft:saplings'
    }).id('submerged:blue_archwood_sapling')

    //Green Archwood Sapling
    event.shaped('ars_nouveau:green_archwood_sapling', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:green_dye',
        B: 'submerged:solclipsium_nugget',
        C: '#minecraft:saplings'
    }).id('submerged:green_archwood_sapling')

    //Purple Archwood Sapling
    event.shaped('ars_nouveau:purple_archwood_sapling', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:purple_dye',
        B: 'submerged:solclipsium_nugget',
        C: '#minecraft:saplings'
    }).id('submerged:purple_archwood_sapling')

    //Red Archwood Sapling
    event.shaped('ars_nouveau:red_archwood_sapling', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:red_dye',
        B: 'submerged:solclipsium_nugget',
        C: '#minecraft:saplings'
    }).id('submerged:red_archwood_sapling')
}) 