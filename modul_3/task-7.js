// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
}; //  * Каждая транзакция это объект со свойствами: id, type и amount

const account = {
  balance: 0, // Текущий баланс счета
  transactions: [], // История транзакций

  deposit(amount) {
    this.balance = this.balance + amount;
    let transaction = {
      id: this.transactions.length + 1,
      type: Transaction.DEPOSIT,
      amount
    };
    this.addTransaction(transaction);
  }, //   * Метод отвечающий за добавление суммы к балансу
  //  * Создает объект транзакции и вызывает addTransaction

  //    * Метод отвечающий за снятие суммы с баланса.
  //    * Создает объект транзакции и вызывает addTransaction
  //    *
  //    * Если amount больше чем текущий баланс, выводи сообщение
  //    * о том, что снятие такой суммы не возможно, недостаточно средств.

  withdraw(amount) {
    if (amount > this.balance) {
      return alert("Not enough money");
    }
    let transaction = {
      id: this.transactions.length + 1,
      type: Transaction.WITHDRAW,
      amount
    };
    this.balance = this.balance - amount;
    this.addTransaction(transaction);
  },
  //    * Метод добавляющий транзацию в свойство transactions
  //    * Принимает объект трназкции
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },
  //    * Метод возвращает текущий баланс

  getBalance() {
    return this.balance;
  },

  //    * Метод ищет и возвращает объект транзации по id
  getTransactionDetails(id) {},

  //    * Метод возвращает количество средств
  //    * определенного типа транзакции из всей истории транзакций
  getTransactionTotal(type) {}

};
account.deposit(300);
console.log("account.getBalance()", account.getBalance());
console.log("account.transactions:", account.transactions);
account.withdraw(200);
console.log("account.getBalance:", account.getBalance());
console.log('account.transactions :', account.transactions);