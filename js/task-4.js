/*
Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
Функция считает общую сумму запрплаты работников и возращает ее.
 Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
*/



let totalSalary  = 0;
const countTotalSalary = function(employees) {
 const salaryValues = Object.values(employees);
  console.log(salaryValues);
 for (const salary of salaryValues) {
    totalSalary += salary;
 }
 return totalSalary;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
