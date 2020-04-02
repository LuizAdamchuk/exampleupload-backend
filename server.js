const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')

const app = express()
//Permite que o express entenda a linguagem json
app.use(express.json())
//
app.use(cors())

mongoose.connect("mongodb+srv://adamchuk:adamchuk@cluster0-gfnun.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
requireDir('./src/models')


app.use('/api', require("./src/routes"))

app.listen(3001)