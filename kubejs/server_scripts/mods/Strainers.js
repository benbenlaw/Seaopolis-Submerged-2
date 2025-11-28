//Strainers

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: /strainers:strainer\/purified_gravel/})
    event.remove({id: /strainers:strainer\/soul_soil/})
    event.remove({id: /strainers:strainer\/purified_soul_sand/})
    event.remove({id: 'strainers:strainer/purified_sand/prismarine_crystals'})
    event.remove({id: 'strainers:strainer/purified_sand/prismarine_shard'})
    event.remove({id: 'strainers:strainer/sculk/echo_shard'})
    
    //Replace Input
    event.replaceInput({id: 'strainers:speed_upgrade_1'}, 'minecraft:iron_block', 'minecraft:lapis_block')

    //Compactor
    event.shaped('strainers:compactor', ['AAA', 'ABA', 'AAA'], {
        A: 'strainers:stone_pebble',
        B: '#c:player_workstations/crafting_tables'
    }).id('strainers:compactor')

    //Force Nuggets
    strainerAuto('forcecraft:force_leaves', 'minecraft:water', 'forcecraft:force_nugget', 0.5, 0.1, 3, 10)
    strainerAuto('forcecraft:force_leaves', 'minecraft:water', '4x forcecraft:force_nugget', 0.1, 0.1, 3, 10)

    //Ice and Snow
    strainerAuto('submerged:living_gravel', 'minecraft:powder_snow', 'minecraft:snowball', 0.25, 0.05, 1, 10)
    strainerAuto('submerged:living_gravel', 'minecraft:powder_snow', 'submerged:ice_ball', 0.25, 0.05, 1, 10)
    strainerAuto('minecraft:cookie', 'minecraft:powder_snow', 'forcecraft:snow_cookie', 0.25, 0.05, 1, 10)

    //Corrupted Prismarine Crystal
    strainerAuto('minecraft:prismarine_crystals', 'submerged:salt_water', 'submerged:corrupted_prismarine_crystal', 0.4, 0.05, 4, 10);

    //Totemic Infused Gravel
    strainerAuto('submerged:refined_gravel', 'submerged:totemic_infused_water', 'submerged:totemic_infused_gravel', 0.8, 0.05, 1, 10);

    //Prismarine -> Coral
    strainerAuto('minecraft:prismarine', 'submerged:salt_water', 'minecraft:brain_coral_block', 0.2, 0.05, 1, 10);
    strainerAuto('minecraft:prismarine', 'submerged:salt_water', 'minecraft:bubble_coral_block', 0.2, 0.05, 1, 10);
    strainerAuto('minecraft:prismarine', 'submerged:salt_water', 'minecraft:fire_coral_block', 0.2, 0.05, 1, 10);
    strainerAuto('minecraft:prismarine', 'submerged:salt_water', 'minecraft:horn_coral_block', 0.2, 0.05, 1, 10);
    strainerAuto('minecraft:prismarine', 'submerged:salt_water', 'minecraft:tube_coral_block', 0.2, 0.05, 1, 10);

    //Coral -> Coral Fans
    strainerAuto('#submerged:coral_blocks', 'minecraft:water', 'minecraft:brain_coral_fan', 0.2, 0.05, 1, 10);
    strainerAuto('#submerged:coral_blocks', 'minecraft:water', 'minecraft:bubble_coral_fan', 0.2, 0.05, 1, 10);
    strainerAuto('#submerged:coral_blocks', 'minecraft:water', 'minecraft:fire_coral_fan', 0.2, 0.05, 1, 10);
    strainerAuto('#submerged:coral_blocks', 'minecraft:water', 'minecraft:horn_coral_fan', 0.2, 0.05, 1, 10);
    strainerAuto('#submerged:coral_blocks', 'minecraft:water', 'minecraft:tube_coral_fan', 0.2, 0.05, 1, 10);

    //Coral Fans -> Coral
    strainerAuto('#submerged:coral_blocks', 'minecraft:water', 'minecraft:brain_coral', 0.2, 0.05, 1, 10);
    strainerAuto('#submerged:coral_blocks', 'minecraft:water', 'minecraft:bubble_coral', 0.2, 0.05, 1, 10);
    strainerAuto('#submerged:coral_blocks', 'minecraft:water', 'minecraft:fire_coral', 0.2, 0.05, 1, 10);
    strainerAuto('#submerged:coral_blocks', 'minecraft:water', 'minecraft:horn_coral', 0.2, 0.05, 1, 10);
    strainerAuto('#submerged:coral_blocks', 'minecraft:water', 'minecraft:tube_coral', 0.2, 0.05, 1, 10);

    //Purified Soul Sand -> Nether Wart, Crimson Fungus, Warped Fungus
    strainerAuto('strainers:purified_soul_sand', 'minecraft:water', 'minecraft:nether_wart', 0.2, 0.05, 6, 10);
    strainerAuto('strainers:purified_soul_sand', 'minecraft:water', 'minecraft:crimson_fungus', 0.2, 0.05, 6, 10);
    strainerAuto('strainers:purified_soul_sand', 'minecraft:water', 'minecraft:warped_fungus', 0.2, 0.05, 6, 10); 

    //Ruby, Sapphire, Peridot
    strainerAuto('submerged:fiery_gravel', 'minecraft:water', 'alltheores:ruby', 0.05, 0.01, 6, 10);
    strainerAuto('submerged:icy_gravel', 'minecraft:water', 'alltheores:sapphire', 0.05, 0.01, 6, 10);
    strainerAuto('submerged:stormy_gravel', 'minecraft:water', 'alltheores:peridot', 0.05, 0.01, 6, 10);

    //Dragon Scales
    strainerAuto('submerged:teary_gravel', 'submerged:dragons_breath', 'iceandfire:dragonscales_red', 0.4, 0.05, 8, 10);
    strainerAuto('submerged:teary_gravel', 'submerged:dragons_breath', 'iceandfire:dragonscales_white', 0.4, 0.05, 8, 10);
    strainerAuto('submerged:teary_gravel', 'submerged:dragons_breath', 'iceandfire:dragonscales_green', 0.4, 0.05, 8, 10);
    strainerAuto('submerged:teary_gravel', 'submerged:dragons_breath', 'iceandfire:dragonscales_bronze', 0.4, 0.05, 8, 10);
    strainerAuto('submerged:teary_gravel', 'submerged:dragons_breath', 'iceandfire:dragonscales_gray', 0.4, 0.05, 8, 10);
    strainerAuto('submerged:teary_gravel', 'submerged:dragons_breath', 'iceandfire:dragonscales_blue', 0.4, 0.05, 8, 10);
    strainerAuto('submerged:teary_gravel', 'submerged:dragons_breath', 'iceandfire:dragonscales_sapphire', 0.4, 0.05, 8, 10);
    strainerAuto('submerged:teary_gravel', 'submerged:dragons_breath', 'iceandfire:dragonscales_silver', 0.4, 0.05, 8, 10);
    strainerAuto('submerged:teary_gravel', 'submerged:dragons_breath', 'iceandfire:dragonscales_electric', 0.4, 0.05, 8, 10);
    strainerAuto('submerged:teary_gravel', 'submerged:dragons_breath', 'iceandfire:dragonscales_amethyst', 0.4, 0.05, 8, 10);
    strainerAuto('submerged:teary_gravel', 'submerged:dragons_breath', 'iceandfire:dragonscales_copper', 0.4, 0.05, 8, 10);
    strainerAuto('submerged:teary_gravel', 'submerged:dragons_breath', 'iceandfire:dragonscales_black', 0.4, 0.05, 8, 10);
    strainerAuto('submerged:teary_gravel', 'submerged:dragons_breath', '2x iceandfire:dragonbone', 0.5, 0.05, 6, 10);

    //Gravel Drops
    const gravelDrops = {
        coal: ['minecraft:water', 'strainers:coal_ore_piece', 0.2, 0.05, 1, 10],
        tin: ['minecraft:water', 'strainers:tin_ore_piece', 0.2, 0.05, 1, 10],
        copper: ['minecraft:water', 'strainers:copper_ore_piece', 0.2, 0.05, 1, 10],    
        aluminum: ['minecraft:water', 'strainers:aluminum_ore_piece', 0.2, 0.05, 1, 10],
        iron: ['minecraft:water', 'strainers:iron_ore_piece', 0.5, 0.05, 4, 10],
        zinc: ['minecraft:water', 'strainers:zinc_ore_piece', 0.2, 0.05, 4, 10],
        lapis: ['minecraft:water', 'strainers:lapis_ore_piece', 0.2, 0.05, 4, 10],
        prismarine_crystal: ['minecraft:water', 'minecraft:prismarine_crystals', 0.1, 0.05, 5, 10],
        prismarine_shard: ['minecraft:water', 'minecraft:prismarine_shard', 0.15, 0.05, 5, 10],
        salt: ['minecraft:water', 'alltheores:salt', 0.05, 0.05, 5, 10],
        redstone: ['minecraft:water', 'strainers:redstone_ore_piece', 0.25, 0.05, 5, 10],
        amethyst: ['minecraft:water', 'minecraft:amethyst_shard', 0.15, 0.05, 4, 10],
        scute: ['minecraft:water', 'minecraft:turtle_scute', 0.15, 0.05, 6, 10],
        gold: ['minecraft:water', 'strainers:gold_ore_piece', 0.2, 0.05, 6, 10],
        blaze: ['minecraft:water', 'minecraft:blaze_powder', 0.1, 0.05, 6, 10],
        certrusDust: ['minecraft:water', 'ae2:certus_quartz_dust', 0.2, 0.05, 6, 10],
        quartzDust: ['minecraft:water', 'mekanism:dust_quartz', 0.2, 0.05, 6, 10],
        skyDust: ['minecraft:water', 'ae2:sky_dust', 0.05, 0.05, 6, 10],
        diamond: ['minecraft:water', 'strainers:diamond_ore_piece', 0.05, 0.05, 6, 10],
        emerald: ['minecraft:water', 'strainers:emerald_ore_piece', 0.05, 0.05, 6, 10],
        debris: ['minecraft:water', 'strainers:debris_ore_piece', 0.05, 0.05, 7, 10],
        echoShard : ['minecraft:water', 'minecraft:echo_shard', 0.05, 0.05, 7, 10],
        osmium: ['minecraft:water', 'strainers:osmium_ore_piece', 0.05, 0.05, 6, 10],
        lead: ['minecraft:water', 'strainers:lead_ore_piece', 0.05, 0.05, 6, 10],
        uranium: ['minecraft:water', 'strainers:uranium_ore_piece', 0.05, 0.05, 7, 10],
        fluorite: ['minecraft:water', 'alltheores:fluorite_dust', 0.1, 0.05, 5, 10]
    }



    //Purified Gravel -> Coal Ore Piece
    addStrainerGravelDrop('strainers:purified_gravel', [
        gravelDrops.coal
    ]);

    //Refined Gravel -> Tin, Copper, Aluminum
    addStrainerGravelDrop('submerged:refined_gravel', [
        gravelDrops.coal, 
        gravelDrops.tin, gravelDrops.copper, gravelDrops.aluminum
    ]);

    //Totemic Infused Gravel -> Iron, Zinc, Lapis
    addStrainerGravelDrop('submerged:totemic_infused_gravel', [
        gravelDrops.coal,
        gravelDrops.tin, gravelDrops.copper, gravelDrops.aluminum,
        gravelDrops.iron, gravelDrops.zinc, gravelDrops.lapis
    ]);

    //Assembled Gravel -> Prismarine Crystals, Prismarine Shard, Salt
    addStrainerGravelDrop('submerged:assembled_gravel', [
        gravelDrops.coal,
        gravelDrops.tin, gravelDrops.copper, gravelDrops.aluminum,
        gravelDrops.iron, gravelDrops.zinc, gravelDrops.lapis,
        gravelDrops.prismarine_crystal, gravelDrops.prismarine_shard, gravelDrops.salt
    ]);

    //Living Gravel -> Redstone, Amethyst
    addStrainerGravelDrop('submerged:living_gravel', [
        gravelDrops.coal,
        gravelDrops.tin, gravelDrops.copper, gravelDrops.aluminum,
        gravelDrops.iron, gravelDrops.zinc, gravelDrops.lapis,
        gravelDrops.prismarine_crystal, gravelDrops.prismarine_shard, gravelDrops.salt,
        gravelDrops.redstone, gravelDrops.amethyst, gravelDrops.scute
    ]);

    //Nether Gravel -> Gold, Blaze
    addStrainerGravelDrop('submerged:nether_gravel', [
        gravelDrops.coal,
        gravelDrops.tin, gravelDrops.copper, gravelDrops.aluminum,
        gravelDrops.iron, gravelDrops.zinc, gravelDrops.lapis,
        gravelDrops.prismarine_crystal, gravelDrops.prismarine_shard, gravelDrops.salt,
        gravelDrops.redstone, gravelDrops.amethyst, gravelDrops.scute,
        gravelDrops.gold, gravelDrops.blaze
    ]);

    //Charged Gravel -> Certus Dust, Quartz Dust, Sky Dust
    addStrainerGravelDrop('submerged:charged_gravel', [
        gravelDrops.coal,
        gravelDrops.tin, gravelDrops.copper, gravelDrops.aluminum,
        gravelDrops.iron, gravelDrops.zinc, gravelDrops.lapis,
        gravelDrops.prismarine_crystal, gravelDrops.prismarine_shard, gravelDrops.salt,
        gravelDrops.redstone, gravelDrops.amethyst, gravelDrops.scute,
        gravelDrops.gold, gravelDrops.blaze,
        gravelDrops.certrusDust, gravelDrops.quartzDust, gravelDrops.skyDust
    ]);

    //Matter Gravel -> Diamond, Emerald
    addStrainerGravelDrop('submerged:matter_gravel', [
        gravelDrops.coal,
        gravelDrops.tin, gravelDrops.copper, gravelDrops.aluminum,
        gravelDrops.iron, gravelDrops.zinc, gravelDrops.lapis,
        gravelDrops.prismarine_crystal, gravelDrops.prismarine_shard, gravelDrops.salt,
        gravelDrops.redstone, gravelDrops.amethyst, gravelDrops.scute,
        gravelDrops.gold, gravelDrops.blaze,
        gravelDrops.certrusDust, gravelDrops.quartzDust, gravelDrops.skyDust,
        gravelDrops.diamond, gravelDrops.emerald
    ]);

    //Ancient Gravel -> Ancient Debris
    addStrainerGravelDrop('submerged:ancient_gravel', [
        gravelDrops.coal,
        gravelDrops.tin, gravelDrops.copper, gravelDrops.aluminum,
        gravelDrops.iron, gravelDrops.zinc, gravelDrops.lapis,
        gravelDrops.prismarine_crystal, gravelDrops.prismarine_shard, gravelDrops.salt,
        gravelDrops.redstone, gravelDrops.amethyst, gravelDrops.scute,
        gravelDrops.gold, gravelDrops.blaze,
        gravelDrops.certrusDust, gravelDrops.quartzDust, gravelDrops.skyDust,
        gravelDrops.diamond, gravelDrops.emerald,
        gravelDrops.debris
    ]);

    //Teary Gravel -> Echo Shard, Osmium, Lead
    addStrainerGravelDrop('submerged:teary_gravel', [
        gravelDrops.coal,
        gravelDrops.tin, gravelDrops.copper, gravelDrops.aluminum,
        gravelDrops.iron, gravelDrops.zinc, gravelDrops.lapis,
        gravelDrops.prismarine_crystal, gravelDrops.prismarine_shard, gravelDrops.salt,
        gravelDrops.redstone, gravelDrops.amethyst, gravelDrops.scute,
        gravelDrops.gold, gravelDrops.blaze,
        gravelDrops.certrusDust, gravelDrops.quartzDust, gravelDrops.skyDust,
        gravelDrops.diamond, gravelDrops.emerald,
        gravelDrops.debris,
        gravelDrops.echoShard, gravelDrops.osmium, gravelDrops.lead
    ]);

    //Toxic Gravel -> Uranium
    addStrainerGravelDrop('submerged:toxic_gravel', [
        gravelDrops.coal,
        gravelDrops.tin, gravelDrops.copper, gravelDrops.aluminum,
        gravelDrops.iron, gravelDrops.zinc, gravelDrops.lapis,
        gravelDrops.prismarine_crystal, gravelDrops.prismarine_shard, gravelDrops.salt,
        gravelDrops.redstone, gravelDrops.amethyst, gravelDrops.scute,
        gravelDrops.gold, gravelDrops.blaze,
        gravelDrops.certrusDust, gravelDrops.quartzDust, gravelDrops.skyDust,
        gravelDrops.diamond, gravelDrops.emerald,
        gravelDrops.debris,
        gravelDrops.echoShard, gravelDrops.osmium, gravelDrops.lead,
        gravelDrops.uranium, gravelDrops.fluorite
    ]);

    //Tiered Gravel Recipes
    function addStrainerGravelDrop(input, outputs) {
        outputs.forEach(drop => {
            strainerAuto(input, drop[0], drop[1], drop[2], drop[3], drop[4], drop[5]);
        });
    }

    //Auto Strainer Recipes
    colors.forEach(color => {
        strainerAuto(`colors:${color}_leaves`, 'minecraft:water', `colors:${color}_apple`, 0.2, 0.05, 1, 10);
    })

    //Auto Strainer Tier Recipes
    function strainerAuto(input, fluid, item, baseChance, addChance, minTier, maxTier) {
        let results = [];
        for (let tier = minTier; tier <= maxTier; tier++) {
            let chance = baseChance + (tier - minTier) * addChance;
            results.push([item, chance, `#strainers:tier_${tier}_meshes`]);
        }
        return event.recipes.strainers.strainer(Ingredient.of(input), fluid, results);
    }
})
