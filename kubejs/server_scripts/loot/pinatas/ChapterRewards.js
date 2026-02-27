LootJS.lootTables(event => {
    
    //Rewards CCI
    event.create('submerged:pinatas/cc1', LootType.CHEST)
        
        //Coins
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").randomChance(0.5))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:gold_coin"))
        })

                //Ore Pieces
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:copper_ore_piece").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:tin_ore_piece").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:aluminum_ore_piece").setCount([32, 64]))
        })

        //Cloche
        .createPool(pool => {
            pool.addEntry(LootEntry.of("cloche:cloche").setCount([1, 3]))
        })

        //Misc
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:purified_dirt").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:purified_gravel").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:purified_sand").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:purified_stone").setCount([32, 64]))
        })

        //Animal Net - Frog - Guaranteed
        .createPool(pool => {
            pool.addEntry(LootEntry.of('opolisutilities:animal_net[opolisutilities:entity_type="minecraft:frog",opolisutilities:entity_data={AbsorptionAmount:0.0f,Age:0,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Brain:{memories:{"minecraft:long_jump_cooling_down":{value:39}}},CanPickUpLoot:0b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:-1s,ForcedAge:0,HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:10.0f,HurtByTimestamp:0,HurtTime:0s,InLove:0,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],NeoForgeData:{droptimer:0.0d,"naturesaura:time_alive":80},OnGround:1b,PersistenceRequired:0b,PortalCooldown:0,Pos:[8321.5d,160.0d,8156.5d],Rotation:[-111.08461f,-22.179422f],UUID:[I;-1885392892,1003438156,-1150546178,988085205],attributes:[{base:1.0d,id:"minecraft:generic.movement_speed"},{base:0.0d,id:"minecraft:generic.oxygen_bonus"},{base:16.0d,id:"minecraft:generic.follow_range",modifiers:[{amount:-0.02649241505754335d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]}],"neoforge:attachments":{"accessories:inventory_holder":{},"iceandfire:chain_data":{chainedTo:[]},"iceandfire:chicken_data":{timeUntilNextEgg:-1},"iceandfire:misc_data":{loveTicks:0,lungeTicks:0,targetedByScepters:[]},"iceandfire:portal_data":{teleportTick:-1,teleported:0b}},"neoforge:spawn_type":"SPAWN_EGG",variant:"minecraft:temperate","warp_pipes:prevent_warp":0b,"warp_pipes:warp_cooldown":0}]').setCount([1, 2]))
        })

    //Rewards CCII
    event.create('submerged:pinatas/cc2', LootType.CHEST)
        
        //Coins
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([1, 2]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([1, 2]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([1, 2]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([1, 2]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([1, 2]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([1, 2]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([1, 2]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([1, 2]).randomChance(0.5))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:gold_coin").setCount([2, 2]))
        })

        //Ore Pieces
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:zinc_ore_piece").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:lapis_ore_piece").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:iron_ore_piece").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:redstone_ore_piece").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:gold_ore_piece").setCount([32, 64]))
        })

        //Resource Generator
        .createPool(pool => {
            pool.addEntry(LootEntry.of("opolisutilities:resource_generator").setCount([1, 3]))
        })

        //Fluid Generator
        .createPool(pool => {
            pool.addEntry(LootEntry.of("opolisutilities:fluid_generator").setCount([1, 3]))
        })

        //Relics Catalog
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:catalog_relics"))
        })

        //Misc (Garanteed)
        .createPool(pool => {
            pool.addEntry(LootEntry.of("pneumaticcraft:micromissiles"))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("naturesaura:tainted_gold").setCount([8, 24]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("naturesaura:infused_iron").setCount([8, 24]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("mob_grinding_utils:gm_chicken_feed_cursed").setCount([1, 4]))
        })

        //Animal Net - Axolotl - Chance
        .createPool(pool => {
            pool.addEntry(LootEntry.of('opolisutilities:animal_net[opolisutilities:entity_type="minecraft:axolotl",opolisutilities:entity_data={AbsorptionAmount:0.0f,Age:0,Air:5529s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Brain:{memories:{}},CanPickUpLoot:0b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:-1s,ForcedAge:0,FromBucket:0b,HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:14.0f,HurtByTimestamp:0,HurtTime:0s,InLove:0,Invulnerable:0b,LeftHanded:0b,Motion:[-0.002562279393795206d,-0.0784000015258789d,-0.0015791692490941553d],NeoForgeData:{"naturesaura:time_alive":480},OnGround:1b,PersistenceRequired:0b,PortalCooldown:0,Pos:[8317.29395993129d,160.0d,8140.989360098527d],Rotation:[121.647736f,-23.097095f],UUID:[I;1343996253,-2144318366,-2013376063,-1386453098],Variant:3,attributes:[{base:1.0d,id:"minecraft:generic.movement_speed"},{base:0.0d,id:"minecraft:generic.oxygen_bonus"},{base:16.0d,id:"minecraft:generic.follow_range",modifiers:[{amount:0.09322527749508835d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]}],"neoforge:attachments":{"accessories:inventory_holder":{},"iceandfire:chain_data":{chainedTo:[]},"iceandfire:chicken_data":{timeUntilNextEgg:-1},"iceandfire:misc_data":{loveTicks:0,lungeTicks:0,targetedByScepters:[]},"iceandfire:portal_data":{teleportTick:-1,teleported:0b}},"neoforge:spawn_type":"SPAWN_EGG","warp_pipes:prevent_warp":0b,"warp_pipes:warp_cooldown":0}]').randomChance(0.75))
            pool.addEntry(LootEntry.of('opolisutilities:animal_net[opolisutilities:entity_type="minecraft:axolotl",opolisutilities:entity_data={AbsorptionAmount:0.0f,Age:0,Air:5558s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Brain:{memories:{}},CanPickUpLoot:0b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:-1s,ForcedAge:0,FromBucket:0b,HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:14.0f,HurtByTimestamp:0,HurtTime:0s,InLove:0,Invulnerable:0b,LeftHanded:0b,Motion:[-9.026825088438226E-5d,-0.0784000015258789d,9.320803392670297E-4d],NeoForgeData:{"naturesaura:time_alive":440},OnGround:1b,PersistenceRequired:0b,PortalCooldown:0,Pos:[8318.872043437896d,160.0d,8142.246770006032d],Rotation:[5.533783f,-25.726818f],UUID:[I;-1978466590,1492798720,-1959476002,-685552252],Variant:2,attributes:[{base:1.0d,id:"minecraft:generic.movement_speed"},{base:0.0d,id:"minecraft:generic.oxygen_bonus"},{base:16.0d,id:"minecraft:generic.follow_range",modifiers:[{amount:0.09630513870232425d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]}],"neoforge:attachments":{"accessories:inventory_holder":{},"iceandfire:chain_data":{chainedTo:[]},"iceandfire:chicken_data":{timeUntilNextEgg:-1},"iceandfire:misc_data":{loveTicks:0,lungeTicks:0,targetedByScepters:[]},"iceandfire:portal_data":{teleportTick:-1,teleported:0b}},"neoforge:spawn_type":"SPAWN_EGG","warp_pipes:prevent_warp":0b,"warp_pipes:warp_cooldown":0}]').randomChance(0.75))
            pool.addEntry(LootEntry.of('opolisutilities:animal_net[opolisutilities:entity_type="minecraft:axolotl",opolisutilities:entity_data={AbsorptionAmount:0.0f,Age:0,Air:5572s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Brain:{memories:{}},CanPickUpLoot:0b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:-1s,ForcedAge:0,FromBucket:0b,HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:14.0f,HurtByTimestamp:0,HurtTime:0s,InLove:0,Invulnerable:0b,LeftHanded:0b,Motion:[0.0022135879338962216d,-0.0784000015258789d,-0.002039382135631584d],NeoForgeData:{"naturesaura:time_alive":400},OnGround:1b,PersistenceRequired:0b,PortalCooldown:0,Pos:[8319.144062623966d,160.0d,8140.749102448756d],Rotation:[227.34843f,-17.558838f],UUID:[I;547291837,-644988140,-1714562610,-463546245],Variant:1,attributes:[{base:1.0d,id:"minecraft:generic.movement_speed"},{base:0.0d,id:"minecraft:generic.oxygen_bonus"},{base:16.0d,id:"minecraft:generic.follow_range",modifiers:[{amount:0.02246369081260275d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]}],"neoforge:attachments":{"accessories:inventory_holder":{},"iceandfire:chain_data":{chainedTo:[]},"iceandfire:chicken_data":{timeUntilNextEgg:-1},"iceandfire:misc_data":{loveTicks:0,lungeTicks:0,targetedByScepters:[]},"iceandfire:portal_data":{teleportTick:-1,teleported:0b}},"neoforge:spawn_type":"SPAWN_EGG","warp_pipes:prevent_warp":0b,"warp_pipes:warp_cooldown":0}]').randomChance(0.75))
        })


    //Rewards CCIII
    event.create('submerged:pinatas/cc3', LootType.CHEST)
        
        //Coins
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([2, 3]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([2, 3]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([2, 3]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([2, 3]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([2, 3]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([2, 3]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([2, 3]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([2, 3]).randomChance(0.5))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:gold_coin").setCount([3, 3]))
        })

        //Ore Pieces
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:debris_ore_piece").setCount([32, 64]))
        })

        //Star
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:nether_star").setCount([4, 10]))
        })

        //Travel Anchor
        .createPool(pool => {
            pool.addEntry(LootEntry.of("enderio:travel_anchor").setCount([4, 10]))
        })

        //Staff of Travelling
        .createPool(pool => {
            pool.addEntry(LootEntry.of("enderio:staff_of_travelling"))
        })

        //Misc (Garanteed)
        .createPool(pool => {
            pool.addEntry(LootEntry.of("pneumaticcraft:printed_circuit_board").setCount([8, 24]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("enderio:vibrant_capacitor_bank").setCount([8, 24]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:ghast_tear").setCount([8, 24]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("ae2:cell_component_256k").setCount([1, 4]))
        })

        //Misc (Chance)
        .createPool(pool => {
            pool.addEntry(LootEntry.of("enderio:enderios").setCount([2, 6]).randomChance(0.5))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("iceandfire:deathworm_gauntlet_yellow").randomChance(0.25))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("iceandfire:deathworm_gauntlet_red").randomChance(0.25))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("iceandfire:deathworm_gauntlet_white").randomChance(0.25))
        })

        //Animal Net (Chance)
        .createPool(pool => {
            pool.addEntry(LootEntry.of('opolisutilities:animal_net[opolisutilities:entity_type="minecraft:glow_squid",opolisutilities:entity_data={AbsorptionAmount:0.0f,Air:289s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Brain:{memories:{}},CanPickUpLoot:0b,DarkTicksRemaining:0,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:-1s,HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:10.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],NeoForgeData:{},OnGround:1b,PersistenceRequired:0b,PortalCooldown:0,Pos:[8315.5d,160.0d,8142.5d],Rotation:[-169.61476f,0.0f],UUID:[I;-567792774,800867829,-1648606054,-156020065],attributes:[{base:0.7d,id:"minecraft:generic.movement_speed"},{base:0.0d,id:"minecraft:generic.oxygen_bonus"},{base:16.0d,id:"minecraft:generic.follow_range",modifiers:[{amount:-0.04067363243119068d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]}],"neoforge:attachments":{"accessories:inventory_holder":{},"iceandfire:chain_data":{chainedTo:[]},"iceandfire:chicken_data":{timeUntilNextEgg:-1},"iceandfire:misc_data":{loveTicks:0,lungeTicks:0,targetedByScepters:[]},"iceandfire:portal_data":{teleportTick:-1,teleported:0b}},"neoforge:spawn_type":"SPAWN_EGG","warp_pipes:prevent_warp":0b,"warp_pipes:warp_cooldown":0}]').randomChance(0.75))
            pool.addEntry(LootEntry.of('opolisutilities:animal_net[opolisutilities:entity_type="minecraft:squid",opolisutilities:entity_data={AbsorptionAmount:0.0f,Air:265s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Brain:{memories:{}},CanPickUpLoot:0b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:-1s,HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:10.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],NeoForgeData:{},OnGround:1b,PersistenceRequired:0b,PortalCooldown:0,Pos:[8314.5d,160.0d,8141.5d],Rotation:[-106.20453f,0.0f],UUID:[I;-1628405233,137969764,-1660208524,-969234771],attributes:[{base:0.7d,id:"minecraft:generic.movement_speed"},{base:0.0d,id:"minecraft:generic.oxygen_bonus"},{base:16.0d,id:"minecraft:generic.follow_range",modifiers:[{amount:-0.06544072384080059d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]}],"neoforge:attachments":{"accessories:inventory_holder":{},"iceandfire:chain_data":{chainedTo:[]},"iceandfire:chicken_data":{timeUntilNextEgg:-1},"iceandfire:misc_data":{loveTicks:0,lungeTicks:0,targetedByScepters:[]},"iceandfire:portal_data":{teleportTick:-1,teleported:0b}},"neoforge:spawn_type":"SPAWN_EGG","warp_pipes:prevent_warp":0b,"warp_pipes:warp_cooldown":0}]').randomChance(0.75))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of('opolisutilities:animal_net[opolisutilities:entity_type="minecraft:glow_squid",opolisutilities:entity_data={AbsorptionAmount:0.0f,Air:289s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Brain:{memories:{}},CanPickUpLoot:0b,DarkTicksRemaining:0,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:-1s,HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:10.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],NeoForgeData:{},OnGround:1b,PersistenceRequired:0b,PortalCooldown:0,Pos:[8315.5d,160.0d,8142.5d],Rotation:[-169.61476f,0.0f],UUID:[I;-567792774,800867829,-1648606054,-156020065],attributes:[{base:0.7d,id:"minecraft:generic.movement_speed"},{base:0.0d,id:"minecraft:generic.oxygen_bonus"},{base:16.0d,id:"minecraft:generic.follow_range",modifiers:[{amount:-0.04067363243119068d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]}],"neoforge:attachments":{"accessories:inventory_holder":{},"iceandfire:chain_data":{chainedTo:[]},"iceandfire:chicken_data":{timeUntilNextEgg:-1},"iceandfire:misc_data":{loveTicks:0,lungeTicks:0,targetedByScepters:[]},"iceandfire:portal_data":{teleportTick:-1,teleported:0b}},"neoforge:spawn_type":"SPAWN_EGG","warp_pipes:prevent_warp":0b,"warp_pipes:warp_cooldown":0}]').randomChance(0.75))
            pool.addEntry(LootEntry.of('opolisutilities:animal_net[opolisutilities:entity_type="minecraft:squid",opolisutilities:entity_data={AbsorptionAmount:0.0f,Air:265s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Brain:{memories:{}},CanPickUpLoot:0b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:-1s,HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:10.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],NeoForgeData:{},OnGround:1b,PersistenceRequired:0b,PortalCooldown:0,Pos:[8314.5d,160.0d,8141.5d],Rotation:[-106.20453f,0.0f],UUID:[I;-1628405233,137969764,-1660208524,-969234771],attributes:[{base:0.7d,id:"minecraft:generic.movement_speed"},{base:0.0d,id:"minecraft:generic.oxygen_bonus"},{base:16.0d,id:"minecraft:generic.follow_range",modifiers:[{amount:-0.06544072384080059d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]}],"neoforge:attachments":{"accessories:inventory_holder":{},"iceandfire:chain_data":{chainedTo:[]},"iceandfire:chicken_data":{timeUntilNextEgg:-1},"iceandfire:misc_data":{loveTicks:0,lungeTicks:0,targetedByScepters:[]},"iceandfire:portal_data":{teleportTick:-1,teleported:0b}},"neoforge:spawn_type":"SPAWN_EGG","warp_pipes:prevent_warp":0b,"warp_pipes:warp_cooldown":0}]').randomChance(0.75))
        })

    //Rewards CCIV
    event.create('submerged:pinatas/cc4', LootType.CHEST)
        
        //Coins
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([3, 4]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([3, 4]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([3, 4]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([3, 4]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([3, 4]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([3, 4]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([3, 4]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([3, 4]).randomChance(0.5))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:gold_coin").setCount([4, 5]))
        })

        //Ore Pieces
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:osmium_ore_piece").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:lead_ore_piece").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:uranium_ore_piece").setCount([32, 64]))
        })

        //Sculmium
        .createPool(pool => {
            pool.addEntry(LootEntry.of('nanomirai:raw_sculmium').setCount([7, 12]))
        })

        //UU Matter
        .createPool(pool => {
            pool.addEntry(LootEntry.of("mekmm:uu_matter").setCount([4, 10]))
        })

        //Staff of Travelling
        .createPool(pool => {
            pool.addEntry(LootEntry.of("infinitystorage:empty_infinity_drive"))
        })

        //Misc (Garanteed)
        .createPool(pool => {
            pool.addEntry(LootEntry.of("mekanism:pellet_antimatter").setCount([8, 24]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("mekanism:ultimate_control_circuit").setCount([8, 24]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:solclipsium_ingot").setCount([8, 16]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("mekanism:dust_lithium").setCount([8, 16]))
        })

        //Misc (Chance)
        .createPool(pool => {
            pool.addEntry(LootEntry.of('submerged:solclipsium_nugget').setCount([42, 64]).randomChance(0.75))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of('submerged:solclipsium_ingot').setCount([8, 16]).randomChance(0.5))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of('submerged:solclipsium_block').setCount([1, 2]).randomChance(0.25))
        })

        //Animal Net (Chance)
        .createPool(pool => {
            pool.addEntry(LootEntry.of('opolisutilities:animal_net[opolisutilities:entity_type="minecraft:strider",opolisutilities:entity_data={AbsorptionAmount:0.0f,Age:0,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Brain:{memories:{}},CanPickUpLoot:0b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:-1s,ForcedAge:0,HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,InLove:0,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],NeoForgeData:{"naturesaura:time_alive":80},OnGround:1b,PersistenceRequired:0b,PortalCooldown:0,Pos:[8276.5d,160.0d,8192.5d],Rotation:[-148.50507f,0.0f],Saddle:0b,UUID:[I;-1482136812,-1133230683,-2045904136,-289519438],attributes:[{base:0.17499999701976776d,id:"minecraft:generic.movement_speed"},{base:16.0d,id:"minecraft:generic.follow_range",modifiers:[{amount:0.002727652511452722d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]},{base:0.0d,id:"minecraft:generic.oxygen_bonus"}],"neoforge:attachments":{"accessories:inventory_holder":{},"iceandfire:chain_data":{chainedTo:[]},"iceandfire:chicken_data":{timeUntilNextEgg:-1},"iceandfire:misc_data":{loveTicks:0,lungeTicks:0,targetedByScepters:[]},"iceandfire:portal_data":{teleportTick:-1,teleported:0b}},"neoforge:spawn_type":"SPAWN_EGG","warp_pipes:prevent_warp":0b,"warp_pipes:warp_cooldown":0}]').randomChance(0.75))
            pool.addEntry(LootEntry.of('opolisutilities:animal_net[opolisutilities:entity_type="minecraft:sniffer",opolisutilities:entity_data={AbsorptionAmount:0.0f,Age:0,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Brain:{memories:{}},CanPickUpLoot:0b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:-1s,ForcedAge:0,HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:14.0f,HurtByTimestamp:0,HurtTime:0s,InLove:0,Invulnerable:0b,LeftHanded:0b,Motion:[-9.758794300875303E-4d,-0.0784000015258789d,-0.011591978736346173d],NeoForgeData:{droptimer:0.0d,"naturesaura:time_alive":200},OnGround:1b,PersistenceRequired:0b,PortalCooldown:0,Pos:[8275.25532264867d,160.0d,8188.365522657558d],Rotation:[169.49637f,0.0f],UUID:[I;-397423978,2113161335,-2055044206,846563080],attributes:[{base:0.10000000149011612d,id:"minecraft:generic.movement_speed"},{base:16.0d,id:"minecraft:generic.follow_range",modifiers:[{amount:0.009962429271351199d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]},{base:0.0d,id:"minecraft:generic.oxygen_bonus"}],"neoforge:attachments":{"accessories:inventory_holder":{},"iceandfire:chain_data":{chainedTo:[]},"iceandfire:chicken_data":{timeUntilNextEgg:-1},"iceandfire:misc_data":{loveTicks:0,lungeTicks:0,targetedByScepters:[]},"iceandfire:portal_data":{teleportTick:-1,teleported:0b}},"neoforge:spawn_type":"SPAWN_EGG","warp_pipes:prevent_warp":0b,"warp_pipes:warp_cooldown":0}]').randomChance(0.75))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of('opolisutilities:animal_net[opolisutilities:entity_type="minecraft:strider",opolisutilities:entity_data={AbsorptionAmount:0.0f,Age:0,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Brain:{memories:{}},CanPickUpLoot:0b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:-1s,ForcedAge:0,HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,InLove:0,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],NeoForgeData:{"naturesaura:time_alive":80},OnGround:1b,PersistenceRequired:0b,PortalCooldown:0,Pos:[8276.5d,160.0d,8192.5d],Rotation:[-148.50507f,0.0f],Saddle:0b,UUID:[I;-1482136812,-1133230683,-2045904136,-289519438],attributes:[{base:0.17499999701976776d,id:"minecraft:generic.movement_speed"},{base:16.0d,id:"minecraft:generic.follow_range",modifiers:[{amount:0.002727652511452722d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]},{base:0.0d,id:"minecraft:generic.oxygen_bonus"}],"neoforge:attachments":{"accessories:inventory_holder":{},"iceandfire:chain_data":{chainedTo:[]},"iceandfire:chicken_data":{timeUntilNextEgg:-1},"iceandfire:misc_data":{loveTicks:0,lungeTicks:0,targetedByScepters:[]},"iceandfire:portal_data":{teleportTick:-1,teleported:0b}},"neoforge:spawn_type":"SPAWN_EGG","warp_pipes:prevent_warp":0b,"warp_pipes:warp_cooldown":0}]').randomChance(0.75))
            pool.addEntry(LootEntry.of('opolisutilities:animal_net[opolisutilities:entity_type="minecraft:sniffer",opolisutilities:entity_data={AbsorptionAmount:0.0f,Age:0,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Brain:{memories:{}},CanPickUpLoot:0b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:-1s,ForcedAge:0,HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:14.0f,HurtByTimestamp:0,HurtTime:0s,InLove:0,Invulnerable:0b,LeftHanded:0b,Motion:[-9.758794300875303E-4d,-0.0784000015258789d,-0.011591978736346173d],NeoForgeData:{droptimer:0.0d,"naturesaura:time_alive":200},OnGround:1b,PersistenceRequired:0b,PortalCooldown:0,Pos:[8275.25532264867d,160.0d,8188.365522657558d],Rotation:[169.49637f,0.0f],UUID:[I;-397423978,2113161335,-2055044206,846563080],attributes:[{base:0.10000000149011612d,id:"minecraft:generic.movement_speed"},{base:16.0d,id:"minecraft:generic.follow_range",modifiers:[{amount:0.009962429271351199d,id:"minecraft:random_spawn_bonus",operation:"add_multiplied_base"}]},{base:0.0d,id:"minecraft:generic.oxygen_bonus"}],"neoforge:attachments":{"accessories:inventory_holder":{},"iceandfire:chain_data":{chainedTo:[]},"iceandfire:chicken_data":{timeUntilNextEgg:-1},"iceandfire:misc_data":{loveTicks:0,lungeTicks:0,targetedByScepters:[]},"iceandfire:portal_data":{teleportTick:-1,teleported:0b}},"neoforge:spawn_type":"SPAWN_EGG","warp_pipes:prevent_warp":0b,"warp_pipes:warp_cooldown":0}]').randomChance(0.75))
        })
   
   
    //Rewards CCV
    event.create('submerged:pinatas/cc5', LootType.CHEST)
        
        //Coins
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([4, 5]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([4, 5]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([4, 5]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([4, 5]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([4, 5]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([4, 5]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([4, 5]).randomChance(0.5))
            pool.addEntry(LootEntry.of("shops:copper_coin").setCount([4, 5]).randomChance(0.5))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("shops:gold_coin").setCount([5, 6]))
        })

        //Ore Pieces
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:platinum_ore_piece").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:iridium_ore_piece").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("strainers:nickel_ore_piece").setCount([32, 64]))
        })

        //Gravel
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:icy_gravel").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:fiery_gravel").setCount([32, 64]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("submerged:stormy_gravel").setCount([32, 64]))
        })


        //Triarchium
        .createPool(pool => {
            pool.addEntry(LootEntry.of('submerged:triarchium_gem').setCount([7, 12]))
        })

        //Triarchium
        .createPool(pool => {
            pool.addEntry(LootEntry.of('submerged:triarchium_ingot').setCount([7, 12]))
        })

        //Misc (Garanteed)
        .createPool(pool => {
            pool.addEntry(LootEntry.of("mekanism:pellet_antimatter").setCount([8, 24]))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("mekanism:ultimate_control_circuit").setCount([8, 24]))
        })

        //Misc (Chance)
        .createPool(pool => {
            pool.addEntry(LootEntry.of('submerged:solclipsium_nugget').setCount([42, 64]).randomChance(0.75))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of('submerged:solclipsium_ingot').setCount([8, 16]).randomChance(0.5))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of('submerged:solclipsium_block').setCount([1, 2]).randomChance(0.25))
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of('compressedblocks:c8_cobblestone').setCount([1, 2]).randomChance(0.25))
        })


})