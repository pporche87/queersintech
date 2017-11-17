const express = require('express')
const path = require('path')

const app = express()

app.use('/assets', express.static(__dirname + '/assets'))

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname+'/views/index.html'))
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}...`)
})