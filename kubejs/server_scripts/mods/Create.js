//Create

ServerEvents.recipes(event => {

    //Remove
    event.remove({ id: 'create:crafting/materials/andesite_alloy' })

    event.remove({ id: 'create:mixing/andesite_alloy' })

    event.remove({ id: 'create:splashing/soul_sand' })
    event.remove({ id: 'create:splashing/red_sand' })
    event.remove({ id: 'create:splashing/gravel' })

    event.remove({ id: 'create:haunting/lapis_recycling' })

    event.remove({ id: 'create:crushing/diamond_ore' })
    event.remove({ id: 'create:crushing/deepslate_diamond_ore' })
    event.remove({ id: 'create:crushing/emerald_ore' })
    event.remove({ id: 'create:crushing/deepslate_emerald_ore' })
    event.remove({ id: /create:crushing\/deepslate_.*/ })

    //Replace Input
    event.replaceInput({ id: 'create:crafting/kinetics/deployer' }, 'create:electron_tube', 'minecraft:lapis_lazuli')
    event.replaceInput({ id: 'create:crafting/kinetics/goggles' }, '#c:plates/gold', '#c:plates/brass')
    event.replaceInput({ id: 'create:crafting/kinetics/wrench' }, '#c:plates/gold', '#c:plates/brass')

    //Pressing 
    event.recipes.create.pressing('submerged:prismarine_ingot', 'submerged:corrupted_prismarine_crystal').id('submerged:create/pressing/corrupted_prismarine_to_prismarine_ingot')

    //Milling
    event.recipes.create.milling('2x naturesaura:gold_powder', 'naturesaura:gold_leaf').id('submerged:create/milling/gold_leaf_to_gold_powder')
    event.recipes.create.milling('3x minecraft:blaze_powder', 'minecraft:blaze_rod').id('submerged:create/milling/blaze_rod_to_blaze_powder').processingTime(50)

    //Spout
    event.recipes.create.filling('pneumaticcraft:empty_pcb[pneumaticcraft:uv_exposure=100]', ['pneumaticcraft:empty_pcb', '25x casting:molten_silicon']).id('submerged:create/filling/empty_pcb_with_silicon')
    event.recipes.create.filling('pneumaticcraft:unassembled_pcb', ['pneumaticcraft:empty_pcb[pneumaticcraft:uv_exposure=100]', '100x pneumaticcraft:etching_acid']).id('submerged:create/filling/unassembled_pcb')
    event.recipes.create.filling('submerged:teary_gravel', ['submerged:ancient_gravel', '125x submerged:warden_tears']).id('submerged:create/filling/teary_gravel')

    //Mixing 
    event.recipes.createMixing('1000x pneumaticcraft:etching_acid', ['2x minecraft:gunpowder', '2x minecraft:rotten_flesh', '2x minecraft:spider_eye', '1000x pneumaticcraft:plastic']).id('submerged:create/mixing/etching_acid')
    event.recipes.createMixing('2x submerged:infused_alloy', ['naturesaura:infused_iron', 'naturesaura:tainted_gold', '6x minecraft:redstone']).id('submerged:create/mixing/infused_alloy')
    event.recipes.createMixing('4x refinedstorage:quartz_enriched_iron', ['3x minecraft:iron_ingot', 'minecraft:quartz', 'ae2:certus_quartz_crystal']).id('submerged:create/mixing/quartz_enriched_iron')
    event.recipes.createMixing('minecraft:netherite_ingot', ['4x minecraft:gold_ingot', '4x minecraft:netherite_scrap']).id('submerged:create/mixing/netherite_ingot')

    //Sequenced Assembly
    event.recipes.create.sequenced_assembly(['submerged:draconic_gravel'], 'atlantis:sunken_gravel', [
        event.recipes.create.pressing('submerged:draconic_gravel', 'atlantis:sunken_gravel'),
        event.recipes.create.deploying('atlantis:sunken_gravel', ['atlantis:sunken_gravel', 'iceandfire:dread_shard']),
        event.recipes.create.deploying('atlantis:sunken_gravel', ['atlantis:sunken_gravel', 'submerged:dreaded_draconic_compound']).keepHeldItem(),
        event.recipes.create.deploying('atlantis:sunken_gravel', ['atlantis:sunken_gravel', 'iceandfire:dread_shard']),
        event.recipes.create.pressing('submerged:draconic_gravel', 'atlantis:sunken_gravel')
    ]).transitionalItem('atlantis:sunken_gravel').loops(1).id('submerged:create/sequenced_assembly/draconic_gravel')

    event.recipes.create.sequenced_assembly(['3x pneumaticcraft:empty_pcb'], 'industrialforegoing:plastic', [
        event.recipes.create.deploying('industrialforegoing:plastic', ['industrialforegoing:plastic', Ingredient.of('#pneumaticcraft:wiring')]),
        event.recipes.create.deploying('industrialforegoing:plastic', ['industrialforegoing:plastic', Ingredient.of('#pneumaticcraft:wiring')]),
        event.recipes.create.deploying('industrialforegoing:plastic', ['industrialforegoing:plastic', Ingredient.of('#pneumaticcraft:wiring')]),
        event.recipes.create.deploying('industrialforegoing:plastic', ['industrialforegoing:plastic', 'minecraft:redstone_torch']),
        event.recipes.create.deploying('industrialforegoing:plastic', ['industrialforegoing:plastic', 'minecraft:redstone_torch'])
    ]).transitionalItem('industrialforegoing:plastic').loops(1).id('submerged:create/sequenced_assembly/empty_pcb')

    event.recipes.create.sequenced_assembly(['submerged:living_gravel'], 'submerged:assembled_gravel', [
        event.recipes.create.deploying('submerged:assembled_gravel', ['submerged:assembled_gravel', 'opolisutilities:ender_pearl_fragment']),
        event.recipes.create.filling('submerged:assembled_gravel', ['submerged:assembled_gravel', '125x mob_grinding_utils:fluid_xp'])
    ]).transitionalItem('submerged:assembled_gravel').loops(1).id('submerged:create/sequenced_assembly/living_gravel')

    event.recipes.create.sequenced_assembly(['submerged:ai_controller'], 'enderio:mind_killer', [
        event.recipes.create.deploying('enderio:mind_killer', ['enderio:mind_killer', 'enderio:z_logic_controller']),
        event.recipes.create.deploying('enderio:mind_killer', ['enderio:mind_killer', 'enderio:guardian_diode']),
        event.recipes.create.deploying('enderio:mind_killer', ['enderio:mind_killer', 'enderio:skeletal_contractor']),
        event.recipes.create.deploying('enderio:mind_killer', ['enderio:mind_killer', 'enderio:ender_resonator']),
        event.recipes.create.filling('enderio:mind_killer', ['enderio:mind_killer', '1000x industrialforegoing:latex'])
    ]).transitionalItem('enderio:mind_killer').loops(1).id('submerged:create/sequenced_assembly/ai_controller')

    event.recipes.create.sequenced_assembly(['submerged:nether_gravel'], 'submerged:living_gravel', [
        event.recipes.create.deploying('submerged:living_gravel', ['submerged:living_gravel', 'minecraft:nether_wart']),
        event.recipes.create.filling('submerged:living_gravel', ['submerged:living_gravel', '100x casting:molten_blaze']),
        event.recipes.create.deploying('submerged:living_gravel', ['submerged:living_gravel', 'minecraft:nether_wart'])
    ]).transitionalItem('submerged:living_gravel').loops(1).id('submerged:create/sequenced_assembly/nether_gravel_blaze')

    event.recipes.create.sequenced_assembly(['submerged:nether_gravel'], 'submerged:living_gravel', [
        event.recipes.create.filling('submerged:living_gravel', ['submerged:living_gravel', '25x industrialforegoing:pink_slime']),
        event.recipes.create.filling('submerged:living_gravel', ['submerged:living_gravel', '125x industrialforegoing:meat']),
        event.recipes.create.deploying('submerged:living_gravel', ['submerged:living_gravel', 'minecraft:nether_wart'])
    ]).transitionalItem('submerged:living_gravel').loops(1).id('submerged:create/sequenced_assembly/nether_gravel_meat')

    event.recipes.create.sequenced_assembly(['submerged:nether_gravel'], 'submerged:living_gravel', [
        event.recipes.create.pressing('submerged:living_gravel', 'submerged:living_gravel'),
        event.recipes.create.filling('submerged:living_gravel', ['submerged:living_gravel', '250x minecraft:lava']),
        event.recipes.create.deploying('submerged:living_gravel', ['submerged:living_gravel', 'minecraft:nether_wart'])
    ]).transitionalItem('submerged:living_gravel').loops(1).id('submerged:create/sequenced_assembly/nether_gravel_lava')

    event.recipes.create.sequenced_assembly(['submerged:assembled_gravel'], 'submerged:totemic_infused_gravel', [
        event.recipes.create.deploying('submerged:totemic_infused_gravel', ['submerged:totemic_infused_gravel', 'minecraft:sand']),
        event.recipes.create.filling('submerged:totemic_infused_gravel', ['submerged:totemic_infused_gravel', '250x submerged:organic_water']),
        event.recipes.create.pressing('submerged:totemic_infused_gravel', 'submerged:totemic_infused_gravel')
    ]).transitionalItem('submerged:totemic_infused_gravel').loops(1).id('submerged:create/sequenced_assembly/assembled_gravel')

})
