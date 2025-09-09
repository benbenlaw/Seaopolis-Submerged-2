//Ceramic Buckets

ServerEvents.recipes(event => {

    //Water Bucket
    event.shaped('ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]', [' A ', 'ABA', ' A '], {
        A: 'resourcefish:caviar[resourcefish:fish_type="resourcefish:water"]',
        B: 'ceramicbucket:ceramic_bucket',
    }).id('submerged:ceramic_bucket_water')

    //Lava Bucket
    event.shaped('ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:lava"}]', [' A ', 'ABA', ' A '], {
        A: 'resourcefish:caviar[resourcefish:fish_type="resourcefish:lava"]',
        B: 'ceramicbucket:ceramic_bucket',
    }).id('submerged:ceramic_bucket_lava')

    //Bucket
    event.shaped('ceramicbucket:ceramic_bucket', ['A A', ' A '], {
        A: '#minecraft:terracotta',
    }).id('submerged:ceramic_bucket')

})
