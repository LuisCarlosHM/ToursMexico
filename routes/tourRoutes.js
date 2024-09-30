const express = require('express');
const reviewRouter = require('./reviewRoutes');

const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  checkBody,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
  getToursWithin,
  getDistances,
} = require('../controllers/tourController');

const { protect, restricTo } = require('./../controllers/authController');

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter);

router
  .route('/monthly-plan/:year')
  .get(protect, restricTo('admin', 'lead-guide', 'guide'), getMonthlyPlan);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(getToursWithin);

router.route('/distances/:latlng/unit/:unit').get(getDistances);

router
  .route('/')
  .get(getAllTours)
  .post(protect, restricTo('admin', 'lead-guide'), checkBody, createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(protect, restricTo('admin', 'lead-guide'), updateTour)
  .delete(protect, restricTo('admin', 'lead-guide'), deleteTour);

module.exports = router;
