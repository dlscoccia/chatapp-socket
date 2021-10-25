const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONN_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     // useCreateIndex: true
    })
    console.log('DB connected')

  } catch (error) {
    console.log(error)
    throw new Error('Database cannot connect, view logs for more information')
  }
}

module.exports = {
  dbConnection
}