// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

console.log(1);

console.log(2);

setTimeout(() => console.log(3), 0);

console.log(4);

function summ() {

  return new Promise((resolve, reject) => {

      return resolve([1,2,3].reduce((acc, el) => acc + el, 0))
  }) 
}
summ().then(data => console.log('data', data));



// const delay = ms => {
//   let promise = new Promise(function(onSuccess, onError) {
        
//       });
//       return promise;
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms