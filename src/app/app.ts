import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  template: `
    <nav class="bg-white py-3 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <!-- Logo -->
        <a routerLink="/" class="text-xl font-bold text-gray-800">
      <img src="https://cdn.vectorstock.com/i/500p/45/39/quiz-game-icon-speech-bubble-vector-47454539.jpg" class="w-16 h-auto" alt="" />

        </a>

        <!-- Links -->
        <div class="flex space-x-6">
          
          <a
          routerLink="/"
          routerLinkActive="text-[#1c4544] border-b-2 border-green-600"
          class="flex items-center gap-2 text-gray-600 hover:text-[#1c4544] pb-1 text-xl"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <!-- Home Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
        </svg>

          Home
        </a>


          <a
            routerLink="/about"
            routerLinkActive="text-green-600 border-b-2 border-green-600 "
            class="text-gray-600 hover:text-[#1c4544] pb-1 text-xl"
          >
            About
          </a>

          <a
            routerLink="/quiz"
            routerLinkActive="text-[#1c4544] border-b-2 border-green-600 "
            class="text-gray-600 hover:text-[#1c4544] pb-1 text-xl"
          >
            Start Quiz
          </a>
        </div>
      </div>
    </nav>

    <main class="py-6">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
