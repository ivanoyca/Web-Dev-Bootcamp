//?-------------- Arrays --------------
//*-------------- Is the Guest in the List? --------------
// let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

// let checkList = prompt("Write a name to enter: ");

// if (guestList.includes(checkList)) {
//   console.log("You can enter")
// } else {
//   console.log("You can't enter")
// }

//*-------------- FizzBuzz .push() --------------
// output = []
// n = 1

// function fizzbuzz() {
//   if (n % 3 === 0 && n % 5 === 0) {
//     output.push("FizzBuzz")
//     n++
//   } else if (n % 3 === 0) {
//     output.push("Fizz")
//     n++
//   } else if (n % 5 === 0) {
//     output.push("Buzz")
//     n++
//   } else {
//     output.push(n++)
//   }

//   console.log(output);
// }

//*-------------- Select Random From Array --------------

let people = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(people) {
  let numberOfNames = people.length
  let randomNamePosition = Math.floor(Math.random() * numberOfNames)
  let randomName = people[randomNamePosition]
  return randomName + " is going to buy luch today."
}

console.log(whosPaying(people))