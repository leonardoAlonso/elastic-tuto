# Mapping

El mapping es el proceso en el que le decimos a elastic la estructura que tendran los documentos de
los documentos.

Elastic nos ofrece de 2 opciones para esto:

- Tipado dinamico
- Tipado explicito

## Tipado dinamico

El tipado dinamico es el metodo que usa elastic para detectar por si mismo el tpo de cada campo dentro de un documento
basado en el mismo JSON del documento.

Para los string existiran 3 opciones para el campo que almacenara elastic

- Si mandamos una fecha entonces se guardara un tipo `date`
- Si mandamos un numero entonces se guardara un tipo `number`
- Si pasamos cualquier otra cosa entonces se guardara `texto`

## Tipado explicito

Este tipado debera ser definido desde el momento de la creacion del documento

```
PUT /my-index-000001
{
  "mappings": {
    "properties": {
      "age":    { "type": "integer" },  
      "email":  { "type": "keyword"  }, 
      "name":   { "type": "text"  }     
    }
  }
}
```

Si necesitamos actualizar un documento agregando un nuevo campo tambien tendremos que definir su tipo de dato

```
PUT /my-index-000001/_mapping
{
  "properties": {
    "employee-id": {
      "type": "keyword",
      "index": false
    }
  }
}
```

Para ver el mapeo de nuestro indice podemos usar 

```
GET /my-index-000001/_mapping
```

### Tipos de datos

https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html

**Common types**

- binary: Para almacenar datos binarios en base 64
- boolean
- keyword: este tipo de datos facilitara la busqueda por coincidencias exactas de texto
- Numbers
- Dates
- alias: define un alias para un campo existente

**Object and relational types**

- Objet: a JSON object, este campo se almancenara en elastic de la siguiente forma

```
{
  "region":             "US",
  "manager.age":        30,
  "manager.name.first": "John",
  "manager.name.last":  "Smith"
}
```

- flattened: un objeto JSON creado como un campo simple
- nested: un objecto JSON que preserva las relaciones entre subcampos
- join: Define una relacion de padre/hijo para documentos en el mismo indice


## Reindex api

En algunos casos vamos a querer cambiar el tipo de dato de un campo, esto en elastic no es posible sin embargo si podriamos
copiar todos los documentos de un indice a otro y en esa operacion modificar el nombre o tipo de un campo en especifico.

```
POST _reindex
{
  "source": {
    "index": "my-index-000001"
  },
  "dest": {
    "index": "my-new-index-000001"
  }
}
```


Renombrar un campo

```
POST _reindex
{
  "source": {
    "index": "my-index-000001"
  },
  "dest": {
    "index": "my-new-index-000001"
  },
  "script": {
    "source": "ctx._source.tag = ctx._source.remove(\"flag\")"
  }
}
```

El reindexado es una operacion costosa a nivel de api por lo que debera analizarse cada caso donde queremos hacer esto
podemos hacer uso de algunas opciones del servidor o de paralelismo.
