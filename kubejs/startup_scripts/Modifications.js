//Modifications

ItemEvents.modification(event => {

    event.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64
    })

    event.modify('minecraft:snowball', item => {
        item.maxStackSize = 64
    })

})

TotemicEvents.modifyMusicInstruments(event => {
    
    event.modify('totemic:flute', instr => {
        instr.baseOutput = 240
        instr.musicMaximum = 3500
    })
    
    event.modify('totemic:drum', instr => {
        instr.baseOutput = 300
        instr.musicMaximum = 3750
    })

    event.modify('totemic:wind_chime', instr => {
        instr.baseOutput = 200
        instr.musicMaximum = 2000
    })

    event.modify('totemic:jingle_dress', instr => {
        instr.baseOutput = 250
        instr.musicMaximum = 2000
    })

    event.modify('totemic:rattle', instr => {
        instr.baseOutput = 350
        instr.musicMaximum = 3800
    })

    event.modify('totemic:eagle_bone_whistle', instr => {
        instr.baseOutput = 420
        instr.musicMaximum = 4200
    })


})