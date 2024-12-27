import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([
    { id: 1, name: 'Game Boy', imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d567e772955689.5bf95a82d957d.png', price: 100.99, isOnSale: true, quantityInCart: 0 },
    { id: 2, name: 'Switch', imageUrl: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_500/ncom/en_US/switch/site-design-update/photo01', price: 150.49, isOnSale: true, quantityInCart: 0 },
    { id: 3, name: 'Play Station', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/NES-Console-Set.png/800px-NES-Console-Set.png', price: 89.99, isOnSale: false, quantityInCart: 0 }
  ]);

  constructor() { }

  // Método para obtener los artículos como un Observable
  getArticles(): Observable<Article[]> {
    return this.articlesSubject.asObservable();
  }

  // Método para actualizar la cantidad de artículos en el carrito
  updateArticleQuantity(id: number, quantity: number): void {
    const currentArticles = this.articlesSubject.value;
    const article = currentArticles.find(a => a.id === id);
    if (article) {
      article.quantityInCart = quantity;
      this.articlesSubject.next([...currentArticles]);
    }
  }

  // Método para agregar un nuevo artículo
  addNewArticle(article: Article): void {
    const currentArticles = this.articlesSubject.value;
    // Asigna un nuevo ID basado en el último artículo
    const newId = currentArticles.length > 0 ? currentArticles[currentArticles.length - 1].id + 1 : 1;
    const newArticle = { ...article, id: newId };
    this.articlesSubject.next([...currentArticles, newArticle]);
  }
}
