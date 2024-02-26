# Index API

## Endpoint `/_cat`

Este endpoint nos va a dar en su mayoria informacion relacionada al cluster de elastic como la cantidad de nodos o la salud de mismo cluster.

## Indices

Un indice como vimos sera una "tabla" para crear un indice vamos a usar el metodo `PUT`, es posible definir la cantidad de shards desde la creacion
del inicide sin emabrgo tamien podemos enviarlo sin datos y elastic se encarga del resto

```elastic
PUT <index_name>/_doc/<id>
```

El parametro `<id>` no es requerido pero en caso de ser definido debera ser un valor unico para ese indice. Si no se especifica entonces
elastic se encargara de asignar uno por nosotros.

Seguido del `PATH` deberemos especificar en el body el archivo JSON que se convertira en nuestro documento.

Para comprobar el estado de un incide podemos usar el comando `GET /_cat/indices/<index_name>`

Para identificar los shards de un incide usaremos `GET /_cat/shards/<index_name>/?v`

Otra forma para crear indices sera con el metodo `POST` siguiendo la misma estructura de `PUT` en este caso la diferencia
sera que no especificaremos el <id> dejando que elastic lo haga por nosotros.
### Codigos `healt` en los idices

 - Green : todo ok
 - Yellow: Todo bien en el shard primario pero los shard replica pueden tener algun problema
 - Red : Indice primario con error

## BULK API

Esta API nos permite hacer creaciones, actualizaciones o eliminaciones de un indice.
Una ventaja que tiene esta api es la creacion masiva de indices

```elastic
POST /_bulk
POST /<index_name/_bulk
```

## Consideraciones en los indices

Si bien no es necesario especificar una estructura de datos (schema) para los documentos si debemos tener en cuenta que 
una vez se crea un documento todos los demas dentro de ese indice deberan usar los mismos tipos de datos para los campos 
dentro de ellos

