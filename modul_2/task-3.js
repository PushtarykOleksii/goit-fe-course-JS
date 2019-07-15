// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки.

// Вызовы функции для проверки работоспособности твоей реализации.

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(calculateEngravingPrice(const total words.length * costPerWord;)); // 200

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100

const calculateEngravingPrice = function(string, costPerWord) {
    const words = string.split(' ');
    const total = words.length * costPerWord;
console.log(`Total amount of words equal ${words.length}, so you own us ${total} US dollars`);
return total;
}

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20));