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
  .then(data => data.json())
  .then(data => res.json(data))
})

app.get('/api/medium', (req, res) => {

  const url = 'http://rss2json.com/api.json?rss_url=https://medium.com/feed/queers-in-tech'

  fetch(url)
  .then(data => data.json())
  .then(data => res.json(data))
})

// GET https://api.medium.com/v1/users/{{userId}}/publications

// GET https://api.medium.com/v1/publications/{{publicationId}}/contributors

// GET https://medium.com/m/oauth/authorize?client_id=6e2ef59844b4&scope=basicProfile,listPublications&state=bunnys&response_type=code&redirect_uri=http://queersintech.com

const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))