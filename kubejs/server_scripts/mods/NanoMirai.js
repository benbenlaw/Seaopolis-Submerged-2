//Nano Marai

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: 'nanomirai:simple_circuit'}) 
    event.remove({id: 'nanomirai:assembler/normal_circuit'}) 
    event.remove({id: 'nanomirai:graphite'}) 
    event.remove({id: 'nanomirai:laser/echo_shard_from_amethyst_shard'}) 

    //Replace Input 
    event.replaceInput({mod: 'nanomirai'}, 'nanomirai:simple_circuit', 'submerged:logic_processor')
    event.replaceInput({mod: 'nanomirai'}, 'nanomirai:normal_circuit', 'submerged:calculation_processor')
    event.replaceInput({id: 'nanomirai:nanomachine_assembler'}, 'minecraft:diamond', 'submerged:solclipsium_ingot')
    event.replaceInput({id: 'nanomirai:nanomachine_assembler'}, 'minecraft:iron_ingot', 'nanomirai:silicon_wafer')
    event.replaceInput({id: 'nanomirai:laser_engraver'}, 'minecraft:obsidian', 'submerged:solclipsium_ingot')
    event.replaceInput({id: 'nanomirai:laser_engraver'}, '#c:glass_blocks', '#submerged:industrial_lenses')

    //Raw Sculmium
    event.shaped('nanomirai:raw_sculmium', [' A ', 'ABA', ' A '], {
        A: 'minecraft:sculk',
        B: 'submerged:solclipsium_ingot'
    }).id('nanomirai:raw_sculmium')

    //Sculk Lens
    event.shaped('nanomirai:sculk_lens', ['AAA', 'BCB', 'AAA'], {
        A: 'nanomirai:graphite',
        B: '#submerged:industrial_lenses',
        C: 'nanomirai:amethyst_lens'
    }).id('submerged:sculk_lens')

    //Most of the recipes are in side data/nanomirai/

})
