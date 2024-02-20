import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: "pdf",
    loadChildren: () => import('./pages/pdf-view/pdf-view.module').then(m => m.PdfViewModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
