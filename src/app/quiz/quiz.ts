import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  questions = [
    {
      question: 'What is Angular?',
      options: ['Framework', 'Library', 'Database', 'Browser'],
      answer: 'Framework'
    },
    {
      question: 'Which language is Angular written in?',
      options: ['Java', 'PHP', 'TypeScript', 'Python'],
      answer: 'TypeScript'
    },
    {
      question: 'What is used for routing in Angular?',
      options: ['RouterModule', 'HttpClient', 'FormsModule', 'NgModel'],
      answer: 'RouterModule'
    },
    {
      question: 'Which directive is used for loops?',
      options: ['*ngIf', '*ngFor', '*ngSwitch', '*ngClass'],
      answer: '*ngFor'
    },
    {
      question: 'Angular is maintained by?',
      options: ['Facebook', 'Microsoft', 'Google', 'Amazon'],
      answer: 'Google'
    }
  ];

  currentIndex = 0;
  selectedAnswer: string | null = null;
  userAnswers: string[] = [];
  checked = false;
  submitted = false;
  score = 0;

  selectAnswer(option: string) {
    if (!this.checked) {
      this.selectedAnswer = option;
    }
  }

  checkAnswer() {
    if (!this.selectedAnswer) return;

    this.userAnswers[this.currentIndex] = this.selectedAnswer;
    this.checked = true;
  }

  next() {
    this.currentIndex++;
    this.selectedAnswer = this.userAnswers[this.currentIndex] ?? null;
    this.checked = false;
  }

  submitQuiz() {
    this.score = 0;
    this.questions.forEach((q, i) => {
      if (this.userAnswers[i] === q.answer) {
        this.score++;
      }
    });
    this.submitted = true;
  }

  isCorrect(option: string) {
    return (
      this.checked &&
      option === this.questions[this.currentIndex].answer
    );
  }

  isWrong(option: string) {
    return (
      this.checked &&
      option === this.selectedAnswer &&
      option !== this.questions[this.currentIndex].answer
    );
  }
}
