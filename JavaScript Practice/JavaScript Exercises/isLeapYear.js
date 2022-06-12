//?-------------- Is It Leap Year? --------------
function isLeapYear(year) {
	if (year % 4 == 0) {
		if (year % 100 == 0) {
			if (year % 400 == 0) {
				return console.log("Leap year.")
			} else {
				return console.log("Not Leap Year")
			}
		} else {
			return console.log("Leap year.")
		}
	} else {
		return console.log("Not Leap Year")
	}
}

isLeapYear(2000)