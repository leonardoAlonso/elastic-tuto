# Elastic stack

Se compone de 4 capas (herramientas) principales

- Logistash

Es un ETL (extract, transform, load) es decir que toma datos de una fuente para transformarlos en el formato de elastic

- Beats

Usado para leer metricas de sistema, log, network etc, se usa mucho junto con Logistash

- Elasticsearch

Motor de busqueda baso en procesamiento de texto en lenguage natural

- Kibana

Herramienta grafica que consume la data de elasticsearch mediante su api.

## Elasticsearch

- Motor de busqueda open source basado en lenguaje natural
- Oriendato a la analitica o analisis de datos en tiempo real
- Escrito en JAVA
- Basado en Apache Lucene
- Permite una arquitectura distribuida y alta disponibilidad
- Cuenta con un API REST para consula e indexacion y clientes en distintos lenguajes
- Indexa todos los campos en un JSON sin un schema definido
- Su lenguaje de consulta se llama DSL o tambien se conoce como Elasitc Search Query