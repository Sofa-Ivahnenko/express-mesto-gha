const router = require('express').Router();

const {
  userIdValidation,
  updateUserValidation,
  updateAvatarValidation,
} = require('../middlewares/validations');

const {
  getAllUsers,
  getCurrentUser,
  getUserById,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

router.get('/users', getAllUsers);
router.get('/users/me', getCurrentUser);
router.get('/users/:userId', userIdValidation, getUserById);

router.patch('/users/me', updateUserValidation, updateProfile);
router.patch('/users/me/avatar', updateAvatarValidation, updateAvatar);

module.exports = router;
