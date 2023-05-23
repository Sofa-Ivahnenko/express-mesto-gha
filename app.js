const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1/mestodb', {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.user = {
    _id: '646cf94ebe064cf74bc6016f',
  };

  next();
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Приложение слушает порт: ${PORT}`);
});