const express = require('express');
const {
  getOverview,
  getTour,
  getLoginForm,
  getSignUpForm,
  getAccount,
  updateUserData,
} = require('../controllers/viewController');

const { isLoggedIn } = require('../controllers/authController');

const router = express.Router();
router.use(isLoggedIn);

router.get('/', getOverview);
router.get('/me', isLoggedIn, getAccount);
router.get('/tour/:slug', getTour);
router.get('/login', getLoginForm);
router.get('/signup', getSignUpForm);

router.post('/submit-user-data', isLoggedIn, updateUserData);

module.exports = router;
