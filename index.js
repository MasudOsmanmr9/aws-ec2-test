const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World! this is 3001 port')
})

app.get('/api/v2', (req, res) => {
  res.send('Hello World! this is 3001 port')
})

app.get('/api/v2/user', (req, res) => {
    res.json({
        'name':'osman',
        'age':29,
        'height':5.9,
        'gpa':2.9
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


  
