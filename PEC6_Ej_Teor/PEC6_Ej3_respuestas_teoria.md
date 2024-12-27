### a) ¿Qué son los interceptores?
Los interceptores en Angular son una característica que permite interceptar y modificar las solicitudes HTTP y sus respuestas de manera centralizada antes de que se envíen al servidor o después de recibirlas. Son parte del HttpClientModule y te permiten realizar tareas como:

- Modificar las solicitudes: Puedes agregar cabeceras, parámetros o realizar otras transformaciones antes de que la solicitud se envíe.
- Capturar las respuestas: Puedes manejar globalmente las respuestas de las solicitudes HTTP, por ejemplo, para manejar errores o realizar transformaciones.
- Manejo de errores: Puedes manejar errores globalmente, como mostrar mensajes de error, redirigir al usuario o mostrar un spinner de carga.
- Autenticación y autorización.

Los interceptores en Angular implementan la interfaz HttpInterceptor, que tiene un método intercept() que toma dos parámetros:

- Request: Representa la solicitud HTTP que se va a enviar.
- Handler: Se utiliza para pasar la solicitud modificada (si es necesario) o la original a la siguiente fase del procesamiento.

### b) Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los pasos que se están desarrollando y explica en qué caso usarías este código:

Este código utiliza una cadena de operadores de RxJS para gestionar eficientemente las búsquedas en una aplicación, optimizando el rendimiento y la experiencia del usuario. Aquí está el resumen de los pasos:

- searchSubject: Un Subject de RxJS que emite los valores de búsqueda del usuario.

- startWith(this.searchTerm): Emite un valor inicial de búsqueda (searchTerm) antes de que cualquier otro valor sea emitido, garantizando que haya siempre un valor predeterminado al inicio.

- debounceTime(300): Retrasa la emisión hasta que hayan pasado 300 milisegundos desde la última interacción, evitando realizar solicitudes HTTP mientras el usuario sigue escribiendo.

- distinctUntilChanged(): Solo emite valores diferentes al último emitido, evitando acciones innecesarias si el término de búsqueda no ha cambiado.

- merge(this.reloadProductsList): Combina el flujo de la búsqueda con otros eventos, como el botón de recarga de productos, gestionando ambos flujos de forma conjunta.

- switchMap((query) => this.wineService.getWine(this.searchTerm)): Realiza una nueva operación asincrónica (como una llamada a la API) basada en el término de búsqueda, cancelando las solicitudes anteriores si el término cambia.

Caso de uso:
Este flujo es ideal para búsquedas en vivo en aplicaciones de compras, donde se desea optimizar las solicitudes, cancelar búsquedas anteriores si el usuario sigue escribiendo y combinar varios eventos. Es útil cuando se quiere evitar la sobrecarga del servidor, mejorando la eficiencia y la experiencia del usuario.