# SimpleCotizador
Simple cotizador es una demostracion de una aplicacion desarrollada en ASP.NET Core y Angular 1.6.


## Prerequisitos

La aplicacion fue construida usando [Visual Studio 2017 Community Edition](https://www.visualstudio.com/vs/community/). Es gratis para descargar [aqui](https://www.visualstudio.com/vs/community/).

## Instalación

Para asegurar que la aplicacion funcione, primero se debe crear la base de datos. La forma mas facil de lograrlo es usando el mismo Visual Studio:

1. Abrir la solucion **SimpleCotizador.sln**.
2. Desde la interfaz de Visual Studio 2017, haz segundo clic sobre el proyecto de base de datos **SimpleCotizador.Database** -> **Publicar**.
3. En el dialogo de **publicar base de datos**, primero selecciona una Conexion destino, haciendo clic en Editar, y seleccionando la base de datos. Si no hay conexiones disponibles, debes primero añadirlas en el **Explorador de Servicios** -> **Conexiones de datos**.

![alt text](https://raw.githubusercontent.com/marcohern/SimpleCotizador/master/images/publishDb.edit.png "Publicar base de datos . Editar")

4. Luego de seleccionar la conexion destino, haz clic sobre **Publicar**. Esto iniciara el proceso de crear la base de datos.

![alt text](https://raw.githubusercontent.com/marcohern/SimpleCotizador/master/images/publishDb.publish.png "Publicar base de datos . Publicar")

5. Visual Studio inica el proceso de publicacion de la base de datos. Por defecto, creara una base de datos **SimpleCotizador** si esta no existe. Adicionalmente creará 3 objetos:
  - **Cotizaciones** (Tabla)
  - **CotizacionesConsultar** (Procedimiento Almacenado)
  - **CotizacionCrear** (Procedimiento Almacenado)

![alt text](https://raw.githubusercontent.com/marcohern/SimpleCotizador/master/images/publishDb.results.png "Publicar base de datos . Publicar")

6. Una vez terminada la publicacion de la base de datos. Establece la cadena de conexion en el archivo de configuracion **/SimpleCotizador/appsettings.json**. Ejemplo de la cadena de conexion local: *Server=(local);Database=SimpleCotizador;Trusted_Connection=True;MultipleActiveResultSets=true*.

![alt text](https://raw.githubusercontent.com/marcohern/SimpleCotizador/master/images/connString.png "Cadena de Conexion a Base de Datos")

6. Finalmente, clic sobre el boton de **> Ejecutar (IIS Express)** para ejecutar la aplicacion.

