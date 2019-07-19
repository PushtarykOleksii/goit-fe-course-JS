// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:
// ============================================

// class StringBuilder {
//   constructor(str1) {
//     this._value = str1;
//   }
//   // - возвращает текущее значение поля _value
//   get value() {
//     return this._value;
//   }

//   //   - получает парметр str (строку) и добавляет ее в конец value
//   append(str) {
//     this._value = this._value + str;
//   } //Метод

//   //  - получает парметр str (строку) и добавляет ее в начало value
//   prepend(str) {
//     this._value = str + this._value;
//   } //Метод

//   //  - получает парметр str (строку) и добавляет ее в начало и в конец value
//   pad(str) {
//     this._value = str + this._value + str;
//   } //Метод
// }

// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='
