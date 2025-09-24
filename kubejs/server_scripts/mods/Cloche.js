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
})