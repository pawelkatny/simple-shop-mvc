const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log('Server started at port 3000.');
})