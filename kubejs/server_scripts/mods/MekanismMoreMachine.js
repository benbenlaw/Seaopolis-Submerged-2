ServerEvents.generateData('after_mods', event => {

    event.json('mekmm:data_maps/item/item_replicator', {
        replace: false,
        values: {
            'compressedblocks:c5_cobblestone': { uu_amount: 250 },
            'draconicevolution:large_chaos_frag': { uu_amount: 1000 },
            'draconicevolution:dragon_heart': { uu_amount: 100 },
            'iceandfire:ice_dragon_heart': { uu_amount: 100 },
            'iceandfire:lightning_dragon_heart': { uu_amount: 100 },
            'iceandfire:fire_dragon_heart': { uu_amount: 100 },
            'submerged:essence_of_the_sea': { uu_amount: 50 },
            'iceandfire:dragonscales_red': { uu_amount: 1 },
            'iceandfire:dragonscales_white': { uu_amount: 1 },
            'iceandfire:dragonscales_green': { uu_amount: 1 },
            'iceandfire:dragonscales_bronze': { uu_amount: 1 },
            'iceandfire:dragonscales_gray': { uu_amount: 1 },
            'iceandfire:dragonscales_blue': { uu_amount: 1 },
            'iceandfire:dragonscales_sapphire': { uu_amount: 1 },
            'iceandfire:dragonscales_silver': { uu_amount: 1 },
            'iceandfire:dragonscales_electric': { uu_amount: 1 },
            'iceandfire:dragonscales_amethyst': { uu_amount: 1 },
            'iceandfire:dragonscales_copper': { uu_amount: 1 },
            'iceandfire:dragonscales_black': { uu_amount: 1 },
            'minecraft:dragon_egg': { uu_amount: 125 },
            'iceandfire:dragon_bone': { uu_amount: 5 }
        }
    });

    event.json('mekmm:data_maps/fluid/fluid_replicator', {
        replace: false,
        values: {
            'submerged:molten_solclipsium': { input_amount: 1, uu_amount: 1, output_amount: 1 },
            'casting:molten_soularium': { input_amount: 1, uu_amount: 1, output_amount: 1 }
        }
    });

    event.json('mekmm:data_maps/mekanism/chemical/chemical_replicator', {
        replace: false,
        values: {
            'mekmm:unstable_dimensional_gas': { input_amount: 1, uu_amount: 5, output_amount: 1 }
        }
    });

});
