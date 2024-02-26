# Search API

Esta API nos va a permitir obtener documentos dentro de un indice

## Obtener todos los documentos

```elastic
GET <index>/_search
```

## Busquedas dentro de un incide

### Query string parameter

```elastic
GET <index>/_search?q=field:value
```

> [!NOTE]
> Para cuando necesitamos hacer busqedas muy especificas podemos hacer uso del metodo `POST`
> pasando dentro del body los parametros de busqueda usando el DSL

## Obtener todos los documentos de todos los indices

```elastic
GET /_search
```

## Obtener la definicion de schema de un indice

```elastic
GET /<index>/_mapping
```


# GET API

La diferencia entre GET API y Search API sera que GET sera para retornar solo un documento

```elastic
GET /<index>/_doc/<id>
HEAD /<index/_doc/<id> # Solo regresara un 200 OK o un 404 en caso de no encontrar el documento
GET /index/_source/<id> # Sin metadatos
```

