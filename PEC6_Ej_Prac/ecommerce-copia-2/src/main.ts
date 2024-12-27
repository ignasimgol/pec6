import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Importa el arreglo correctamente

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Usa el arreglo de rutas aquí
  ],
}).catch(err => console.error(err));
