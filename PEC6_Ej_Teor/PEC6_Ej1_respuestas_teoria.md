### a) ¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe
utilizar cada uno de ellos)

Componentes:
Representan la interfaz de usuario y manejan la lógica específica de la vista. Se usan para partes reutilizables de la UI, manejar eventos y vincular datos.

Servicios:
Encapsulan la lógica de negocio y permiten compartir datos entre componentes. Se usan para interactuar con APIs, manejar datos o implementar lógica compleja.

- Componentes para la UI. 
- Servicios para la lógica y datos compartidos.

### b) ¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador
@Injectable?

Inyección de dependencias: Técnica para proporcionar objetos necesarios a una clase sin que esta los cree directamente. para que funcione se necesitan dos pasos:
- Inyección de dependencias: Técnica para proporcionar objetos necesarios a una clase sin que esta los cree directamente.
- @Injectable: Decorador que permite que una clase sea inyectada como dependencia y administrada por Angular.

@Injectable: Decorador que permite que una clase sea inyectada como dependencia y administrada por Angular.

Sirve para:
- Hacer que una clase pueda ser inyectada en otra.
- Permitir a Angular resolver las dependencias de esa clase.
- Registrar automáticamente la clase en el Injector cuando se utiliza con el ámbito global 

### c) Explica los siguientes conceptos de la programación reactiva que se usan en
RxJS:
- Observable: Fuente de datos que puede emitir valores a lo largo del tiempo.
- Subscription: Conexión activa para escuchar emisiones de un observable.
- Operators: Funciones para transformar o combinar observables.
- Subject: Observable especial que permite emitir valores y subscripciones múltiples.
- Schedulers: Controlan la concurrencia y el momento de ejecución de las tareas.

### d) ¿Cuál es la diferencia entre promesas y observables?

- Promesas: Emiten un único valor y son ideales para operaciones puntuales asíncronas.
- Observables: Permiten trabajar con flujos de datos múltiples, continuos y cancelables. Son más potentes y flexibles, especialmente en aplicaciones reactivas.

e) ¿Cuál es la función de la tubería (pipe) async?
La tubería async es una herramienta proporcionada por Angular que se utiliza para trabajar con valores asíncronos en las plantillas de los componentes. Esta tubería se suscribe automáticamente a observables o promesas y devuelve su valor más reciente.

- Convierte observables o promesas en datos que se pueden mostrar directamente en la vista.
- Se suscribe al observable o promesa y actualiza automáticamente la vista cuando hay nuevos valores.
- Cuando el componente se destruye, la tubería cancela automáticamente la suscripción para evitar fugas de memoria.