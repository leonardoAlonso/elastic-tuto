# Update API

Para actualizar un documento en elastic usamos el metodo `POST /<index>/_update/<_id>`
y deberemos pasar en el payload la estructura

```JSON
{
    "doc":{
        "field": value
    }
}
```

La actualizacion nos va a permitir modificar un campo ya existente o agregar un campo nuevo

Ejemplo
<details>
```elastic
POST alumno/_update/1
{
  "doc": {
    "cod_alumno": 1,
    "average": 9.5
  }
}
```
</details>

Otra forma de actualizar un documento es usando el index api con el metodo `PUT /<index>/_doc/<_id>`
y como payload usaremos la estructura

```JSON
{
    "field": value
}
```

Ejemplo
<details>
```elastic
PUT alumno/_doc/1
{
  "group": "3A"
}
```
</details>

## Script

Otra forma de hacer actualizaciones es mediante la ejecucion de scripts logicos estos tambien se hacen siguiendo la logica del
metod POST con la siguiente estructura como payload

```JSON
{
    "script": {
        "source": <accion a realizar>,
        "lang": <lenguaje con el que se ejecutara el script>,
        "params": {
            "field": valie
        }
    }
}
```

### Tipos de lenguajes

- paintless: creado para ejecutarse sobre elastic search ([doc](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting-painless.html))
- expression: normalmente usado para rankings u ordenamientos ([doc](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting-expression.html))
- mustache: para templates ([doc](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-template.html))
- java: Usando el lenguaje de programacion ([doc](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting-engine.html))
