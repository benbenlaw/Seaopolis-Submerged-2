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
        'submerged:raw_ancient_debris', 
        'nanomirai:raw_sculmium', 
        'alltheores:raw_lead', 
        'alltheores:raw_nickel',
        'atlantis:aquamarine_gem', 
        'alltheores:raw_zinc', 
        'alltheores:raw_uranium', 
        'alltheores:raw_iridium', 'atlantis:raw_ancient_cuprum']
    ).id('submerged:orichalcum_blend')



})
