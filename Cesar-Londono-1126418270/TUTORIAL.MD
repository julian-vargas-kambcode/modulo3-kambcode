# Inicialización, Agregado y Subida de Archivos a GitHub con Git

## Introducción

La versión y gestión de archivos en un repositorio es fundamental para el desarrollo de proyectos. En este tutorial, aprenderás los pasos básicos para inicializar, agregar y subir archivos a GitHub utilizando Git.

## Inicialización de un Repositorio Git

Para inicializar un repositorio Git en tu máquina local, utiliza el siguiente comando:

**git init**

- Este comando crea un nuevo repositorio Git en el directorio actual.

## Agregar Archivos al Área de Preparación

- Una vez que tienes archivos en tu directorio de trabajo, puedes agregarlos al área de preparación (staging area) con el comando git add. Por ejemplo:

**git add nombre_archivo**

## Realizar un Commit

- Después de agregar archivos al área de preparación, realiza un commit con el siguiente comando:

**git commit -m "Mensaje del commit"**

- Este comando guarda los cambios en el repositorio.

- Vincular con GitHub:

- Para vincular tu repositorio local con un repositorio remoto en GitHub, utiliza el comando **git remote add origin <URL_del_repositorio_en_GitHub>:**

**git remote add origin <URL_del_repositorio_en_GitHub>**

- Subir los Cambios a GitHub

- Finalmente, sube los cambios a GitHub utilizando el comando **git push:**

**git push -u origin master**

# Ejemplos Prácticos

- A continuación, te proporciono ejemplos prácticos utilizando archivos simples:

- Archivo README.md inicial para el repositorio.
- Archivo index.html agregado al área de preparación.
- Commit con el mensaje "Añadido archivo index.html".
- Vínculo del repositorio local con GitHub.
- Subida de cambios al repositorio remoto en GitHub.

## Conclusión

- Git y GitHub son herramientas poderosas para gestionar versiones de archivos y colaborar en proyectos de desarrollo de software. Practica estos comandos para mejorar tus habilidades con Git y GitHub.
