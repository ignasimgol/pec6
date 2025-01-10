import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl: string = 'http://localhost:3000/api/articles';
  private articlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl).pipe(
      tap((articles) => {
        console.log('Emitiendo nuevos artículos:', articles);
        this.articlesSubject.next(articles);
      })
    );
  }

  updateArticleQuantity(id: number, quantity: number): Observable<Article> {
    const url = `${this.apiUrl}/${id}`;
    console.log(`Updating article with ID ${id} to quantity ${quantity}`);
  
    return this.http.patch<Article>(url, { quantityInCart: quantity }).pipe(
      tap((updatedArticle) => {
        console.log('Updated article:', updatedArticle);
  
        // Aquí estamos actualizando solo ese artículo en la lista
        const updatedArticles = this.articlesSubject.value.map(article =>
          article.id === id
            ? { ...article, quantityInCart: updatedArticle.quantityInCart }
            : article
        );
        this.articlesSubject.next(updatedArticles);
  
        this.getArticles().subscribe();
      })
    );
  }
  
  
  addNewArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article).pipe(
      tap((newArticle) => {
        const currentArticles = this.articlesSubject.value;
        this.articlesSubject.next([...currentArticles, newArticle]);
      })
    );
  }
}
