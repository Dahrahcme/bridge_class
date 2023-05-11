// let num1 = "6";
// let num2 = 9;
// let num3 = num1 + num2;

// console.log(num3);

// //parseInt: Number method

// num1_2 = parseInt(num1)

// num4 = num1_2 + num2;

// console.log(num4);

// Array

// var bridgeClass = [
//     "Grace",
//     17,
//     true
// ];

// let myArray = new Array();

// myArray[0] = "emi";
// myArray[1] = "arami";
// myArray[2] = "and I";

// console.log(myArray[1]);


// var bridge_class = new Array();
// bridge_class[0] = "me";
// bridge_class[1] = "myself";
// bridge_class[2] = false;

// console.log(bridge_class[0]);
// console.log(bridge_class);

// alert('Welcome to my world')

// Operation on Arrays

// Methods to add to an array
// push and unshift

// 1. push(): adds an element to the end of the array
// 2. unshift(): adds an element to the start of the array
let sizes = ["small", "medium", "large", "extra large"];
document.getElementById("size").innerHTML = sizes

// console.log(sizes);

sizes.push("Extra extra large")
document.getElementById("modified1").innerHTML = sizes

// console.log(sizes);

sizes.unshift("extra small");
document.getElementById("modified2").innerHTML = sizes

// console.log(sizes);
// console.log(sizes[0]);

const bridge_class_order = ["Dorcas",  "Ola", "Haroun"];
document.getElementById("initial").innerHTML = bridge_class_order

bridge_class_order.push("Kafayat")
bridge_class_order.push("Courage")
bridge_class_order.unshift("Eleazar")

document.getElementById("final").innerHTML = bridge_class_order

//  Methods to remove elements
//  1. pop(): removes an element at the end of the array
//  2. shift(): removes an element at the start of the array

bridge_class_order.pop()
bridge_class_order.shift()

document.getElementById("final").innerHTML = bridge_class_order

delete bridge_class_order[1]
document.getElementById("final").innerHTML = bridge_class_order

bridge_class_order[1] = "Favour"
document.getElementById("final").innerHTML = bridge_class_order

// document.getElementById("final").innerHTML = bridge_class_order[1]


const cars = [
    "Audi",
    "Tesla",
    "Mercedes",
    "BMW",
]

console.log(cars);

// length of an array

console.log(cars.length);

console.log(cars[1]);

// to get the last item on the long list/array

console.log(cars[cars.length - 1]); // (cars[cars.length - 1]) == cars[3]


// Convert an array to a string
// a. join()
// b. toString()

let cars_string = cars.toString()
console.log(cars_string);

// Convert string to an array

// split()

let alpha = "a,b,c,defghijklmnopq"
let $alpha = alpha.split(',');
console.log($alpha);

let names = "Ola David Kelvin Tunde"
let $names = names.split(" ")
console.log($names);

//Concatenation

let males = ["Courage", "Micheal", "Ola", "Ebenzer", "Tomiwa"]

let females = ["Kafayat", "Dorcas", "Aisha", "Fadellah", "Ayomide"]

const totalNames = males.concat(females)

console.log(totalNames);


// Slicing

// Sort: arranges alphabetically

console.log(totalNames.sort());

console.log(totalNames.reverse());

console.log(females.slice(0,3));