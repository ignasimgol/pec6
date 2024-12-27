import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-new-template',
  standalone: true, // Hacemos que sea standalone
  imports: [FormsModule, CommonModule], // Importamos FormsModule para ngModel
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {
  article = {
    name: '',
    price: '',
    imageUrl: '',
    forSale: false
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Artículo enviado:', this.article);
    } else {
      console.error('Formulario inválido');
    }
  }
}
