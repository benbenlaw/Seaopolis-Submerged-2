const colors = [
    "red", "green", "blue", "yellow", "purple", "cyan", "white",
    "orange", "magenta", "light_blue", "lime", "pink", "gray",
    "light_gray", "black", "brown"
];

const woodRoots = [
    "plank", "log", "wood", "stripped_log", "stripped_wood"
];

const bambooRoots = [
    "bamboo", "stripped_bamboo"
];

const stoneRoots = [
    "stone", "braid", "polished", "tile", "prismarine", "dark_prismarine",
    "cracked_stone", "brick", "cobblestone", "marble", "chaotic", "mosaic",
    "triple", "encased", "road", "asteroid"
];

const typeGroups = {
    "dirt": "dirt",
    "grass_block": "grass_block",
    "crafting_table": "crafting_table",
    "tall_grass": "tall_grass",
    "short_grass": "short_grass",
    "poppy": "poppy",
    "dandelion": "dandelion",
    "leaves": "leaves",
    "sapling": "sapling",
    "apple": "apple",
    "spray_can": "spray_can"
};

/*
function formatName(str) {
    return str.split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
*/

RecipeViewerEvents.groupEntries('item', event => {

    // 1. Group by Colors
    colors.forEach(color => {

        let woodFilters = woodRoots.map(root => {
            return { itemNamespace: 'colors', itemPathStartsWith: `${color}_${root}` };
        });
        event.group(
            woodFilters, 
            `contained:colors_${color}_wood`, 
            Text.translate('group.colors.format', Text.translate(`color.minecraft.${color}`), Text.translate('group.colors.material.wood'))
        );

        let bambooFilters = bambooRoots.map(root => {
            return { itemNamespace: 'colors', itemPathStartsWith: `${color}_${root}` };
        });
        event.group(
            bambooFilters, 
            `contained:colors_${color}_bamboo`, 
            Text.translate('group.colors.format', Text.translate(`color.minecraft.${color}`), Text.translate('group.colors.material.bamboo'))
        );

        let stoneFilters = stoneRoots.map(root => {
            return { itemNamespace: 'colors', itemPathStartsWith: `${color}_${root}` };
        });
        event.group(
            stoneFilters, 
            `contained:colors_${color}_stone`, 
            Text.translate('group.colors.format', Text.translate(`color.minecraft.${color}`), Text.translate('group.colors.material.stone'))
        );

    });

    // 2. Group by Types
    Object.keys(typeGroups).forEach(typeSuffix => {
        event.group(
            { itemNamespace: 'colors', itemPathEndsWith: typeSuffix },

            `contained:colors_type_${typeSuffix}`,

            Text.translate(`group.colors.type.${typeGroups[typeSuffix]}`)
        );
    });

});