const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const app = express();
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const viewRouter = require('./routes/viewRoutes');
const AppError = require('./utils/appError');
const cookieParser = require('cookie-parser');

// 1. MIDDLEWARES

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet());
app.use(morgan('dev'));

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());


// 2. ROUTES

app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

// userModel.create({
//   name: 'Jonas',
//   email: 'luis.luigisantos@gmail.com',
//     password: '12345678',
//     passwordConfirm: '12345678'
// });

// review.create({
//   review: 'This was a great tour',
//   rating: 4,
//   user: '5f5b3b3b4',
// });

module.exports = app;

