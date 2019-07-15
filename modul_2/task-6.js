// Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// Вызовы функции для проверки работоспособности твоей реализации.



const checkForSpam= function(string) {
    
    const arrLeters = string.split(' ');
    console.log(arrLeters);
    let message = true; 
    if (string.includes('spam') || string.includes('sale')) {
       message = false; 
    }
} 



console.log(checkForSpam('Latest technology news')); 

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!')); 

console.log(checkForSpam('[SPAM] How to earn fast money?')); 