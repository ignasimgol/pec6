import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core'; // Import necesario
import { DefaultImagePipe } from './app/pipes/default-image.pipe';
import { PriceFormatterPipe } from './app/pipes/price-formatter.pipe';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(DefaultImagePipe, PriceFormatterPipe) // Importa los pipes
  ],
}).catch(err => console.error(err));
