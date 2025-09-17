//Time In A Bottle

ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({id: 'tiab:time_in_a_bottle'}, 'minecraft:clock', 'naturesaura:clock_hand')

    //TIAB Charger
    event.shaped('tiab_charger:tiab_charger', ['AAA', 'BCB', 'AAA'], {
        A: 'minecraft:iron_block',
        B: 'naturesaura:clock_hand',
        C: 'industrialforegoing:machine_frame_supreme'
    }).id('tiab_charger:tiab_charger')

})
