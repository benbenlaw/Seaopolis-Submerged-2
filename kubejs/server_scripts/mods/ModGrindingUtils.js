//Mod Grinding Utils

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'mob_grinding_utils:recipe_cursed_feed'})
    event.remove({id: 'mob_grinding_utils:recipe_absorption_hopper'})
    
    //Replace Input
    event.replaceInput({id: 'mob_grinding_utils:recipe_fan'}, 'minecraft:redstone_block', 'minecraft:sea_lantern')
    event.replaceInput({id: 'mob_grinding_utils:recipe_tank_sink'}, 'minecraft:ender_eye', 'minecraft:ender_pearl')

    //Ender Inhibitor
    event.shaped('mob_grinding_utils:ender_inhibitor_on', ['AAA', 'BBB', 'AAA'], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:ender_pearl'
    }).id('submerged:ender_inhibitor')

    //Absorption Hopper
    event.shaped('mob_grinding_utils:absorption_hopper', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:ender_pearl',
        B: 'minecraft:hopper'
    }).id('submerged:absorption_hopper')

    //GM Chicken Feed Cursed'
    event.shaped('mob_grinding_utils:gm_chicken_feed_cursed', ['ABA', 'CDC', 'ABA'], {
        C: 'submerged:corrupted_prismarine_crystal',
        B: 'minecraft:bone_meal',
        A: 'submerged:salt_water_bucket',
        D: '#c:seeds'
    }).id('submerged:gm_chicken_feed_cursed')

    event.shaped('mob_grinding_utils:gm_chicken_feed_cursed', ['ABA', 'CDC', 'ABA'], {
        C: 'submerged:corrupted_prismarine_crystal',
        B: 'minecraft:bone_meal',
        A: 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"submerged:salt_water"}]',
        D: '#c:seeds'
    }).id('submerged:gm_chicken_feed_cursed_ceramic')

})
