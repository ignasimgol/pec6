import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';

export const routes: Routes = [
  { path: '', component: ArticleListComponent }, // Ruta inicial
  { path: 'articles', component: ArticleListComponent }, // Ruta lista de artículos
  {
    path: 'new-article-template',
    loadComponent: () =>
      import('./article-new-template/article-new-template.component').then(
        (m) => m.ArticleNewTemplateComponent
      ),
  },
  {
    path: 'new-article-reactive',
    loadComponent: () =>
      import('./article-new-reactive/article-new-reactive.component').then(
        (m) => m.ArticleNewReactiveComponent
      ),
  },
  { path: '**', redirectTo: '' }, // Ruta por defecto para no encontrados
];

