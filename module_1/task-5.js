// // Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// // Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// // Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// // Ниже приведен список стран и стоимость доставки.

// // Китай - 100 кредитов
// // Чили - 250 кредитов
// // Австралия - 170 кредитов
// // Индия - 80 кредитов
// // Ямайка - 120 кредитов

// const CHINA = "CHINA";
// const CHILI = "CHILI";
// const AUSTRALIA = "AUSTRALIA";
// const INDIA = "INDIA";
// const JAMAICA = "JAMAICA";

// const priceChina = 100;
// const priceChili = 250;
// const priceAustralia = 170;
// const priceIndia = 80;
// const priceJamaica = 120;

// const promptLabel = `Please, choose a country!:
//  ${CHINA}, ${CHILI}, ${AUSTRALIA}, ${INDIA}, ${JAMAICA}.`;

// let userChoise = prompt(promptLabel);
// let message;

// if (userChoise === null) {
//   message = "See you later!";
// } else {
//   switch (userChoise.toUpperCase()) {
//     case CHINA:
//       message = `'Dellivery to your country cost ${priceChina} credits'`;
//       break;
//     case CHILI:
//       message = `'Dellivery to your country cost ${priceChili} credits'`;
//       break;
//     case AUSTRALIA:
//       message = `'Dellivery to your country cost ${priceAustralia} credits'`;
//       break;
//     case INDIA:
//       message = `'Dellivery to your country cost ${priceIndia} credits'`;
//       break;
//     case JAMAICA:
//       message = `'Dellivery to your country cost ${priceJamaica} credits'`;
//       break;

//     default:
//       message = "Please, choose a country!";
//   }
// }

// console.log(message);

 

