//Ceramic Buckets

ServerEvents.recipes(event => {

    //Bucket
    event.shaped('ceramicbucket:ceramic_bucket', ['A A', ' A '], {
        A: '#minecraft:terracotta',
    }).id('submerged:ceramic_bucket')

})
