import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  user: User = {
    name: 'Pimpoye',
    isAdmin: false,
  }

  article = {
    title: 'Les jeux de société',
    author: 'Moi même',
    content: 'Ca parle à qui? ',
    image: 'https://www.ville-martignas.fr/medias/2024/04/illustration-soiree-jeux-de-societe_1-1701696528.jpg',
    isPublished: true,
    isAdmin: false,
    comment: ''
  };

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

  powerUp(): void {
    this.user.isAdmin = !this.user.isAdmin;
  }
}