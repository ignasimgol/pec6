## Componentes, Servicios y Programación Reactiva en Angular

### a) ¿Cuál es la función de los componentes y servicios?  
(i.e., ¿cuándo se debe utilizar cada uno de ellos?)

- **Componentes**:  
  Representan la **interfaz de usuario** (UI) y manejan la lógica específica de la vista. Se utilizan para:  
  - Crear partes reutilizables de la UI.  
  - Manejar eventos de usuario.  
  - Vincular datos con el modelo de la aplicación.  

- **Servicios**:  
  Encapsulan la **lógica de negocio** y permiten compartir datos entre componentes. Se utilizan para:  
  - Interactuar con APIs externas.  
  - Manejar y procesar datos.  
  - Implementar lógica compleja que no pertenece a la vista.  

**Resumen**:  
- Usa **componentes** para la UI.  
- Usa **servicios** para la lógica y datos compartidos.

---

### b) ¿Qué es la inyección de dependencias? ¿Para qué sirve el decorador `@Injectable`?

- **Inyección de dependencias**:  
  Es una técnica que permite proporcionar a una clase los objetos que necesita sin que esta los cree directamente. Esto promueve un diseño más limpio y modular.  

**Pasos para que funcione**:  
1. **Inyección de dependencias**: Proporciona los objetos necesarios a través del sistema de inyección de Angular.  
2. **`@Injectable`**: Decorador que marca una clase como inyectable y permite que Angular la registre y gestione como una dependencia.  

- **Funciones del decorador `@Injectable`**:  
  - Permitir que una clase sea inyectada en otras clases.  
  - Hacer que Angular resuelva y administre las dependencias necesarias.  
  - Registrar automáticamente la clase en el inyector (si se utiliza con `providedIn: 'root'`, se hace disponible globalmente).  

---

### c) Conceptos de la programación reactiva en RxJS

1. **Observable**:  
   Es una fuente de datos que puede emitir valores a lo largo del tiempo. Es la base de RxJS para trabajar con flujos de datos asíncronos o eventuales.

2. **Subscription**:  
   Es una conexión activa entre un observable y un observador. Permite escuchar las emisiones del observable y manejar los datos emitidos.

3. **Operators**:  
   Son funciones que permiten transformar, filtrar o combinar observables, facilitando el procesamiento de los flujos de datos.

4. **Subject**:  
   Es un tipo especial de observable que permite emitir valores manualmente y suscribirse a múltiples observadores.

5. **Schedulers**:  
   Gestionan la concurrencia y controlan el momento en que las tareas se ejecutan en un flujo reactivo.

---

### d) Diferencia entre promesas y observables

- **Promesas**:  
  - Emiten **un único valor**.  
  - Son ideales para operaciones puntuales asíncronas.  
  - No se pueden cancelar.  

- **Observables**:  
  - Pueden emitir **múltiples valores** a lo largo del tiempo.  
  - Soportan cancelación de suscripciones.  
  - Son más flexibles y adecuados para aplicaciones reactivas que manejan flujos continuos de datos.  

---

### e) ¿Cuál es la función de la tubería (`pipe`) async?

La tubería `async` es una herramienta de Angular que permite trabajar con valores asíncronos directamente en las plantillas de los componentes.  

**Funciones principales**:  
- Convierte observables o promesas en valores que se pueden mostrar en la vista.  
- Se suscribe automáticamente al observable o promesa y actualiza la vista con el valor más reciente.  
- Cancela automáticamente la suscripción cuando el componente se destruye, previniendo fugas de memoria.

**Ventaja clave**: Simplifica el trabajo con datos asíncronos en plantillas, eliminando la necesidad de suscripciones manuales en el código del componente.
