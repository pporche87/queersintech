const express = require('express')

const app = express()

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Mike', lastName: 'Masterson'},
    {id: 2, firstName: 'Patrick', lastName: 'Porche'},
    {id: 3, firstName: 'Jane', lastName: 'Doe'}
  ]
  res.json(customers)
})

const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))