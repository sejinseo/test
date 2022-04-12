const express = require('express')
const app =express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sejin:abcd1234@project.btidv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.get('/', (req, res) => res.send('안녕하세요'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))