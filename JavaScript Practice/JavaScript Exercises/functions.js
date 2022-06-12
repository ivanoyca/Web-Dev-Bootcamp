//?-------------- Functions --------------
//*-------------- Get Bottles of Milk --------------
let money = prompt("How much money you have: ")

function getMilk(money) {
	let numberOfBottles = Math.floor(money / 1.5)
	console.log(`With $${money} dollars you can get ${numberOfBottles} bottles`)
}

getMilk(15)

//*-------------- Age In Weeks --------------
function lifeInWeeks(age) {
	let yearsRemaining = 90 - age
	let days = yearsRemaining * 365
	let months = yearsRemaining * 12
	let weeks = yearsRemaining * 52
	console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`)
}

//*-------------- BMI Calculator --------------

function bmiCalculator(weight, height) {
	mass = Math.round(weight / Math.pow(height, 2))
	return mass
}

var bmi = bmiCalculator(65, 1.8)

console.log(bmi)
