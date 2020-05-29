# ***Premileal***: Sistema de Fidelización de Clientes

# Manual de Instalación :green_book:

Bienvenido al manual de instalación del sistema de fidelización de clientes. A continuación, se le presenta una guía sobre 
cómo instalar y ejecutar el sistema con el fin de poder realizar pruebas y/o desarrollar nuevas funcionalidades. En este caso,
nos referiremos a la herramienta de Back-Office encargada de administrar las distintas configuraciones de la empresa asi como 
gestionar clientes.

## Back Office del Sistema de Fidelización de Clientes

### Instalación del Proyecto :pencil:

Para poder realizar la instalación del Back Office del sistema de fidelización de clientes, se requiere que tenga 
instalado previamente en su equipo:

- NodeJS
- PostgreSQL
- PGadmin

Luego, para poder obtener el proyecto de manera local y así realizar pruebas y/o desarrollar nuevas funcionalidades, 
debe de iniciar la **Consola de Comandos** y ejecutar las siguientes líneas:

> git clone https://github.com/RafaelMendezUCAB/admin-premileal.git

> cd admin-premileal

> npm i

Y de este modo, podrá empezar a desarrollar en su equipo.

### Ejecución de la Base de Datos del proyecto :elephant:

Previo a la ejecución del proyecto, se requiere que la Base de Datos esté disponible para su conexión, por lo tanto, debe de abrir
**PGadmin**, y seguir las indicaciones:

- Crear una Base de Datos con el nombre **Premileal** 

![Click Derecho -> Create Database](/ruta/a/la/imagen.jpg)

Y, a continuación, debe hacer click en el botón *Query Tool* para poder ejecutar los queries.

![Query Tool](/ruta/a/la/imagen.jpg)

Estos se encuentran en el repositorio del proyecto, en la siguiente dirección:

> ../../api-premileal/config/db_scripts

El orden en que debe ejecutar los Queries para el correcto funcionamiento de la Base de Datos es el siguiente:

- Create Database (en el caso de no haberla hecho manualmente en PGadmin)
- creates.sql
- functions.sql
- triggers.sql
- inserts.sql

Para crear las tablas de la base de datos, debe copiar todo el contenido de un archivo a la vez, pegarlo en el espacio que otorga
PGadmin, debe de sombrear todo el codigo y luego presionar el botón *Ejecutar* o presionar *F5*, de esta manera, ya tendrá la Base
de Datos preparada para comenzar a desarrollar y/o realizar pruebas.

### Ejecución del proyecto :arrow_forward:
Para poder ejecutar y ver en funcionamiento el sistema, debe de correr el siguiente comando:

> npm run serve

Gracias a este comando, el proyecto estará en estado de ejecución y, además, se actualizará automáticamente a medida que vaya 
realizando cambios en el código.

### Permisos :closed_lock_with_key:

Para tener acceso a las distintas funcionalidades que ofrece la aplicación y así poder realizar cambios y/o pruebas, se 
requiere de algunas variables de entorno. Deberá crear un archivo **.env** en la carpeta base del proyecto.

Deberá contactar a los desarrolladores para poder obtener las llaves necesarias para tener acceso completo a todas las 
funcionalidades 

### Developers :computer:

- Rafael Méndez
- Christian Neira
- Gabriel Tovar
