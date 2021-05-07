const express = require('express')
const app = express()
const mongoose = require('mongoose')

//untuk connect ke database
mongoose.connect('mongodb://localhost:27017/daftar-register', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Berhasil Connect ke Database'))
  .catch(() => console.log('Gagal Connect ke Database'))

app.use(express.json({
  extended: true,
  limit: '20mb'
}))

app.use(express.urlencoded({
  extended: true,
  limit: '20mb'
}))

app.use('/register', require('./routes/register'))

app.listen(3000, () =>{
    console.log('server started')
})