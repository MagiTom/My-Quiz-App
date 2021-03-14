import { questions } from "./questions.js";

export class Ui {
    constructor(question) {
        this.question = question;
        this.answers = question.answers;
        this.choices = [...document.querySelectorAll('.btn')];
        this.questionContent = document.querySelector('.quiz__question p');
    }

    renderContent() {
        for (let i = 0; i < this.choices.length; i++) {
            this.choices[i].textContent = this.answers[i].text;
            this.choices[i].classList = 'btn';
            this.choices[i].classList.add(`${this.answers[i].correct}`);
        }

        this.questionContent.textContent = this.question.question;
    }


    displayScore(score) {
        this.questionContent.textContent = `Your Score is ${score}`
    }

    displayProgress(pageNumber, quiz) {
        const quizProgress = document.querySelector('.question-number');
        const quizLength = document.querySelector('.quiz-length');
        quizProgress.textContent = pageNumber;
        quizLength.textContent = quiz - 1;
    }
}

