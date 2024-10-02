import { Component, Input } from '@angular/core';
import { Article } from '../models/article.class';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss'
})
export class ArticleDetailComponent {

  @Input() article!: Article;


}