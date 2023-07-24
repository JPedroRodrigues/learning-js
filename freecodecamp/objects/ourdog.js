var ourDog = {
    "name" : "doggo",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everything!"]
};

var legs = ourDog.legs;
var friends = ourDog.friends;

console.log(legs);
console.log(friends);

ourDog.name = "Confused doggo";
console.log(ourDog.name);

ourDog.bark = "bark bark!";
console.log(ourDog.bark);

delete ourDog.bark;
console.log(ourDog);