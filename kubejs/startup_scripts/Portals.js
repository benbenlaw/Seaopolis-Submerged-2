//Porttals
PortalEvents.register(event => {

  //Overworld -> Atlantis 
  event.create()
    .returnDim('minecraft:overworld', true)
    .setDestination('atlantis:atlantis')
    .frameBlock('submerged:active_atlantis_portal_frame') 
    .lightWithItem('atlantis:orb_of_atlantis')
    .portalTexture('nether')
    .flatPortal()
    .tint(0x087BEB)

})