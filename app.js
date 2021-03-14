import { Ui } from "./ui.js";
import { questions } from "./questions.js";

let nexPage = 0;
let score = 0;
let indexQuestion = 0;

console.log(questions);

function startQuiz() {

    let ui = new Ui(questions[indexQuestion]);
    ui.renderContent();

    ui.choices.forEach((choice) => {
        choice.addEventListener('click', function (e) {
            if (e.target.classList.contains('true')) {
                score++;
            }
            nexPage++;
            indexQuestion++;
            
            console.log(indexQuestion);
            endQuiz(ui);
        })
    })

}






function endQuiz(ui) {
    if (nexPage === questions.length) {
        ui.showResult();
        nexPage = 0;
        indexQuestion = 0;

    }
}




document.querySelector('.start').addEventListener('click', startQuiz);