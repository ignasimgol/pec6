import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { ArticleService } from '../services/article-service.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-list',
  standalone: true,
  template: `
    <div>
      <h2>Lista de Artículos</h2>
      <div class="article-list">
        <div *ngFor="let article of articles">
          <app-article-item 
            [article]="article" 
            (quantityChange)="onQuantityChange($event)">
          </app-article-item>
        </div>
      </div>
    </div>
  `,
  styles: [` 
    h2 { color: #333; }
    div { margin: 10px; }
    .article-list { display: flex; flex-direction: row; align-items: center; justify-content: center; width: 100%; height: 100%; }
  `],
  imports: [CommonModule, ArticleItemComponent]
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.articles$.subscribe(articles => {
      this.articles = articles;
    });
  }

  onQuantityChange(event: { id: number, quantity: number }) {
    this.articleService.updateQuantity(event.id, event.quantity);
  }
}
