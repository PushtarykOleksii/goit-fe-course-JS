// Напиши функцию formatString(string) принимающую строку в параметр string.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
// Вызовы функции для проверки работоспособности твоей реализации.

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка

// const formatString = function(string){

//     const stringLength = string.length;
//     const standartLength = 40;
//     console.log('String Length :', stringLength);
//       if (stringLength <=standartLength) {
//           return string;
//       } else {
//     const arrString = string.split('');
//     const carToDell = Number.stringLength - standartLength;
//     const arrModif =  arrString.splice(standartLength -1,Number.carToDell,'...');
//     const arrModifUnite = arrModif.join('');
//         return arrModifUnite;
//       }
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// console.log(formatString('Curabitur ligula sapien.'));
// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));


