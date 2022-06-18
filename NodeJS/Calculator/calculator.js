const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); //__dirname = returns path of the file.
})

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmicalculator', (req, res) => {
    weight = parseFloat(req.body.weight)
    height = parseFloat(req.body.height)
    result = weight / Math.pow(height, 2)
    res.send(`Your BMI is ${result}`)
})

app.post('/', (req, res) => {
    let num1 = Number(req.body.num1) //Specify type of data. Default type is set to string.
    let num2 = Number(req.body.num2)
    result = num1 + num2
    res.send(`The result of the sum is equal to ${result}`)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});