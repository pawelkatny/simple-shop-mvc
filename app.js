const express = require('express');
const app = express();
const config = require('./config/config');

const mongoose = require('mongoose');

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

mongoose.connect(
    config.MONGODB_URI
)
.then(app.listen(config.PORT, () => {
    console.log('Server started at port 3000.');
}))
.catch(err => {
    console.log('Error connecting to DB: ' + err);
})
