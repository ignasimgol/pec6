import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { Article } from '../models/article.model';
import { ArticleQuantityChange } from '../models/article-quantity-change.model';

@Component({
  standalone: true,
  selector: 'app-article-list',
  template: `
    <!-- Template en línea -->
    <div>
      <h2>Lista de Artículos</h2>
      <div *ngFor="let article of articles">
        <app-article-item 
          [article]="article" 
          (quantityChange)="onQuantityChange($event)">
        </app-article-item>
      </div>
    </div>
  `,
  styles: [`
    /* Estilos en línea */
    h2 {
      color: #333;
    }
    div {
      margin: 10px;
    }
  `],
  imports: [CommonModule, ArticleItemComponent]
})
export class ArticleListComponent {
  articles: Article[] = [
    { id: 1, name: 'Artículo 1', imageUrl: '', price: 10.99, isOnSale: true, quantityInCart: 0 },
    { id: 2, name: 'Artículo 2', imageUrl: '', price: 15.49, isOnSale: true, quantityInCart: 0 },
    { id: 3, name: 'Artículo 3', imageUrl: '', price: 8.99, isOnSale: false, quantityInCart: 0 }
  ];

  // Manejar el evento de cambio de cantidad
  onQuantityChange(change: ArticleQuantityChange) {
    console.log(`Artículo: ${change.article.name}, Nueva cantidad: ${change.quantity}`);
    // Aquí puedes manejar la lógica del cambio, como actualizar una lista de carrito
  }
}
