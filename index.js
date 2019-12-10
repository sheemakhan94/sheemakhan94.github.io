const express = require('express')
const mongoose = require('mongoose')
const app = express()

const { port, dbURI } = require('./config/environment')

mongoose.connect(dbURI)

app.listen(port, () => console.log(`App is listening on port ${port}`))

module.exports = app
