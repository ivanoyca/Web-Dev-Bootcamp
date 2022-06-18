const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>")
})

app.get('/contact', (req, res) => {
    res.send('Contact Me At: ivanoyca@gmail.com')
})

app.get('/about', (req, res) => {
    res.send('This Web Site is property of Ivan Oyervides')
})

app.get('/hobbies', (req, res) => {
    res.send('<ul><li>Programming</li><li>Watching Netflix</li><li>Tech</li></ul>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})