import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FooterComponent } from "./footer/footer.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, ArticleComponent, NotFoundComponent, FooterComponent, HomePageComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
