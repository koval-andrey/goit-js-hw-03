"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников
 и возвращает имя самого продуктивного (который выполнил больше всех задач). 
 Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
 */
var findBestEmployee = function findBestEmployee(employees) {
  var bestValues = Object.values(employees);
  var bestKeys = Object.keys(employees);

  for (var _i = 0, _Object$entries = Object.entries(employees); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    var maxNumberOfTasks = Math.max.apply(Math, _toConsumableArray(bestValues));

    if (value === maxNumberOfTasks) {
      return key;
    }
  }
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */


console.log(findBestEmployee({
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
})); // lorence

console.log(findBestEmployee({
  poly: 12,
  mango: 17,
  ajax: 4
})); // mango

console.log(findBestEmployee({
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38
})); // lux