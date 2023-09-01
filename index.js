const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.json({
        'name':'masud',
        'age':29,
        'height':5.9,
        'gpa':2.9
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})