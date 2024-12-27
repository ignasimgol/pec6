import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleItemComponent } from './article-item/article-item.component';
import { Article } from './models/article.model';
import { ArticleListComponent } from './article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, ArticleItemComponent, ArticleListComponent, NavbarComponent, ArticleNewTemplateComponent], // Make sure ArticleItemComponent is imported
})

export class AppComponent {
  title = 'ecommerce';

}
