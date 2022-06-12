//?-------------- While Loops ------------------
//*-------------- FizzBuzz While ------------------

output = []
n = 1

function fizzbuzz() {
    while (n <= 100) {
        if (n % 3 === 0 && n % 5 === 0) {
            output.push("FizzBuzz")
            n++
        } else if (n % 3 === 0) {
            output.push("Fizz")
            n++
        } else if (n % 5 === 0) {
            output.push("Buzz")
            n++
        } else {
            output.push(n++)
        }
    }
    console.log(output);
}

//*-------------- 99 Bottles of Beer --------------
count = 99

while (count >= 0) {
    console.log(count + ' bottles of beer on the wall, ' + count + ' bottles of beer. ')
    count--
    if (count == 0) {
        count = "no more "
        console.log(`Take one down and pass it around, ${count} bottles of beer on the wall.`)
        console.log(count + 'bottles of beer on the wall, ' + count + 'bottles of beer. ')
        console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.`)
    }
    else {
        console.log(`Take one down and pass it around, ${count} bottles of beer on the wall.`)
    }
}