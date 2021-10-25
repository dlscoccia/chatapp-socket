const { Router, response } = require('express')
const { check } = require('express-validator')
const { crearUsuario, renewToken, login } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router()
// Create new users
router.post('/new',[
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('email', 'Email es obligatorio').isEmail(),
  check('password', 'Password es obligatorio').not().isEmpty(),
  validarCampos
] ,crearUsuario)

// Login
router.post('/', [
  check('email', 'Email es obligatorio').isEmail(),
  check('password', 'Password es obligatorio').not().isEmpty(),
  validarCampos
] ,login)

// Revalidate token
router.get('/renew', validarJWT ,renewToken)


module.exports = router