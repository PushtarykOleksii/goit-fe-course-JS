import quizData from "./quiz-data.js";
const button = document.querySelector("button");
const form = document.querySelector(".form");
const fragment = document.createDocumentFragment();
const textHead = document.createElement("textHead");
textHead.className = "textHead";
textHead.textContent = quizData.title;

let result = document.createElement("div");
result.className = "result";

function createChoices(choice, index, indexChoice) {
  const li = document.createElement("li");
  li.classList.add("li");
  const label = document.createElement("label");
  label.textContent = choice;

  const input = document.createElement("input");
  input.classList.add("input");
  input.setAttribute("name", index);
  input.setAttribute("type", "radio");
  input.setAttribute("value", indexChoice);
  label.prepend(input);
  li.append(label);
  return li;
}
quizData.questions.forEach((quizData, index) => {
  const section = document.createElement("section");
  section.classList.add("section");

  const h3 = document.createElement("h3");
  h3.textContent = quizData.question;
  section.append(h3);
  const ol = document.createElement("ol");
  quizData.choices.forEach((choice, choiceIndex) => {
    ol.append(createChoices(choice, index, choiceIndex));
  });
  section.append(ol);
  fragment.append(section);
});
form.prepend(fragment);
form.prepend(textHead);
form.addEventListener("submit", submitButton);

const taskQuestion = quizData.questions.map(el => {
  return el.answer;
});

function submitButton(elem) {
  event.preventDefault();
  const answerArr = [];
  // let inputs = form.elements.subscribtion.value;
  let inputs = document.querySelectorAll('input[type="radio"]:checked');
  [...inputs].map(el => answerArr.push(+el.value));

  compareAnsw(taskQuestion, answerArr);
}

// function submitButtonWithFormData(elem) {
//   event.preventDefault();
//   const answerArr = [];
//   const formData = new FormData(form);
//   const data = {};
//   formData.forEach((value, name) => {
//     data[name] = value;
//   });
//   [...formData].map(el => answerArr.push(+el.value));
//   compareAnsw(taskQuestion, answerArr);
// }

function compareAnsw(taskQuestion, answerArr) {
  let counterWrightAnsw = 0;
  let testCheck = 0;
  let prosentage;
  for (let i of taskQuestion) {
    if (i === answerArr[testCheck]) {
      // section.classList.add(section__wright);
      counterWrightAnsw += 1;
    // } else {
    //   section.classList.add(section__wrong);
    }
    testCheck += 1;
  }
  // for (let i of taskQuestion) {
  //   if (i === answerArr[testCheck]) {
  //     counterWrightAnsw += 1;
  //   }
  //   testCheck += 1;
  // }

  prosentage = (counterWrightAnsw / taskQuestion.length) * 100;
  if (answerArr.length < taskQuestion.length) {
    return (result.textContent = `You have to check all questions!`);
  }
  if (counterWrightAnsw >= 0.8 * taskQuestion.length) {
    return (result.textContent = `Your have ${Math.round(
      prosentage
    )}% of right answers, GOOD JOB! Wright ${counterWrightAnsw}, Wrong ${taskQuestion.length -
      counterWrightAnsw}`);
  } else {
    return (result.textContent = `Your have only ${Math.round(
      prosentage
    )}% of right answers, try again! Wright ${counterWrightAnsw}, Wrong ${taskQuestion.length -
      counterWrightAnsw}`);
  }
}
button.before(result);

// в объекте quizdata есть есть title (название теста) и есть массив вопросов questions
// каждый элемент массива  questions  - это объект (вопрос), состоящий из трех ключей: question (строка - сам вопрос), choices (массив вариантов ответов), answer (индекс правильного ответа в массиве choices)
/* 
1) Создать функцию createQuestion (динамически создать разметку страницы)
    1.1) Функция получает параметром объект quizdata
    1.2) Создать заголовок h2 в который поместить значение quizdata.title (строка - название теста)
    1.3) Пройтись циклом по quizdata.questions и на каждой итерации цикла динамически создавать DOM элемент секцию (section тег) состоящую из
        1.3.1) Заголовка h3, в который нужно поместить ключ question (строка - сам вопрос)
        1.3.2) Создать нумерованый список (тег ol)
        1.3.3) Внутри нумерованого списка задействовать цикл, который переберет массив choices и на каждой итерации создаст: 
            1. Тег li. 
            2. Внутри тега li: тег label. 
            3. Внутри тега label: тег input (type="radio", name="вопрос 1-6(question${index+1 массива questions})", value="число - (index массива choices)") и текст ответа (это строка - элемент массива choices)
2) Создать функцию для проверки ответов checkUserAnswer
    2.1) Функция должна запускаться при нажатии на кнопку button type="submit" (повесить функцию слушателем на эту кнопку)
    2.2) Функция должна создать массив ответов юзера (userAnswer = [1, 2, 3, 2, 4, 1]) - собрать в массив все value тегов инпут которые выбраны (как это сделоть смотри вебинар Вебинар 16. События - минута 46-57)
    2.3) Функция должна создать масси правильных ответов (rightAnswer = [1, 2, 3, 2, 4, 1])
    2.4) Запустить функцию compareArr с массивами userAnswer и rightAnswer (compareAnswer(userAnswer, rightAnswer))
3) Создать функцию для сравнения двух массивов compareArr
    3.1) Функция должна принимать параметрами два массива
    3.2) Создавать счетчик
    3.3) Функция должна поиндексно сравнивать значения массивов и если они равны увеличивать значение счетчика на 16.66% 
    3.4) Динамически создать параграф (тег p) и в его textContent помещать в шаблонной строке сообщение:
        3.4.1) Если значение счетчика больше 80 - `Тест пройден успешно, оценка - ${значение счетчика (обернуть в Math.ceil())}%`  
        3.4.2) Если значение счетчика меньше 80 - `Тест провален, оценка - ${значение счетчика (обернуть в Math.ceil())}%. Попробуй еще раз.` 
    3.5) Динамически созданный параграф (тег - p) поместить под форму
*/
