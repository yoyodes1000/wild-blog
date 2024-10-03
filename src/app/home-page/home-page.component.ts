import { Component } from '@angular/core';
import { Article } from '../models/article.class';
import { ArticleDetailComponent } from "../article-detail/article-detail.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleDetailComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  articleListToChild: Article[] = [
    new Article(
      1, 
      'Angular', 
      'John Doe', 
      "Développé par Google, Angular est un framework front-end complet et structuré basé sur TypeScript. Il est conçu pour construire des applications web monopages (SPA) et fournit une architecture de composants, une gestion de la dépendance, ainsi qu'un système robuste de routing. Angular utilise un 'two-way data binding' (liaison bidirectionnelle), ce qui facilite la synchronisation des données entre le modèle et la vue. Il est idéal pour les applications à grande échelle grâce à sa structure stricte et à ses nombreux outils intégrés..", 
      'https://angular.io/assets/images/logos/angular/angular.png', 
      true, 
      'Great article!'),
    new Article(
      2, 
      'React', 
      'Jane Doe',
       "Créé par Facebook, React est une bibliothèque JavaScript très populaire pour la création d'interfaces utilisateur. Il repose sur une approche de composants réutilisables et un 'one-way data binding' (liaison unidirectionnelle). React est souvent préféré pour sa flexibilité, car il se concentre uniquement sur la vue (le 'V' du modèle MVC), ce qui permet aux développeurs de l'intégrer facilement avec d'autres bibliothèques et outils.",
       'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', 
       true, 
       'Great article!'),
    new Article(
      3, 
      'Vue', 
      'John Smith',
      "Vue est un framework progressif qui combine certains des meilleurs aspects d’Angular et de React, tout en restant léger et simple à utiliser. Il utilise également une architecture basée sur des composants et prend en charge le 'two-way data binding'. Vue est particulièrement apprécié pour sa facilité d’apprentissage et sa souplesse, ce qui le rend adapté aussi bien pour des petits projets que pour des applications complexes.", 
       'https://vuejs.org/images/logo.png', 
       false, 
       'Great article!'),
    new Article(
      4, 
      'Svelte', 
      'Jane Smith',
      "Svelte est un framework JavaScript innovant qui se distingue des autres par son approche de compilation. Contrairement à Angular, React ou Vue, Svelte compile les composants au moment du build, éliminant ainsi la nécessité d'un runtime lourd dans le navigateur. Cela se traduit par des applications plus rapides et plus légères. Svelte offre une syntaxe simple et réactive, et est apprécié pour son faible encombrement et sa performance élevée.", 
       'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg', 
       true, 
       'Great article!'),
    new Article(
      5, 
      'Ember', 
      'Johnny Doe', 
      "Ember est un framework JavaScript opinioné pour la création d'applications web ambitieuses. Il met en avant la convention plutôt que la configuration, offrant une structure stricte et un ensemble d’outils intégrés pour développer rapidement des applications complexes. Ember se distingue par son écosystème complet (comme son système de routing avancé) et sa communauté active. Il est souvent utilisé pour des applications à grande échelle nécessitant de la stabilité.", 
      'https://upload.wikimedia.org/wikipedia/fr/6/69/Ember.js_Logo_and_Mascot.png',
      false, 
      'Great article!'),
    new Article(
      6, 
      'Symfony', 
      'Janet Doe', 
      "Symfony est un framework PHP backend puissant et modulable utilisé pour construire des applications web robustes et scalables. Il repose sur des composants réutilisables et suit le design pattern MVC (Modèle-Vue-Contrôleur). Connu pour sa flexibilité et sa stabilité, Symfony est souvent utilisé dans des applications professionnelles et à grande échelle. Il propose aussi un large écosystème, notamment des outils comme Doctrine pour la gestion des bases de données et Twig pour le templating.", 
      'https://symfony.com/logos/symfony_black_03.png', 
      true, 
      'Great article!'),
  ];

  isLiked: string = '';

    likeArticle(event: string) {
      this.isLiked = event;
    }

}