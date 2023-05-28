const router = require('express').Router();
const auth = require('../middlewares/auth');
const { signUp, signIn } = require('../middlewares/validations');
const { createUser, login } = require('../controllers/users');
const { NotFoundError } = require('../errors/index-errors');

const userRoutes = require('./users');
const cardRoutes = require('./cards');

router.post('/signup', signUp, createUser);
router.post('/signin', signIn, login);

router.use('/', auth, userRoutes);
router.use('/', auth, cardRoutes);

router.use('/*', auth, () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

module.exports = router;
