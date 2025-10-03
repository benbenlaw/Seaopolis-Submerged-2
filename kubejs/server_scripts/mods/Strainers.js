//Strainers

ServerEvents.recipes(event => {

    //Remove
    event.remove({id: /strainers:strainer\/purified_gravel/})
    event.remove({id: 'strainers:strainer/purified_sand/prismarine_crystals'})
    event.remove({id: 'strainers:strainer/purified_sand/prismarine_shard'})
    event.remove({id: 'strainers:strainer/purified_soul_sand/debris_ore_piece'})
    event.remove({id: 'strainers:strainer/purified_soul_sand/quartz_ore_piece'})
    
    //Replace Input
    event.replaceInput({id: 'strainers:speed_upgrade_1'}, 'minecraft:iron_block', 'minecraft:lapis_block')

    //Compactor
    event.shaped('strainers:compactor', ['AAA', 'ABA', 'AAA'], {
        A: 'strainers:stone_pebble',
        B: '#c:player_workstations/crafting_tables'
    }).id('strainers:compactor')

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


    //Ancient Gravel -> Ancient Debris
    strainerAuto('submerged:ancient_gravel', 'minecraft:water', 'strainers:debris_ore_piece', 0.2, 0.05, 7, 10);

    //Charged Sand -> Certus, Quartz
    strainerAuto('submerged:charged_sand', 'minecraft:water', 'ae2:certus_quartz_dust', 0.35, 0.05, 6, 10);
    strainerAuto('submerged:charged_sand', 'minecraft:water', 'mekanism:dust_quartz', 0.35, 0.05, 6, 10);
    strainerAuto('submerged:charged_sand', 'minecraft:water', 'ae2:sky_dust', 0.05, 0.05, 6, 10);

    //Purifed Soul Sand -> Gold Ore Piece
    strainerAuto('strainers:purified_soul_sand', 'minecraft:water', 'strainers:gold_ore_piece', 0.2, 0.05, 6, 10);


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
        scute: ['minecraft:water', 'minecraft:turtle_scute', 0.15, 0.05, 6, 10]
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
