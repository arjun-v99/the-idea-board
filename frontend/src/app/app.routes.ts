import { Routes } from '@angular/router';
import { IdeaBoard } from './idea-board/idea-board';
import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },
  {
    path: 'app',
    component: IdeaBoard,
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];
