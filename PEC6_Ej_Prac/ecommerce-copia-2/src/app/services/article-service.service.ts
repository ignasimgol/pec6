import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [
    { id: 1, name: 'Game Boy', imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d567e772955689.5bf95a82d957d.png', price: 100.99, isOnSale: true, quantityInCart: 0 },
    { id: 2, name: 'Switch', imageUrl: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_500/ncom/en_US/switch/site-design-update/photo01', price: 150.49, isOnSale: true, quantityInCart: 0 },
    { id: 3, name: 'Play Station', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/NES-Console-Set.png/800px-NES-Console-Set.png', price: 89.99, isOnSale: false, quantityInCart: 0 }
  ];

  private articlesSubject = new BehaviorSubject<Article[]>(this.articles);
  articles$ = this.articlesSubject.asObservable();

  updateQuantity(articleId: number, quantity: number): void {
    const article = this.articles.find(a => a.id === articleId);
    if (article) {
      article.quantityInCart = quantity;
      this.articlesSubject.next([...this.articles]);
    }
  }

  addArticle(newArticle: Article): void {
    this.articles.push({ ...newArticle, id: this.articles.length + 1 });
    this.articlesSubject.next([...this.articles]);
  }
}
