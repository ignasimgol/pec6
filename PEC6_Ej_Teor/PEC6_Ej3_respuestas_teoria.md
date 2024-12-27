## Interceptores y Cadena de Operadores RxJS en Angular

### a) ¿Qué son los interceptores?

Los interceptores en Angular son una característica que permite interceptar y modificar las solicitudes HTTP y sus respuestas de manera centralizada antes de enviarlas al servidor o después de recibirlas. Son parte del `HttpClientModule` y permiten realizar tareas como:

- **Modificar las solicitudes**: Agregar cabeceras, parámetros o realizar transformaciones antes de enviar la solicitud.
- **Capturar las respuestas**: Manejar globalmente las respuestas HTTP, como transformar datos o gestionar errores.
- **Manejo de errores**: Implementar lógica para gestionar errores, como mostrar mensajes al usuario, redirigirlo o manejar un spinner de carga.
- **Autenticación y autorización**: Añadir tokens o validar permisos.

Los interceptores implementan la interfaz `HttpInterceptor`, que requiere el método `intercept()`. Este método toma dos parámetros:

- **`request`**: Representa la solicitud HTTP que se enviará.
- **`handler`**: Permite pasar la solicitud (modificada o no) a la siguiente fase del procesamiento.

---

### b) Análisis de una cadena de operadores RxJS

#### Código y análisis

Este ejemplo utiliza una cadena de operadores RxJS para gestionar búsquedas de manera eficiente, optimizando rendimiento y experiencia del usuario. A continuación, se explican los pasos:

1. **`searchSubject`**:  
   Es un `Subject` de RxJS que emite los valores ingresados por el usuario para realizar la búsqueda.

2. **`startWith(this.searchTerm)`**:  
   Emite un valor inicial (`searchTerm`) antes de cualquier otro valor. Esto garantiza que la búsqueda tenga un valor predeterminado desde el inicio.

3. **`debounceTime(300)`**:  
   Introduce un retraso de 300 ms antes de emitir valores. Esto evita realizar solicitudes HTTP mientras el usuario sigue escribiendo, reduciendo la carga en el servidor.

4. **`distinctUntilChanged()`**:  
   Solo emite valores si son diferentes al último emitido, evitando acciones innecesarias cuando el término de búsqueda no cambia.

5. **`merge(this.reloadProductsList)`**:  
   Combina el flujo de búsqueda con otros eventos, como la acción de recargar la lista de productos, para gestionarlos de manera conjunta.

6. **`switchMap((query) => this.wineService.getWine(this.searchTerm))`**:  
   Realiza una operación asincrónica basada en el término de búsqueda, como una llamada a la API. Si el término cambia antes de recibir la respuesta, las solicitudes anteriores se cancelan automáticamente.

---

#### Caso de uso

Este flujo es ideal para implementar **búsquedas en vivo** en aplicaciones, como:

- Tiendas en línea, donde los usuarios buscan productos en tiempo real.
- Aplicaciones que requieren optimizar solicitudes para evitar la sobrecarga del servidor.
- Contextos donde es crucial cancelar solicitudes obsoletas para mantener actualizados los resultados mostrados.

Con este enfoque, se mejora la **eficiencia** y la **experiencia del usuario**, al evitar solicitudes innecesarias y combinar eventos relacionados de forma centralizada.
