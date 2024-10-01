import { Injectable } from '@angular/core';
import { Article } from './article.class';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleList: Article[] = [
    new Article(1, 'Angular', 'John Doe', 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.', 'https://angular.io/assets/images/logos/angular/angular.png', true, 'Great article!'),
    new Article(2, 'React', 'Jane Doe', 'React is a JavaScript library for building user interfaces.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', true, 'Great article!'),
    new Article(3, 'Vue', 'John Smith', 'Vue.js is a progressive JavaScript framework for building user interfaces.', 'https://vuejs.org/images/logo.png', false, 'Great article!'),
    new Article(4, 'Svelte', 'Jane Smith', 'Svelte is a radical new approach to building user interfaces.', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg', true, 'Great article!'),
    new Article(5, 'Ember', 'Johnny Doe', 'Ember.js is an open-source JavaScript web framework.', 'https://upload.wikimedia.org/wikipedia/fr/6/69/Ember.js_Logo_and_Mascot.png', false, 'Great article!'),
    new Article(6, 'Symfony', 'Janet Doe', 'Symfony is a set of reusable PHP components and a PHP framework for web projects.', 'https://symfony.com/logos/symfony_black_03.png', true, 'Great article!'),
];

  constructor() { }
}
