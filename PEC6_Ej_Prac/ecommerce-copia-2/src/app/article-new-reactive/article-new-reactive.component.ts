import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from '../services/article-service.service';

@Component({
  selector: 'app-article-new-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {
  articleForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      name: [
        '',
        [Validators.required, this.nameArticleValidator]
      ],
      price: [
        '',
        [
          Validators.required,
          Validators.min(0.1),
        ]
      ],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        ]
      ],
      forSale: [false]
    });
  }

  get name() {
    return this.articleForm.get('name');
  }

  get price() {
    return this.articleForm.get('price');
  }

  get imageUrl() {
    return this.articleForm.get('imageUrl');
  }

  get forSale() {
    return this.articleForm.get('forSale');
  }

  onSubmit() {
    this.submitted = true;
    if (this.articleForm.valid) {
      const article = this.articleForm.value;
      this.articleService.addNewArticle(article); // Llamada al servicio para agregar el artículo
    } else {
      console.error('Formulario no válido');
    }
  }

  private nameArticleValidator(control: any) {
    const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake', 'prueba', 'test', 'mock', 'fake'];
    return forbiddenNames.includes(control.value)
      ? { forbiddenName: true }
      : null;
  }
}
