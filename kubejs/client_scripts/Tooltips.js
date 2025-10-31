//Tooltips
ItemEvents.modifyTooltips(event => {

    event.add('#submerged:duck_skins',[
        Text.of('§bChange the appearance of your duck! Use on Tamed Ducks.'),
        Text.of('§bDucks can be tamed with Seeds.')
    ])

    event.add('cute_companions_ducks:duck_spawn_egg',[
        Text.of('§bUse Skins from the Shop to change the appearance of your duck!'),
        Text.of('§bDucks can be tamed with Seeds.')
    ])

    event.modify('ars_nouveau:source_gem', tooltip => {
        // Remove block title
        tooltip.removeLine(1)
        // Insert text at top of list
    })
})