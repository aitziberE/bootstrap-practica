Este proyecto se crea como práctica del uso de recursos Bootstrap, validación de datos recogidos de un formulario mediante js y uso de pares clave/valor alojados en LocalStorage.

createUser nos presenta un formulario de registro de datos que:
  - verifica el formato del email haciendo uso de una expresión regular
  - verifica la concordancia entre contraseñas
  - informa al usuario del resultado de la validación al interactuar con Submit
  - siendo esta positiva, se hace uso de setTimeout() para informar del éxito del registro y abrir la vista de cards
    
user recoge la información almacenada en LocalStorage y la presenta en forma de cards, indicando el nombre y email del usuario.
