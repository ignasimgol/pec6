### a. ¿Cuál es la diferencia entre definir un servicio usando el decorador @Injectable o @NgModule? Referencia: https://angular.io/guide/provider

- @Injectable es el método más flexible y moderno para definir un servicio. Cuando se usa con el parámetro providedIn: 'root', Angular lo maneja globalmente, simplificando la configuración del servicio.

- @NgModule se usa tradicionalmente para proporcionar servicios dentro de un contexto de módulo, y puede ser útil si deseas controlar explícitamente el alcance y la instanciación de servicios a nivel de módulo.

### b. ¿Qué otras opciones admiten el decorador @Injectable para la propiedad ProvidedIn? ¿Para qué sirven las otras configuraciones?
Referencia: https://dev.to/christiankohler/improved-dependeny-injection-with-the-new-pr ovidedin-scopes-any-and-platform-30bb


En Angular, el decorador @Injectable permite definir el alcance (provisión) de un servicio a través de la propiedad providedIn. Las opciones disponibles son:

- 'root': El servicio está disponible globalmente en toda la aplicación. Es la opción más común y permite que Angular maneje la provisión automáticamente.

- 'platform': El servicio está disponible en toda la plataforma (por ejemplo, en múltiples aplicaciones Angular dentro de la misma plataforma). Se usa en aplicaciones multiplataforma.

- 'any': Se crea una nueva instancia del servicio por cada módulo que lo importe. Es útil cuando se quiere evitar una única instancia global y cada módulo tiene su propia instancia.

- 'none': El servicio no se proporciona automáticamente. Debe ser agregado manualmente en los providers de un módulo o componente. Es útil cuando se requiere control total sobre la provisión del servicio.

En resumen, providedIn: 'root' es la opción más común para la mayoría de los servicios, mientras que las otras opciones permiten un control más detallado sobre su alcance.