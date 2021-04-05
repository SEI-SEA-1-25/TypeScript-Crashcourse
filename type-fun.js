console.clear();
var helloTs = 'hello Typescript';
// console.log(helloTs)
var boolyBoi = true;
var countyBoi = 10;
boolyBoi = false;
// will throw an error
// boolyBoi = 10
countyBoi++;
countyBoi *= 10;
console.log(countyBoi);
// any type is like swiss army knife
var swissyBoi = 'string';
swissyBoi = 10;
// type inference
var stringy = 'hello'; // infered to be a string
// wil lthrow and error
// stringy = 10
var booly = true;
// will throw and error
// booly = 'string'
// union -- more than one type in a var
var united;
united = 10;
united = 'string';
// united = true
// this is what unions for good for
var myString;
myString = null;
// arrays in ts -- only hold one data type
var numList = [1, 3, 5];
// generic way
var generic = ['hello'];
var numString = ['string', 1];
// mulitdimension array
var multiverse = [
    [1, 2, 4],
    [4, 5, 6]
];
var num = 10;
// lets write a function
function compliment(person) {
    return "i like your haircut " + person + ". Lookin Spiffy!";
}
console.log(compliment('henry'));
function complimentMany(people) {
    // in callbacks will use type inference
    people.forEach(function (person) {
        console.log("hey " + person + ", nice pair of shoes!");
    });
}
// to use an interface -- it is like a type
var typeScriptLover = {
    name: 'Weston',
    sayCatchPhrase: function () { return console.log('sick.'); }
};
typeScriptLover.sayCatchPhrase();
typeScriptLover.age = 10; // at heart
// typeScriptLover.name = 'new name'
// tuples -- is an array of fixed length
var twople = ['hello', 10];
// this throw an error
// twople = [13, 'oh no! error!']
// Enums
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var colorChoice = Color.Green;
