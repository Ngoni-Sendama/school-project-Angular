import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  userAnswers: string[] = [];
  score = 0;
  submitted = false;

  submitQuiz() {
    this.score = 0;
    this.questions.forEach((q, i) => {
      if (this.userAnswers[i] === q.answer) {
        this.score++;
      }
    });
    this.submitted = true;
  }
}
