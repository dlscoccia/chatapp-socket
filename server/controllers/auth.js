const { validationResult } = require("express-validator")
const bcrypt = require('bcryptjs')
const Usuario = require('../models/usuarios')
const { generarJWT } = require("../helpers/jwt")

const crearUsuario = async (request, response = response) => {
  try {
    const { email, password } = request.body
    const existeEmail = await Usuario.findOne({ email })

    if (existeEmail) {
      return response.status(400).json({
        ok: false,
        message: 'El correo ya existe'
      })
    }
    const usuario = new Usuario(request.body)
    // Password encrypt
    const salt = bcrypt.genSaltSync()
    usuario.password = bcrypt.hashSync(password, salt)

    // Save user on DB
    await usuario.save()

    //JWT
    const token = await generarJWT(usuario.id)

    response.json({
      ok: true,
      usuario: userDB,
      token
    })

  } catch (error) {
    response.status(500).json({
      ok: false,
      message: "Server is presenting problems"
    })
  }
}

const login = async (request, response) => {
  const { email, password } = request.body

  try {
    // Verify is user exist
    const userDB = await Usuario.findOne({ email })
    if (!userDB) {
      return response.status(404).json({
        ok: false,
        message: 'Email not found'
      })
    }

    // Validate password
    const validPassword = bcrypt.compareSync(password, userDB.password)
    if (!validPassword) {
      return response.status(404).json({
        ok: false,
        message: 'Password not found'
      })    
    }

    const token = await generarJWT(userDB.id)

    response.json({
      ok: true,
      usuario: userDB,
      token
    })

  } catch (error) {
    response.status(500).json({
      ok: false,
      message: "Server is presenting problems"
    })
  }

  response.json({
    ok: true
  })
}

const renewToken = async (request, response) => {
  const uid = request.uid

  // Generate new JWT
  const token = await generarJWT(uid)

  // Get user with uid
  const usuario = await Usuario.findById(uid)
  
  response.json({
    ok: true,
    token,
    usuario
  })
}

module.exports = {
  crearUsuario,
  login,
  renewToken
}