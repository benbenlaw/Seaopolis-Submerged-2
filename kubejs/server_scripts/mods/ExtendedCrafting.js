//Extended Crafting

ServerEvents.recipes(event => {
    
    //Remove
    event.remove({id: 'extendedcrafting:black_iron_ingot'})
    event.remove({id: 'extendedcrafting:frame'})
    event.remove({id: 'extendedcrafting:redstone_ingot'})
    event.remove({id: 'extendedcrafting:ender_ingot'})
    event.remove({id: 'extendedcrafting:luminessence'})
    event.remove({id: 'extendedcrafting:ultimate_component'})
    event.remove({id: 'extendedcrafting:compressor'})
    event.remove({id: 'extendedcrafting:ultimate_singularity'})
    event.remove({id: 'extendedcrafting:crystaltine_ingot'})
   
    //Ultimate Ingot
    event.shaped('extendedcrafting:the_ultimate_ingot', ['ABC', 'DEF', 'GHI'], {
        A: 'submerged:prime_alloy_ingot',
        B: 'iceandfire:ghost_ingot',
        C: 'enderio:ender_crystal',
        D: 'draconicevolution:chaos_shard',
        E: 'extendedcrafting:ultimate_singularity',
        F: 'extendedcrafting:ultimate_component',
        G: 'naturesaura:clock_hand',
        H: 'extendedcrafting:crystaltine_ingot',
        I: 'compressedblocks:c9_cobblestone'
    }).id('submerged:extendedcrafting/the_ultimate_ingot')


    //Ultimate Component
    event.shaped('extendedcrafting:ultimate_component', ['AAA', 'BCD', 'EEE'], {
        A: 'minecraft:emerald_block',
        B: 'extendedcrafting:flux_star',
        C: 'extendedcrafting:luminessence_block',
        D: 'extendedcrafting:ender_star',
        E: 'minecraft:diamond_block'
    }).id('submerged:extendedcrafting/ultimate_component')

    //Quantum Compressor
    event.shaped('extendedcrafting:compressor', ['AAA', 'BCB', 'AAA'], {
        A: 'extendedcrafting:black_iron_ingot',
        B: 'extendedcrafting:frame',
        C: 'extendedcrafting:ultimate_catalyst'
    }).id('submerged:extendedcrafting/quantum_compressor')
    
    //Black Iron Frame
    event.shaped('extendedcrafting:frame', ['AAA', 'ABA', 'AAA'], {
        A: 'submerged:prime_alloy_nugget',
        B: 'extendedcrafting:black_iron_block'
    }).id('submerged:extendedcrafting/frame')


})