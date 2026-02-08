import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import {Quiz} from './quiz/quiz'

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  {path: 'quiz', component: Quiz},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];