"use strict";

/*
Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств. */
var countProps = function countProps(obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    var countKeys = keys.length;
    return countKeys;
  }
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */


console.log(countProps({})); // 0

console.log(countProps({
  name: "Mango",
  age: 2
})); // 2

console.log(countProps({
  mail: "poly@mail.com",
  isOnline: true,
  score: 500
})); // 3