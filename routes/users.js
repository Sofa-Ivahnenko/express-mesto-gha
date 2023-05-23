const router = require('express').Router();

const {
  getAllUsers,
  createUser,
  getCurrentUser,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:userId', getCurrentUser);
router.patch('/me', updateProfile);
router.patch('me/avatar', updateAvatar);

module.exports = router;