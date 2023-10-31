// API para crear una tabla. Se encargará de renderizar las tablas utilizando JSON2HTML
// Pero abstrayendo del tema. Es decir, en el resto de la aplicación no vamos a tener
//      referencias a JSON2HTML
// Debe permitir :
//  Crear una nueva tabla
//      Añadir columna
//      Añadir acción (Editar, Eliminar, ...) Pero predefinidas con callback
///         Si eliminar OK, se encarga de eliminar el registro de la tabla.
//  Renderizar (para ello crear la plantilla de JSON2HTML a partir de la definición).
//      En realidad la plantilla la podría ir creando a medida que añado campos
