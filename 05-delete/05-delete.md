# Delete API

Para eliminar un indice usaremos el metodo DELETE de http junto con el nombre del incide a eliminar

```
DELETE <index_name>
```

Podemos eliminar todos los inidices usando `*` o el wildcard `_all`

```
DELETE /*
```

Para eliminar un documento dentro de un indice usaremos de igual forma el metodo delete
seguido del nombre del indice donde se encuentra el documento, finalmente `_doc` y el id de documento

```
DELETE <index_name>/_doc/<id>
```

Si queremos eliminar un documento bajo ciertas condiciones podemos usar `delete_by_query`

```
POST /<index>/delete_by_query

{
    "query": {
        "match": {
            "field": <value> 
        }
    }
}
```
