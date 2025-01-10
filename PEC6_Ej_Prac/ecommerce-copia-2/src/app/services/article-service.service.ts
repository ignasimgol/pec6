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

  // Método para obtener los artículos desde la API
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl).pipe(
      tap((articles) => {
        console.log('Emitiendo nuevos artículos:', articles);
        this.articlesSubject.next(articles); // Actualiza el BehaviorSubject con los nuevos artículos
      })
    );
  }

  // Método para actualizar la cantidad de artículos en el carrito
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
  
        // Refresca la lista de artículos, para asegurarse de que no haya discrepancias
        this.getArticles().subscribe();
      })
    );
  }
  
  // Método para agregar un nuevo artículo
  addNewArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article).pipe(
      tap((newArticle) => {
        const currentArticles = this.articlesSubject.value;
        this.articlesSubject.next([...currentArticles, newArticle]);
      })
    );
  }
}
