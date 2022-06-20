const express = require('express')
const app = express()
const port = 3000
const https = require('https')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    const cityQuery = req.body.cityName;
    const apiKey = "544b84a93a8986dfc549ecdc15193be9";
    const unit = "metric"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=${apiKey}&units=${unit}`
    https.get(url, function (response) {

        //Status Code
        console.log(response.statusCode)

        //Create JSON of the data
        response.on('data', function (data) {
            const weatherData = JSON.parse(data)

            const temp = weatherData.main.temp
            const description = weatherData.weather[0].description
            const weatherIcon = weatherData.weather[0].icon
            const iconURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
            res.write(`<p>The sky is ${description}</p>`)
            res.write(`<h1>The temperature in ${cityQuery} is: ${temp}&#8451;</h1>`)
            res.write(`<img src="${iconURL}">`)
            res.send()
        })
    })
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})