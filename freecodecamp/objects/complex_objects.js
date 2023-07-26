"use stirct";

let myMusic = [
    {
        "artist" : "Billy Joel",
        "title" : "Piano Man",
        "release_year" : 1973,
        "formats" : [
            "CD",
            "8T",
            "LP"
        ],
        "gold" : true
    },
    {
        "artist" : "João Pedro",
        "title" : "Poor man",
        "release_year" : 2002,
        "formats" : ["Youtube Video"],
        "gold" : true
    }
];

let myStorage = {
    "car" : {
        "inside" : {
            "glove_box" : "maps",
            "passenger_seat" : "crumbs"
        },
        "outside" : {
            "trunk" : "jack"
        }
    }
};

var glove_box_content = myStorage.car.inside["glove_box"];
console.log(glove_box_content);

let plants = [
    {
        type: "flowers",
        list : [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type : "trees",
        list : [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var second_tree = plants[1]["list"][1];
console.log(second_tree);