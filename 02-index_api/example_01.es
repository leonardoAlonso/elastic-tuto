# Click the Variables button, above, to create your own variables.
GET /

GET /_cat/indices/alumno?v

GET /_cat/nodes?v

GET /_cat/health?v

// Index API

PUT alumno/_doc/2
{
  "cod_alumno": 11,
  "nombre": "Leo Alonso",
  "edad": 29,
  "direccion": "calle flor 3"
}

GET alumno

GET /_cat/shards/alumno

POST alumno/_doc
{
  "cod_alumno": 12,
  "nombre": "Leo Prueba",
  "edad": 19,
  "direccion": "calle flor 3"
}

//Bulk API

POST alumno/_bulk
{"index": {"_id":10}}
{"cod_alumno": 13, "nombre": "Prueba Con Id", "edad": 13}
{"index": {"_id": 11}}
{"cod_alumno": 14, "nombre": "Prueba Nueva2 con Id", "edad": 10}
