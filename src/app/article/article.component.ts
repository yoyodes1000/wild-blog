import { Component, inject } from '@angular/core';
import { Article } from '../models/article.class';
import { Router, RouterLink } from '@angular/router';
import { ArticleService } from '../models/article.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  router: Router = inject(Router);
  articleService: ArticleService = inject(ArticleService);
  articleList: Article[] = this.articleService.articleList;
  
  togglePublication(article: Article): void {
    article.isPublished = !article.isPublished;
  }

  goToArticle(id: number): void {
    this.router.navigate(['article', id]);
  }
}