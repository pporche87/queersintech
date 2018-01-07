const express = require('express')
const app = express()
const path = require('path')

// app.set('views', path.join(__dirname, 'views'))
// app.use(express.static(path.join(__dirname, '/public')))


// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/views/index.html')
// })

app.get('/api/queers', (request, response) => {
  const queers = [
    {id: 1, firstName: 'Patrick', lastName: 'Porche'},
    {id: 2, firstName: 'Spencer', lastName: 'Dezart-Smith'},
    { id: 3, firstName: 'Michael', lastName: 'Masterson'}
  ]

  response.json(queers)
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})