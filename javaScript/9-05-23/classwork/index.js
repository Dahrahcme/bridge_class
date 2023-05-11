let task = "Senator Abiru Innovation Labs"

let taskI = task.slice(0, 7)

console.log(taskI);

let taskII = task.slice(18, 24)
console.log(taskII);

let taskIII = task.slice(10, 13)
console.log(taskIII);

let taskIV = task.replace("novation", "novate");
console.log(taskIV);

let taskV = task.replace("Labs", "Facility"); 
console.log(taskV);

let taskB = "My dogs are happy to see other dogs on dogs day"

let answer = taskB.replaceAll("dogs", "cats")

console.log(answer);