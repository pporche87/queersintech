const express = require('express')
require('dotenv').config()
require('isomorphic-fetch')

const app = express()

app.get('/api/github', (req, res) => {

  const url = 'https://api.github.com/repos/pporche87/queersintech/collaborators'

  fetch(url, {
    headers: {
      'Authorization': `token ${process.env.OAUTH}`
    }
  })
  .then((data) => {
    return data.json()
  })
  .then(data => res.json(data))
})

const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))