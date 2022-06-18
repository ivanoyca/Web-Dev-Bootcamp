const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); //__dirname = returns path of the file.
})

app.post('/', (req, res) => {
    num1 = Number(req.body.num1) //Specify type of data. Default type is set to string.
    num2 = Number(req.body.num2)
    result = num1 + num2
    res.send(`The result of the sum is equal to ${result}`)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});