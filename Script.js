const quizDB = [

    {

        question: "Q1 : What is part of a database that holds only one type of information ?",

        A: "Report",
        B: "Field",
        C: "Record",
        D: "File",

        ans: "ans2"
    },

    {

        question: "Q2 :In which decade with the first transatlantic radio broadcast occur ?",

        A: "1850 s",
        B: "1860 s",
        C: "1870 s",
        D: "1900 s",

        ans: "ans4"
    },



    {
        question: "Q3 :Who developed Yahoo ?",

        A: "Dennis Ritchie & Ken Thompson",
        B: "David Filo & Jerry Yang",
        C: "Vint Cerf & Robert Kahn",
        D: "Steve Case & Jeff Bezos",

        ans: "ans4"
    },


    {
        question: "Q4 :What does VVVF stand for ?",

        A: "Variant Voltage Vile Frequency",
        B: "Variable Velocity Variable Fun",
        C: "Very Very Vicious Frequency",
        D: "Variable Voltage Variable Frequency",
        ans: "ans4"
    },



];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

let questioncount = 0;
let score = 0;

const loadQuestion = () => {

    const questionlist = quizDB[questioncount];
    // question.innerHTML = questionlist.question;



    question.innerText = questionlist.question;
    option1.innerHTML = questionlist.A;
    option2.innerHTML = questionlist.B;
    option3.innerHTML = questionlist.C;
    option4.innerHTML = questionlist.D;
}
loadQuestion();


const getCheckAnswer = () => {
    let answer;
    answers.forEach((currentelement) => {
        if (currentelement.checked) {
            answer = currentelement.id;

        }

    });
    return answer;

};
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    if (checkedAnswer === quizDB[questioncount].ans) {
        score++;
    }
    questioncount++;
    if (questioncount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = ` 
        <h3> Your Score :  ${score}
        /${quizDB.length} </h3>
            
        <button class = "btn" onclick = "location.reload()"> Play Again </button>
        `;
        showScore.classList.remove('scoreArea');
    }
});