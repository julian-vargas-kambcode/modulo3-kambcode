# GIT desde 0

## Introduccion a versionamiento

En la actualidad, cuando el desarrollo web crece a pasos agigantados, crece la ya existente importancia de la clara legibilidad de los codigos y archivos de los proyectos de cientos de miles de desarrolladores a lo largo de nuestro mundo, por ello, haciendo enfasis en el ambito de organizacion del **_versionamiento de archivos_**, su importancia recae en:

    - Limpieza en la linea principal del codigo de un proyecto
    - Control de actualizaciones y cambios realizados 
    - Colaboracion organizada por los miembros de un equipo de desarrolladores
    - Visualizacion correcta del flujo historico del proyecto

A continuacion, explicaremos los comandos e instrucciones para poder hacer buen uso de nuestra herramienta de versionamiento `GIT` en conjunto con el entorno colaborativo `GITHUB`.


# Repositorio local y Agregado con Git

## Iniciar repositorio GIT local (Git init)

Para comenzar nuestro camino para entender el funcionamiento de Git, necesitaremos una carpeta vacia que contenga un archivo.
Para nuestro ejemplo utilizaremos un archivo `README.md` sin embargo, se puede utilizar cualquier archivo de preferencia.

Luego, daremos click derecho sobre la carpeta principal sobre la cual queremos crear el repositorio y seleccionaremos la opcion `Open in integrated terminal` tal y como se muestra en la siguiente ilustracion:

![alt text](image.png)

Luego de ello se nos desplegara una terminal (por defecto se desplegara en formato `powershell`) en la parte inferior de nuestra pantalla, en ella podremos elejir el tipo de perfil en el que queremos nuestra terminal (Se recomienda elegir la opcion `Git bash` por mejor sitema de marcado de etiquetas para el programador).

![alt text](image-1.png)

A continuacion, escribiremos el comando ***`git init`*** para generar un repositorio en la carpeta seleccionada.

```

$ git init
Initialized empty Git repository in C:/Users/Victus/OneDrive/Documentos/ejemplo_carpeta/.git/

```
Liso! has realizado tu primer repositorio Git, ahora, añadamos algunos archivos a el.

## Añadir archivos a un repositorio (git add)
Para empezar a hacer seguimiento a un archivo determinado de nuestro proyecto y, comenzar el proceso de adicion a nuestro repositorio local, por defecto, el archivo aparecera en estado *U* en nuestro Visual Studio (Lo cual significa *Untracked*) como mostramos a continuacion:

![alt text](image-2.png)

Para empezar a "trackear" tus cambios a la fecha en tus archivos y añadirlos a tu repositorio utilizaremos el comando `git add .` en la terminal.

Tu terminal deberia de verse algo similar a la siguiente: 

### Git status

Continuando con el punto anterior, nos abriremos a un nuevo comando que nos permitira ver los archivos pendientes por commit en la rama que deseemos, los archivos no trackeados y ademas los el lugar del repositorio / `path`del repositorio.

Con `Git status` logramos ver todo lo anterior. 
A continuacion, se mostrara en la terminal el estado de los archivos que añadimos previamente con el `Git add`: 

```

$ git status
On branch Jose-David-1019762728
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   Jose_Junco_1019762728/hw_03/image-1.png
        new file:   Jose_Junco_1019762728/hw_03/image-2.png
        new file:   Jose_Junco_1019762728/hw_03/image.png
        new file:   Jose_Junco_1019762728/hw_03/tutorialGit.md
        renamed:    David.md -> Jose_Junco_1019762728/notes.md


```

## Stage de commit (Git commit -m "nota")
El siguiente paso para añadir nuestros archivos a un repositorio local es realizar el comando `Git commit -m "nota"`. De esta manera termina de ser integrado en la rama base de nuestro repositorio. 

luego de que introduzcas este comando tu terminal deberia licuir asi: 

```

$ git commit -m "Actualizacion 01 del tutorial"
[Jose-David-1019762728 1037fb4] Actualizacion 01 del tutorial
 5 files changed, 59 insertions(+)
 create mode 100644 Jose_Junco_1019762728/hw_03/image-1.png
 create mode 100644 Jose_Junco_1019762728/hw_03/image-2.png
 create mode 100644 Jose_Junco_1019762728/hw_03/image.png
 create mode 100644 Jose_Junco_1019762728/hw_03/tutorialGit.md
 rename David.md => Jose_Junco_1019762728/notes.md (100%)

```

# Github, el repositorio remoto

Github es la contraparte de nuestro servidor local creado con `Git`, ya que este se encuentra en un territorio virtual al cual pueden acceder todos los colaboradores integrados en un proyecto.
Veamos como realizar un repositorio remoto en `Github`.

## Creacion de repositorio en Github

Primero, accederemos al link ***https://github.com*** y alli clickearemos en el boton verde que dice ***new*** en la parte izquierda superior.

![alt text](image-3.png)

Acontinuacion tendremos una pantalla dezplegada que nos permitira elegir el nombre de nuestro repositorio virtual, descripcion, eleccion entre publico y privado (ademas tenemos la opcion de generar un archivo README.dm).

![alt text](image-4.png)

Con el boton de la parte inferior que dice ***Create Repository*** haremos la creaccion de nuestro repositorio.


## Añadir repositorio local a uno virtual

Con el comando  `git remote add origin <URL_del_repositorio_en_GitHub>` en nuestra terminal local, podremos añadir la direccion remota del repositorio que hemos creado en el paso anterior para posteriormente añadir los cambios realizados a esta nube. 

En la seccion `...<URL_del_repositorio_en_GitHub>` colocaremos el link del repositorio el cual se encuentra clickeando en el boton verde `code` en esta seccion de la pagina de Github:

![alt text](image-5.png)

Al pegar este link en el comando de la terminal tu terminal debera verse algo similar a la siguiente: 

```
$ git remote add origin https://github.com/OWNER/REPOSITORY.git
# Set a new remote

```
Listo, has agregado la direccion del repositorio al que quieres subir tus avances locales.

## Subir avances locales

Finalmente, con el comando `Git push` podremos mandar los avances hechos previamente en nuestros archivos a el servidor remoto.


    
