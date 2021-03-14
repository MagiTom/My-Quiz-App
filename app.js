import { Ui } from "./ui.js";
import { questions } from "./questions.js";

let nexPage = 1;
let score = 0;
let indexQuestion = 0;
let result = false;
const startBtn = document.querySelector('.start');
const progress = document.querySelector('.quiz__progress');

function startQuiz() {
 
    result = false;
    indexQuestion = 0;
    nexPage = 1;
    score = 0;
    let ui = new Ui(questions[indexQuestion]);
    startBtn.style.display = 'none';
    progress.style.visibility = 'visible';
    ui.choices.forEach(choice => {
        choice.style.display = "block";
    });

    ui.renderContent(ui);
    ui.displayProgress(nexPage, questions.length)
    eventListener(ui)
}

function eventListener(ui) {

    ui.choices.forEach((choice) => {
        choice.addEventListener('click', generateNextPage)
    })
}


function generateNextPage(e) {
    if (e.target.classList.contains('true')) {
        console.log(e.target)
        score++;
    }
        nexPage++;
        indexQuestion++;
        let ui = new Ui(questions[indexQuestion]);
        ui.displayProgress(nexPage, questions.length)
        ui.renderContent(ui);
        endQuiz(ui);
}

function endQuiz(ui) {
 
    if(indexQuestion >= questions.length - 1){
    progress.style.visibility = 'hidden';
    ui.choices.forEach(choice => {
        choice.style.display = "none";
    });
    startBtn.style.display = 'block';
    startBtn.textContent = "try again";
    ui.displayScore(score);
}
  }


startBtn.addEventListener('click', startQuiz);