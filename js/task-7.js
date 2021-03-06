/*
Напиши скрипт управления личным кабинетом интернет банка. 
Есть объект account в котором необходимо реализовать 
методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

 let id = 0;

 const getId = () => {
   return (id += 1);
 };
 const Transaction = {
   DEPOSIT: "deposit",
   WITHDRAW: "withdraw",
 };

 /*
  * Каждая транзакция это объект со свойствами: id, type и amount
  */

 const account = {
   // Текущий баланс счета
   balance: 0,

   // История транзакций
   transactions: [],

   /*
    * Метод создает и возвращает объект транзакции.
    * Принимает сумму и тип транзакции.
    */
   createTransaction(amount, type) {
     return {
       id: getId(),
       type,
       amount,
     };
   },

   /*
    * Метод отвечающий за добавление суммы к балансу.
    * Принимает сумму танзакции.
    * Вызывает createTransaction для создания объекта транзакции
    * после чего добавляет его в историю транзакций
    */
   deposit(amount) {
     if (typeof amount !== "number" || amount <= 0) {
       console.log("Incorrect amount");
       return;
     }
     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
     {
       this.transactions.push(transaction);
       this.balance += amount;
     }
   },

   /*
    * Метод отвечающий за снятие суммы с баланса.
    * Принимает сумму танзакции.
    * Вызывает createTransaction для создания объекта транзакции
    * после чего добавляет его в историю транзакций.
    *
    * Если amount больше чем текущий баланс, выводи сообщение
    * о том, что снятие такой суммы не возможно, недостаточно средств.
    */
   withdraw(amount) {
     if (typeof amount !== "number" || amount <= 0) {
       console.log("Incorrect amount");
       return;
     }
     if (amount > this.balance) {
       console.log("Operation canceled, insufficient funds");
       return;
     }
     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
     this.transactions.push(transaction);
     this.balance -= amount;
   },

   /*
    * Метод возвращает текущий баланс
    */
   getBalance() {
     console.log(`your balance remains: ${this.balance}`);
     return this.balance;
   },

   /*
    * Метод ищет и возвращает объект транзации по id
    */
   getTransactionDetails(id) {
     for (const transaction of this.transactions) {
       if (id !== transaction.id) continue;
       return transaction;
     }
     return null;
   },

   /*
    * Метод возвращает количество средств
    * определенного типа транзакции из всей истории транзакций
    */
   getTransactionTotal(type) {
     let total = 0;
     for (const transaction of this.transactions) {
       if (type !== transaction.type) continue;
       total += transaction.amount;
     }
     return total;
   },
 };

  account.deposit(500);
  account.withdraw(150);
  console.log(account.getBalance());