import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticleComponent } from './article/article.component';

export const routes: Routes = [
    { path: '', component: ArticleComponent },
    { path: 'article/:id', component: ArticlePageComponent },
    { path: '**', component: NotFoundComponent },
];
