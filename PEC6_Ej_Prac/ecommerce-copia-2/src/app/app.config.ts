import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { PriceFormatterPipe } from './pipes/price-formatter.pipe';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    DefaultImagePipe,
    PriceFormatterPipe
  ]
};