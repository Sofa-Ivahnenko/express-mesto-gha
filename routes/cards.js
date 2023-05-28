const router = require('express').Router();

const {
  createCardValidation,
  cardIdValidation,
} = require('../middlewares/validations');

const {
  getAllCards,
  createCard,
  deleteCardById,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.get('/cards', getAllCards);
router.post('/cards', createCardValidation, createCard);
router.delete('/cards/:cardId', cardIdValidation, deleteCardById);
router.put('/cards/:cardId/likes', cardIdValidation, likeCard);
router.delete('/cards/:cardId/likes', cardIdValidation, dislikeCard);

module.exports = router;
