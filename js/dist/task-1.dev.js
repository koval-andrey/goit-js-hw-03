"use strict";

/*
Напиши скрипт, который, для объекта user, последовательно:

добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of */
var user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
var userKeys = Object.keys(user);

for (var _i = 0, _userKeys = userKeys; _i < _userKeys.length; _i++) {
  var key = _userKeys[_i];
  console.table("".concat(key, ": ").concat(user[key]));
}