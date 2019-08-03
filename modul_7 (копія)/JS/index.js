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
  const inputs = document.querySelectorAll('input[type="radio"]:checked');
  [...inputs].map(el => answerArr.push(+el.value));

  compareAnsw(taskQuestion, answerArr);
}
function compareAnsw(taskQuestion, answerArr) {
  let counterWrightAnsw = 0;
  let testCheck = 0;
  let prosentage;
  for (let i of taskQuestion) {
    if (i === answerArr[testCheck]) {
      counterWrightAnsw += 1;
    }
    testCheck += 1;
  }
  
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
    )}% of right answers, try again! Right ${counterWrightAnsw}, Wrong ${taskQuestion.length -
      counterWrightAnsw}`);
  }
}
button.before(result);
