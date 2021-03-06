const express = require('express')
const app = express()
const port = 8005
const path = require('path');

app.use(express.static(path.resolve(__dirname, './src')));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})