# Indices

Un indice va a ser un conjunto de documentos JSON y cada campo de ese documento se conocera como `field`

# Nodos y Clusters

Un nodo en elastic va a ser una instanc de una maquina virtual JAVA mientras que un **cluster** sera un conjunto
de nodos.

En desarrollo es posible trabajar con un solo nodo, pero para entornor productivos lo recomentable sera usar
clusters

Los **indices** se colocaran dentro de los nodos.

# Shards

Un shard sera una particion de un incide en distintos nodos.

## Tipos de Shards

- Shard primario: Sera la intancia original del indice
- Shard replica: Copia de un indice en otro nodo.

Para cada shar primario existe al menos un shard replica.

Los shards son lo que nos permitira en elastic la alta disponibilidad de los datos.

ElasticSearch se encarga por si mismo de hacer los shards tratando de homogeneisar la cantidad de shards en los nodos.

Es posible crear mas de un shard replica por lo que si creamos 2 shards primarios y 2 shards replica tendremos un total de 6 shards
en total. Los 2 shards originales y 2 replicas por cada shard primario
