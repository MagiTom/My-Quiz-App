import { questions } from "./questions.js";

export class Ui {
    constructor(question) {
        this.question = question;
        this.answers = question.answers;
        this.choices = [...document.querySelectorAll('.btn')];
    }

    renderContent() {
        for (let i = 0; i < this.choices.length; i++) {
            this.choices[i].textContent = this.answers[i].text;
            if (this.answers[i].correct === true) {
                this.choices[i].classList.add('true')
            }
        }

        document.querySelector('.quiz__question p').textContent = this.question.question;
    }
    

    showResult() {
       this.choices.forEach(choice => {
           choice.style.display = "none";
       })
    }
}

