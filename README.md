#Ejemplos para trabajar con Johnny-Five en una placa de Arduino
Todos los ejemplos están construidos usando un solo LED En el puerto 13 (es la conexión más simple posible de elementos en un Arduino)
##Requerimientos
Instalar node
##Requerimientos en Windows 
Desde la línea de comandos ejecutar (podría ser necesario repetirlo):
```
npm install --global windows-build-tools
```
##Otros paquetes globales necesarios
```
npm install -g node-gyp
```
##Desde la carpeta raíz del código
Ejecutar:
```
npm install
```
##En el editor de Arduino
Desde las librería *FirmData* cargar el ejemplo *StandardFirmdata*

##Comprobar puertos
Ejecutar el comando `node puertos` desde la raíz. Observar en qué puerto serie está nuestro Arduino. 
En todas las aplicaciones se usa el puerto *COM3*, cambiar ese puerto por aquel en el que esté Arduino.

##Probar funcionamiento
```
node blink
```
Conseguirá que el LED parpadee

##Aplicaciones web
Hay que lanzar primero la aplicación node y luego desde la dirección [http://localhost:3000](http://localhost:3000) veremos como la página web resultante es capaz de manipular el LED del Arduino
###Lista de aplicaciones
* **ON/OFF**: Enciende y apaga el LED con botones
```
node app-on-off
``` 
* **PARPADEO**. Los botones parpadean el LED y lo detienen
```
node app-blink
```
* **PIN 500ms**. Un botón permite que el LED se enciende 500 ms. Usa el objeto Pin y además simula el uso de `delay` con la función `setTimeout`
```
node app-blink
```


