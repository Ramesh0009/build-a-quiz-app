const quizData = [{
    question: "Java Script entities start with ____________ and end with _____________?",
    a: "Semicolon, colon",
    b: "Semicolon, Ampersand",
    c: "Ampersand, colon",
    d: "Ampersand, semicolon",
    correct: "d",
},
{
    question: "How to append a value to an array of Java Script?",
    a: "arr[arr.length] = value ",
    b: "arr[arr.length+1] = new Arrays()",
    c: "arr[arr.length-1] = value",
    d: "arr[arr.length*1] = value",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What is the alternate name for Java script?",
    a: "LimeScript",
    b: "Both a and d",
    c: "ECMScript",
    d: "ECMAScript ",
    correct: "d",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hello , dear nice try best of luck ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);