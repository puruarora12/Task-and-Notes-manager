const express = require('express')
const port = process.env.PORT || 3000
const { db } = require('./db')
const taskRoute = require('./routes/task')

const app = express()

app.use('/', express.static(__dirname + '/public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/tasks', taskRoute)

db.sync({force:true})
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => {
    console.error(err)
  })