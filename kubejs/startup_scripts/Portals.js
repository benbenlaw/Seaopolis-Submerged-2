//Portals

PortalEvents.register(event => {

    event.create()
    .frameBlock('submerged:nether_portal_frame')
    .setDestination('minecraft:the_nether')
    .lightWithItem('minecraft:flint')
    .returnDim('minecraft:overworld')
    .flatPortal()
    .forcedSize(3,3)

})