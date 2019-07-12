// console.log('work');

// let a = 5;
// const b = 6;

// console.log('start value a:', a);
// console.log('start value b:', b);

// a = a + b;

// console.log('a:', a);
// console.log('b:', b);


// let word = '';
// let num;
// const age = 30;
// const name = 'Alex';
// const message = 'Welcome to the game';
// const free = false;
// let user = null;

// word = name + ' ' + message + ' !';

// console.log('new "word":', word);
// console.log(typeof num);
// console.log(typeof name);
// console.log(typeof free);
// console.log(typeof user);
// console.log(typeof age);

// const userConfirm = confirm('Are you ready ?');
// const userInput = prompt('What are you doing now ?');


// console.log('userConfirm: ', userConfirm);
// alert(userInput);


// console.log(5 % 2 !== 0); // 5 % 2 =  1 // true // odd 
// console.log(6 % 2 === 0); // 6 % 2 = 0 // true // even

// console.log('' == false);


// console.log(5 + 5 + 'px');

// const currency = '1000';

// const promptValue = prompt('Enter number');

// console.log('promptValue:', promptValue);
// console.log(typeof promptValue);

// const sum = Number(currency) + Number(promptValue);
// console.log(sum);


// let myMoney = 20000; 

// myMoney = myMoney + sum;
// console.log('myMoney', myMoney);

// const updateMoney = String(myMoney);
// console.log('updateMoney', updateMoney);
// console.log(typeof updateMoney);




// const logoWidth = '120px';
// const logoHeight = '24.5px';

// console.log('logoWidth', Number.parseInt(logoWidth));
// console.log('logoHeight', Number.parseInt(logoHeight));
// console.log('logoHeight', Number.parseFloat(logoHeight));

const name = prompt('Who are you?');

console.log(' 5 > 4 && name !== "Barty"', 5 > 4 && name !== 'Barty');
console.log('5 > 4 || 5 > 5', 5 > 4 || 5 > 5);
console.log('5 > 5 || 5 > 4', 5 > 5 || 5 > 4);
console.log('5 >= 5', 5 >= 5);
console.log('5 > 5', 5 > 5);
console.log('5 <= 20', 5 <= 20);

if(5 > 4 && name !== 'Barty' && name !== 'Boss') {
    alert(`Hello ${name + "'s"}. We are closed at ${22 + 1 + ' p.m.'}`);
} else if (5 > 4 && name === "Boss") {
    alert('Boss!!! Welcome');
} else {
    alert('Barty go home!');
}