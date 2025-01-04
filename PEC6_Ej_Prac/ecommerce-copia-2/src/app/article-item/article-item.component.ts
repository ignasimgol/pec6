import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../models/article.model';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { PriceFormatterPipe } from '../pipes/price-formatter.pipe';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe, PriceFormatterPipe],  // Coma agregada
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Optimización
})
export class ArticleItemComponent {
  @Input() article!: Article;
  @Output() quantityChange = new EventEmitter<{ id: number, quantity: number }>();

  incrementQuantity() {
    if (this.article.isOnSale) {
      this.quantityChange.emit({
        id: this.article.id,
        quantity: this.article.quantityInCart + 1 // Aumenta la cantidad
      });
    }
  }

  decrementQuantity() {
    if (this.article.isOnSale && this.article.quantityInCart > 0) {
      this.quantityChange.emit({
        id: this.article.id,
        quantity: this.article.quantityInCart - 1 // Disminuye la cantidad
      });
    }
  }
}
