const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  getAllReviews,
  createReview,
  getReview,
  deleteReview,
  updateReview,
  setTourUserIds,
} = require('../controllers/reviewController');

const { protect, restricTo } = require('../controllers/authController');
const User = require('../models/userModel');

router.use(protect);

router
  .route('/')
  .get(getAllReviews)
  .post(restricTo('user'), setTourUserIds, createReview);

router
  .route('/:id')
  .get(getReview)
  .delete(restricTo('user', 'admin'), deleteReview)
  .patch(restricTo('user', 'admin'), updateReview);

module.exports = router;
