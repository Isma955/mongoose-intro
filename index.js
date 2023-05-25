const express = require('express');
const mongoose = require('mongoose')
const app = express();

mongoose.connect("mongodb+srv://isma955:12345@cluster0.c0o27ym.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

  app.use(express.json());
  



app.use(require('./routes/students.route'))


app.listen(4000, () => {
    console.log('Server has been works')
})