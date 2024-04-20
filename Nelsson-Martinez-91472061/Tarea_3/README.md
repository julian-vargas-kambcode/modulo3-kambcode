# Inicialización, Agregado y Subida de Archivos a GitHub con Git

Tener control de versiones de nuestros archivos y proyectos es importante porque  nos permite tener un mejor control de los cambios realizados en especial si se está trabajando de manera colaborativa con un grupo de personas.

## Ejemplo práctico

A continuación veremos un ejemplo donde crearemos una **carpeta local** y la sincronizaremos con un repositorio en la nube en Git Hub.

### 1. Crear la carpeta de nuestro proyecto

En nuestra área local, haciendo uso de nuestro editor de códiho **Visual Studio Code** abrimos la terminal *Git Bash*, usamos el comando **mkdir** para crear el directorio o carpeta donde va a estar nuestro proyecto. (Tener precaución de estar ubicado en la ruta correcta).

***mkdir MiProyecto***


### 2. Crear el Repositorio en GitHub

En nuestra cuenta de GitHub vamos a crear un Repositorio con el mismo nombre de nuestra carpeta local (por buena práctica).

### 3. Inicialiar Git

Es necesario iniciar el servicio de Git en nuestra carpeta local para que empiece a hacer el seguimiento de cambios.

> ***cd MiProyecto*** //para ubicarme en la carpeta o directorio
>
> ***git init*** //para indicarle a git que inicie el servicio de seguimiento y cree el archivo .git

### 4. Haciendo modificaciones

En este caso vamos a crear dos archivos, README.md e index.html. En ellos vamos a hacer las modificaciones ingresando su respectivo código.

### 5. Subir cambios al Repositorio de GitHub

Para esto debemos primero hacer los siguientes pasos en nuestro proyecto local:

>***git add .*** //para agregar todos los cambios, en este caso todos los archivos de mi proyecto

>***git commit -m "Se crearon los archivos de md y html"*** //un commit es un comentario que queda guardado como punto de referencia o histórico

>***git remote add origin https://github.com/Nelmarlo74/MiProyecto*** //por ser la primera vez, este comando enlaza la carpeta local con la carpeta remota en Git Hub

>***git push -u origin master*** //empujo o envío mis archivos al repositorio en Git Hub

## CONCLUSIÓN

Hacer uso de herramientas como Git y GitHub, nos ayuda a tener un mejor control de nuestro código, ya sea si es un proyecto personal o colaborativo.

Para familiarizarnos con todo este proceso es necesario realizar práctica y animarnos a crear proyectos haciendo uso de todos los comandos de git.

## Sígueme en mi cuenta de GitHub
Si deseas ver mi cuenta de GitHub, ve al siguiente enlace: [Clic aquí](https://github.com/Nelmarlo74/)
