// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const China = 100;
const Chili = 250;
const Australia = 170;
const India = 80;
const Jamaica = 120;
let message = `Dellivery to  `
const promptLabel = `'Choose your country to deliver: China - ${China}, Chili-${Chili}, Australia-${Australia}, India-${India}, Jamaica-${Jamaica},`;
const userChoise = prompt(promptLabel.toLowerCase());
if (userChoise ===null) {
    console.log(`'Declined by the User!'`);
} else {
    switch(userChoise) {
        case China: 
console.log();
    }
}
