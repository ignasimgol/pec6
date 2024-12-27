import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // Añade RouterModule a las importaciones
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Corrige styleUrl a styleUrls
})
export class NavbarComponent {
}
