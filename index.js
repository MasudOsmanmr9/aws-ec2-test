const express = require('express')
const app = express()
const port = 3000

app.get('api/v1/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1/user', (req, res) => {
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
