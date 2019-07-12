// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

let credits = 23580;
const pricePerDroid = 3000;
let order = prompt(`How many Droids do you want to buy?`);
let totalPrice = order * pricePerDroid;
credits = credits - totalPrice;
if (order === null) {
  console.log(`'Declined by the User!'`);
} else if (totalPrice > credits) {
  console.log(
    `Not enough credits on your account, total prise is ${totalPrice}!!!`
  );
} else if (totalPrice <= credits) {
  console.log(
    `You have bought ${order} Droids, your account has only ${credits} credits now )))!`
  );
} 
else if (Number.isNaN(+order)) {
  console.log(`Enter a Number, not a Leter. Stupid You!!`);
}
