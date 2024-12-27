import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../models/article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Optimización
})
export class ArticleItemComponent {
  @Input() article!: Article;
  @Output() quantityChange = new EventEmitter<{ id: number, quantity: number }>();

  // Emitir el evento cuando se incremente la cantidad
  incrementQuantity() {
    if (this.article.isOnSale) {
      this.quantityChange.emit({
        id: this.article.id,
        quantity: this.article.quantityInCart + 1
      });
    }
  }

  // Emitir el evento cuando se decremente la cantidad
  decrementQuantity() {
    if (this.article.isOnSale && this.article.quantityInCart > 0) {
      this.quantityChange.emit({
        id: this.article.id,
        quantity: this.article.quantityInCart - 1
      });
    }
  }
}


