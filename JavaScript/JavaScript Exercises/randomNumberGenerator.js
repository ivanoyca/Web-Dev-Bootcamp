// //?-------------- Random Number Generator --------------

let firstPerson = prompt('First Person: ')
let secondPerson = prompt('Second Person: ')
let lovePercentage = Math.floor(Math.random() * 101)

if (lovePercentage >= 70) {
	console.log(`The love score between ${firstPerson} and ${secondPerson} is ${lovePercentage}%, Your love is truly eternal love`)
} else if (lovePercentage >= 50 && lovePercentage < 70) {
	console.log(`The love score between ${firstPerson} and ${secondPerson} is ${lovePercentage}%, Your love is strong`)
} else {
	console.log(`The love score between ${firstPerson} and ${secondPerson} is ${lovePercentage}%, Your love is not meant to be`)
}