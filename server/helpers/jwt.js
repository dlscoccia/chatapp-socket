const jwt = require('jsonwebtoken')

const generarJWT = (uid) => {
  return new Promise( (resolve, reject) => {
    const payload = { uid }
    jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn: '24h'
    }, (error, token) => {
      if(error) {
      console.log(error)
      reject('JWT could not be generated')
    } else {
      resolve(token)
    }
    })
  })
}

module.exports = {
  generarJWT
}