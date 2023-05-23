const mongoose = require('mongoose');
const validator = require('Validator');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [2, 'Минимальная длина поля "name" -2'],
      maxlength: [30, 'Максимальная длина поля "name" -30'],
      default: 'Жак-Ив Кусто',
      required: [true, 'Поле "name" должно быть заполнено'],
    },
    about: {
      type: String,
      minlength: [2, 'Минимальная длина поля "about" -2'],
      maxlength: [30, 'Максимальная длина поля "about" -30'],
      default: 'Исследователь',
      required: [true, 'Поле "about" должно быть заполнено'],
    },
    avatar: {
      type: String,
      default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
      required: [true, 'Поле "avatar" должно быть заполнено'],
      validate: {
        validator: (v) => validator.isURL(v),
        message: 'Некорректный URL',
      },
    },
  },
  {
    versionKey: false,
  },
);
module.exports = mongoose.model('user', userSchema);