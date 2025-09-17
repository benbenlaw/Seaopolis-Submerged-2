
// Color to Interger Color
const dyeColors = {
    red: 11743532,
    orange: 15435844,
    yellow: 15790320,
    lime: 4312372,
    green: 3887386,
    cyan: 2651799,
    light_blue: 3949738,
    blue: 6719955,
    purple: 8073150,
    magenta: 14516874,
    pink: 14188952,
    brown: 5320730,
    gray: 4408131,
    light_gray: 11250603,
    black: 0,
    white: 15790320
};

// Loots
const flareData = {};
colors.forEach(color => {
    flareData[`submerged:${color}_flare`] = {
        color: dyeColors[color],
        loot: [
            `colors:${color}_sapling`,  
            `colors:${color}_dirt`,     
            `opolisutilities:sapling_grower`  
        ]
    };
});

BlockEvents.rightClicked(event => {
    const itemId = event.getItem().id;
    const data = flareData[itemId];
    if (!data) return;

    const pos = event.getHitResult().getBlockPos();
    const x = pos.getX();
    const y = pos.getY();
    const z = pos.getZ();

    // Launch firework 
    event.server.runCommandSilent(`summon firework_rocket ${x} ${y + 1} ${z} {LifeTime:60,FireworksItem:{id:firework_rocket,count:1,components:{fireworks:{flight_duration:3,explosions:[{shape:"large_ball",has_twinkle:0,has_trail:1,colors:[I;${data.color}],fade_colors:[I;${data.color}]}]}}}}`)
    event.getItem().shrink(1);

    const targetSlots = [4, 13, 22];
    const itemsString = data.loot
    .map((lootItem, index) => `{Slot:${targetSlots[index]},id:"${lootItem}",Count:1b}`)
    .join(",");

    // Schedule loot drop
    event.server.scheduleInTicks(100, () => {
        event.entity.tell(`Loot Incoming at ${x} ${y} ${z}`);
        event.server.runCommandSilent(`summon falling_block ${x} ${y + 100} ${z} {BlockState:{Name:"minecraft:barrel"},Time:1,TileEntityData:{CustomName:'{"text":"Supply Crate"}',Items:[${itemsString}]}}`)
        event.entity.tell("Loot Spawned");
    })
})
