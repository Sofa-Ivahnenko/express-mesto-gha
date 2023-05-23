const router = require('express').Router();
const {
  HTTP_STATUS_NOT_FOUND,
} = require('../errors/errors');

const userRoutes = require('./users');
const cardRoutes = require('./cards');

router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.use('/*', (req, res) => {
  res.status(HTTP_STATUS_NOT_FOUND)
    .send({ message: 'Запрашиваемый ресурс не найден' });
});

module.exports = router;