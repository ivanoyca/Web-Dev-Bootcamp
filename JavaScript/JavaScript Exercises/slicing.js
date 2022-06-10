//?-------------- Slicing - toUpperCase - toLowerCase --------------
let userName = prompt("What is your name?: ")
let firstLetter = userName.slice(0, 1)
let userNameUpper = firstLetter.toUpperCase()
let restOfUsername = userName.slice(1)
let lowerCasing = restOfUsername.toLowerCase()

console.log(`Hello, ${userNameUpper}${lowerCasing}`)