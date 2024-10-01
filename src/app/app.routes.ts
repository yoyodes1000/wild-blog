import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticleComponent } from './article/article.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

export const routes: Routes = [
    { path: '', component: ArticleComponent },
    { path: 'article/:id', component: ArticlePageComponent },
    { path: 'form', component: ContactFormComponent },
    { path: 'sign-up', component: SignupFormComponent },
    { path: '**', component: NotFoundComponent },

];
