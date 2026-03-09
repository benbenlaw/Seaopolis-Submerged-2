//Atlantis
ServerEvents.recipes(event => {
 
    //Remove
    event.remove({id: 'atlantis:drop_of_atlantis'})
    event.remove({id: 'atlantis:sunken_gravel'})
    event.remove({id: 'atlantis:orichalcum_blend'})
    event.remove({id: 'atlantis:orichalcum_ignot_from_smelting'})
    event.remove({id: 'atlantis:orichalcum_ingot_from_smelting'})
    event.remove({id: 'atlantis:orichalcum_ignot_from_blasting'})
    event.remove({id: 'atlantis:orichalcum_ingot_from_blasting'})
    
    //Aquamarine Ore Piece
    event.shaped('atlantis:aquamarine_ore', ['AA', 'AA'], {
        A: 'submerged:aquamarine_ore_piece'
    }).id('submerged:aquamarine_ore_piece')

    //Cuprum Ore Piece
    event.shaped('atlantis:ancient_cuprum_ore', ['CC', 'CC'], {
        C: 'submerged:cuprum_ore_piece'
    }).id('submerged:cuprum_ore_piece')

    //Orichalcum Blend
    event.shapeless('atlantis:orichalcum_blend', [
        'minecraft:netherite_ingot', 
        'nanomirai:sculmium_ingot', 
        '#c:ingots/lead', 
        '#c:ingots/nickel',
        'atlantis:aquamarine_gem', 
        '#c:ingots/zinc', 
        '#c:ingots/uranium', 
        '#c:ingots/iridium', 
        'atlantis:ancient_cuprum_ingot']
    ).id('submerged:orichalcum_blend')



})
