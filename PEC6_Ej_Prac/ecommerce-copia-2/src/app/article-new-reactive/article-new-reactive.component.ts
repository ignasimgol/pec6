import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from '../services/article-service.service';
import { Article } from '../models/article.model';

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

  onSubmit() {
    this.submitted = true;
    if (this.articleForm.valid) {
      const newArticle: Article = {
        id: 0,
        name: this.articleForm.value.name,
        imageUrl: this.articleForm.value.imageUrl,
        price: this.articleForm.value.price,
        isOnSale: this.articleForm.value.forSale,
        quantityInCart: 0
      };
      this.articleService.addArticle(newArticle);
      this.articleForm.reset();
      this.submitted = false;
    }
  }

  private nameArticleValidator(control: any) {
    const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake', 'prueba', 'test', 'mock', 'fake'];
    return forbiddenNames.includes(control.value)
      ? { forbiddenName: true }
      : null;
  }
}
