//Tooltips
ItemEvents.modifyTooltips(event => {

    event.add('#submerged:duck_skins',[
        Text.translate('tooltip.submerged.duck_skins_1'),
        Text.translate('tooltip.submerged.duck_skins_2')
    ])

    event.add('cute_companions_ducks:duck_spawn_egg',[
        Text.translate('tooltip.submerged.duck_spawn_egg_1'),
        Text.translate('tooltip.submerged.duck_spawn_egg_2')
    ])

    event.modify('ars_nouveau:source_gem', tooltip => {
        // Remove block title
        tooltip.removeLine(1)
        // Insert text at top of list
    })

    
    event.add('opolisutilities:resource_generator',[
        Text.translate('tooltip.submerged.resource_generator_1'),
    ])
    
    event.add('opolisutilities:fluid_generator',[
        Text.translate('tooltip.submerged.fluid_generator_1'),
    ])

    event.add('submerged:catalog_relics',[
        Text.translate('tooltip.submerged.catalog_relics_1'),
    ])

    event.add('minecraft:netherite_upgrade_smithing_template',[
        Text.translate('tooltip.submerged.netherite_upgrade_smithing_template_1'),
    ])
})
