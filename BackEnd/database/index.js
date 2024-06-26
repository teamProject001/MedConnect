const mongoose = require('mongoose')
const mongoUri = 'mongodb://127.0.0.1/medicalApp'

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('MongoDB Database connected')
  })
  .catch((err) => console.log(err))

  const db = mongoose.connection

  module.exports =db

