## Preguntas sobre Angular

### a. ¿Cuál es la diferencia entre definir un servicio usando el decorador `@Injectable` o `@NgModule`?
**Referencia:** [Angular: Providers](https://angular.io/guide/provider)

- **`@Injectable`**: Es el método más flexible y moderno para definir un servicio. Cuando se utiliza con el parámetro `providedIn: 'root'`, Angular gestiona el servicio globalmente, simplificando su configuración.
- **`@NgModule`**: Se usa tradicionalmente para proporcionar servicios dentro de un contexto de módulo. Es útil si deseas controlar explícitamente el alcance y la instanciación de servicios a nivel de módulo.

---

### b. ¿Qué otras opciones admite el decorador `@Injectable` para la propiedad `providedIn`? ¿Para qué sirven estas configuraciones?
**Referencia:** [Improved Dependency Injection](https://dev.to/christiankohler/improved-dependeny-injection-with-the-new-providedin-scopes-any-and-platform-30bb)

En Angular, el decorador `@Injectable` permite definir el alcance (provisión) de un servicio a través de la propiedad `providedIn`. Las opciones disponibles son:

- **`'root'`**:  
  El servicio está disponible globalmente en toda la aplicación. Es la opción más común y permite que Angular maneje la provisión automáticamente.

- **`'platform'`**:  
  El servicio está disponible en toda la plataforma (por ejemplo, en múltiples aplicaciones Angular dentro de la misma plataforma). Se utiliza en aplicaciones multiplataforma.

- **`'any'`**:  
  Se crea una nueva instancia del servicio por cada módulo que lo importe. Es útil cuando se desea evitar una única instancia global y que cada módulo tenga su propia instancia.

- **`'none'`**:  
  El servicio no se proporciona automáticamente. Debe ser agregado manualmente en los `providers` de un módulo o componente. Es útil cuando se requiere control total sobre la provisión del servicio.

---

### Resumen:
- `providedIn: 'root'` es la opción más común para la mayoría de los servicios.
- Las demás opciones permiten un control más detallado sobre el alcance y el ciclo de vida del servicio.
