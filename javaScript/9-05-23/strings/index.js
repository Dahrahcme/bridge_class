// Length method

let names = "javaScript";
let output = names.length;

console.log(output);

let trial = "indices";
let trialLength = trial.length;

console.log(trialLength)

//slice method

console.log(names.slice(4));

console.log(names.slice(3));

console.log(names.slice(0, 4));

//substring method

//replace method

console.log(names.replace("a","o")); 

console.log(names.replace("Script", "String")); 

// replaceAll method

console.log(names.replaceAll("a", "i"));

//upperCase method

console.log(trial.toUpperCase());

//lowerCase Method

//Concat method

let name1 = "java";
let name2 = "Script";
let name3 = "is";
let name4 = "an";
let name5 = "interesting";
let name6 = "language";

let concated = name1.concat(name2)

let concated1 = name1.concat(name2 + " " + name3 + " " + name4 + " " + name5 + " " + name6)

console.log(concated);

console.log(concated1);

//CharAt (used to obtain a character at a specified location usually index in a string)

let practice = "Python"

let character1 = practice.charAt(0)

let character2 = practice.charAt(2)

let character3 = practice.charAt(4)

let character4 = practice.charAt(7)

let character5 = practice.charAt(5)


console.log(character1);
console.log(character2);
console.log(character3);
console.log(character4);
console.log(character5);

//IndexOf

console.log(names.indexOf("i"));

//lastIndexOf 

console.log(names.lastIndexOf("a"));

//search

let place = "Ibeju lekki is on the island"

console.log(place.search("on"));

//match

//matchAll

//includes

//startsWith

//EndsWith