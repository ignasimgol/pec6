import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { DefaultImagePipe } from './app/pipes/default-image.pipe';
import { PriceFormatterPipe } from './app/pipes/price-formatter.pipe';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(), 
    DefaultImagePipe,
    PriceFormatterPipe
  ],
}).catch(err => console.error(err));
