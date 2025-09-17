ServerEvents.tags('item', event => {

    //Colored Items
    colors.forEach(color => {
        event.get('submerged:colored_apples').add(`colors:${color}_apple`)
        event.get('submerged:colored_saplings').add(`colors:${color}_sapling`)
        event.get('submerged:colored_logs').add(`colors:${color}_log`)
        event.get('submerged:colored_dirt').add(`colors:${color}_dirt`)
        event.get('submerged:colored_planks').add(`colors:${color}_planks`)
        event.get('submerged:colored_leaves').add(`colors:${color}_leaves`)
        event.get('submerged:colored_crafting_tables').add(`colors:${color}_crafting_table`)
        event.get('submerged:colored_short_grass').add(`colors:${color}_short_grass`)
    })

    //Resources
    createResourceTag('copper', 'alltheores:copper_nugget', 'minecraft:copper_ingot', 'minecraft:copper_block')
    createResourceTag('tin', 'alltheores:tin_nugget', 'alltheores:tin_ingot', 'alltheores:tin_block')
    createResourceTag('aluminum', 'alltheores:aluminum_nugget', 'alltheores:aluminum_ingot', 'alltheores:aluminum_block')
    createResourceTag('bronze', 'alltheores:bronze_nugget', 'alltheores:bronze_ingot', 'alltheores:bronze_block')
    createResourceTag('zinc', 'alltheores:zinc_nugget', 'alltheores:zinc_ingot', 'alltheores:zinc_block')
    createResourceTag('lapis', 'minecraft:lapis_lazuli', 'minecraft:lapis_block')
    createResourceTag('iron', 'minecraft:iron_nugget', 'minecraft:iron_ingot', 'minecraft:iron_block')
    createResourceTag('gold', 'minecraft:gold_nugget', 'minecraft:gold_ingot', 'minecraft:gold_block')

    function createResourceTag(resource, nugget, ingot, block) {
        event.get(`submerged:resources/${resource}`).add(nugget, ingot, block);
    }
})

ServerEvents.tags('block', event => {
    colors.forEach(color => {
        event.get(`bblcore:tintable/${color}`).remove(`colors:${color}_log`, `colors:${color}_wood`, `colors:${color}_stripped_log`, `colors:${color}_stripped_wood`)
    })

    //Roomopolis Non Counted Blocks
    event.get('roomopolis:not_needed_for_block_requirements').add(['naturesaura:nature_altar'])

    //Nether Portal Frame
    event.get('bblcore:nether_portal_frame').remove('minecraf:obsidian')
})

