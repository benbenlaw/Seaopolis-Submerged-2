//Bedrock Breaker

ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({id: 'bedrock_breaker:bedrock_breaker'}, 'minecraft:netherite_ingot', 'submerged:cobblestone_ingot')
})
