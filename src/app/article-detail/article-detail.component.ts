import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  isVisible: boolean = false;
  @Input() article!: Article;
  @Output() isLiked: EventEmitter<string> = new EventEmitter<string>();

  likeArticle(article: Article) {
    article.isLiked = !article.isLiked;
    if (article.isLiked) {
      this.isLiked.emit(article.title + ' has been liked!');
    } else {
      this.isLiked.emit(article.title + ' has been unliked!');
    }
  }

  showModal() {
    this.isVisible = !this.isVisible;
    if (!this.isVisible) {
      this.isLiked.emit('');
    }
  }
}