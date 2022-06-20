const express = require('express')
const app = express()
const port = 3000
const https = require('https')
const { traceDeprecation } = require('process')
app.get('/', (req, res) => {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=544b84a93a8986dfc549ecdc15193be9&units=metric"
    https.get(url, function (response) {

        //Status Code
        console.log(response.statusCode)

        //Create JSON of the data
        response.on('data', function (data) {
            const weatherData = JSON.parse(data)

            const temp = weatherData.main.temp
            const description = weatherData.weather[0].description
            console.log(`The temperature is: ${temp}ºC`)
            console.log(`The sky is: ${description}`)
        })
    })
    res.send("Server Running")
})

app.get('/api', (req, res) => {
    res.send("API")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})