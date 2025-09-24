//RF Storage
ServerEvents.recipes(event => {
    
    //Modular Storage
    event.shaped('rftoolsstorage:modular_storage', ['ABA', 'B B', 'ABA'], {
        A: 'minecraft:lapis_lazuli',
        B: '#c:chests/wooden'
    }).id('rftoolsstorage:modular_storage')

    //Stroage Module 0
    event.shaped('rftoolsstorage:storage_module0', [' A ', 'ABA', ' A '], {
        A: 'minecraft:lapis_lazuli',
        B: '#c:chests/wooden'
    }).id('rftoolsstorage:storage_module0')

    //Stroage Module 1
    event.custom({
        "type": "mcjtylib:copy_components",
        "recipe": {
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
            "A": {"tag": "c:ingots/iron"},
            "B": {"item": "rftoolsstorage:storage_module0"}
            },
            "pattern": [
            " A ",
            "ABA",
            " A "
            ],
            "result": {
            "count": 1,
            "id": "rftoolsstorage:storage_module1"
            }
        }
    }).id('rftoolsstorage:storage_module1')

    //Storage Module 2
    event.custom({
        "type": "mcjtylib:copy_components",
        "recipe": {
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
            "A": {"tag": "c:ingots/steel"},
            "B": {"item": "rftoolsstorage:storage_module1"}
            },
            "pattern": [
            " A ",
            "ABA",
            " A "
            ],
            "result": {
            "count": 1,
            "id": "rftoolsstorage:storage_module2"
            }
        }
    }).id('rftoolsstorage:storage_module2')

})