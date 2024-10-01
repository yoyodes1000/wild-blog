import { Component, inject } from '@angular/core';
import { Article } from '../models/article.class';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { ArticleService } from '../models/article.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {

route: ActivatedRoute = inject(ActivatedRoute);
articleService: ArticleService = inject(ArticleService);
articleList: Article[] = this.articleService.articleList;
articleId!: number;

ngOnInit(): void {
  this.route.paramMap.subscribe((params: ParamMap) => {
    this.articleId = Number(params.get('id'));
  });
}

getArticle(): Article {
  return this.articleList.find(article => article.id === this.articleId) as Article;
}

getArticleById(id: number): Article {
  return this.articleList.find(article => article.id === id) as Article;
}

}
