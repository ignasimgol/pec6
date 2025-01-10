import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { ArticleService } from '../services/article-service.service';
import { Article } from '../models/article.model';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-article-list',
  standalone: true,
  template: `
    <div>
      <h2>Lista de Artículos</h2>
      <input 
        type="text" 
        placeholder="Buscar artículos..." 
        (input)="onInput($event)" 
        style="margin-bottom: 10px; padding: 5px; width: 100%;"
      />
      <div class="article-list">
        <div *ngFor="let article of filteredArticles$ | async">
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
    .article-list { display: flex; flex-wrap: wrap; justify-content: center; }
  `],
  imports: [CommonModule, ArticleItemComponent]
})
export class ArticleListComponent {
  private searchTerm$ = new BehaviorSubject<string>('');
  articles$ = this.articleService.getArticles();
  filteredArticles$: Observable<Article[]>;

  constructor(private articleService: ArticleService) {
    this.filteredArticles$ = combineLatest([this.articles$, this.searchTerm$]).pipe(
      map(([articles, searchTerm]) =>
        articles.filter(article =>
          article.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.onSearch(inputElement.value);
  }

  onSearch(term: string) {
    this.searchTerm$.next(term);
  }

  onQuantityChange(event: { id: number, quantity: number }) {
    this.articleService.updateArticleQuantity(event.id, event.quantity);
  }
}
