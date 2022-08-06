const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const { create, getByEmail, updateUser, getAll, getById, updateIsActive } = require('../../models/user.model');
const { createToken } = require('../../helpers/utils');

router.get('/', async (req, res) => {
  getAll()
    .then(result => {
      result = result.map(user => ({
        ...user,
        isActive: !!user.isActive
      }))
      res.json(result)
    })
    .catch(err => res.json({ err: err.message }));
});


router.get('/:id', async (req, res) => {
  try {
    const result = await getById(req.params.id)
    res.json(result)
  } catch (err) {
    res.json({ err: err.message })
  }
});

router.get('/userLoged/id', async (req, res) => {
  try {
    const result = await getById(req.user.id)
    res.json(result)
  } catch (err) {
    res.json({ err: err.message })
  }
});


router.post('/register',
  body('email')
    .isEmail()
    .withMessage('El email debe tener un formato correcto'),
  body('name')
    .exists()
    .withMessage('El campo name es requerido'),
  body('password')
    .exists()
    .withMessage('El campo password es requerido'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json(errors.array());
    }
    try {
      //console.log(req.body)
      req.body.password = bcrypt.hashSync(req.body.password, 10)
      await create(req.body)
      const user = await getByEmail(req.body.email)
      //console.log(user)
      if (user.err) {
        return res.json({ err: 'Usuario incorrecto' });
      }
      if (!user.isActive) {
        return res.json({ err: 'Error consulta con el administador' });
      }
      res.json({
        message: 'Usuario registrado',
      });
    } catch (err) {
      console.log('error', err)
      res.json({ err: 'Error al darse de alta por favor compruebe los datos' })
    }
  }
);


router.post('/login', async (req, res) => {
  try {
    const user = await getByEmail(req.body.email)
    if (!user) {
      return res.json({ err: 'Error en usuario y/o contraseña' });
    }
    if (!user.isActive) {
      return res.json({ err: 'Error consulta con el administador' });
    }
    const equals = bcrypt.compareSync(req.body.password, user.password);
    if (!equals) {
      return res.json({ err: 'Error en usuario y/o contraseña' });
    }
    res.json({
      message: 'Login correcto',
      token: createToken(user)
    });
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.put('/status/:userId', async (req, res) => {
  try {
    await updateIsActive(req.params.userId, req.body.isActive)
    res.json({ message: 'Estado actualizado' })
  } catch (err) {
    res.json({ err: err.message })
  }
});

router.put('/:userId', async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    await updateUser(req.body)
    res.json({ message: 'Usuario actualizado' })
  } catch (err) {
    res.json({ err: err.message })
  }
});


module.exports = router;
