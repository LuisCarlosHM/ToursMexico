
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 8000;
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

mongoose.set('strictQuery', false);

mongoose
  .connect(DB, {})
  .then((con) => console.log('DB connection successful!'));


const server = app.listen(port, () => {
    console.log(`Express is running on port ${server.address().port}`);
});