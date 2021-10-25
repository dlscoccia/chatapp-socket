const jwt = require('jsonwebtoken')

const validarJWT = (request, response, next) => {
  try {

    const token = request.header('x-token')

    if(!token){
      return response.status(401).json({
        ok: false,
        message: 'No hay token'
      })
    }

    const {uid} = jwt.verify(token, process.env.JWT_KEY)
    request.uid = uid

    next()
  } catch (error) {
    return response.status(401).json({
      ok: false,
      message: 'Token invalido'
    })
  }
}

module.exports = {
  validarJWT
}