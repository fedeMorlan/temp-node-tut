/* *npmjs.com

ahi ya hay cosas que la gente hizo, sirve para facilitar el acceso a paquetes
de node (node package manager)
al instalar node ya instalamos npm

si chequeamos el weekly download es un buen medidor para asegurar
que no sea inseguro o mal hecho
(cualquiera puede subir cualquier recurso)
*/

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json -manifest file (stores important info about project/package)
// manual approach (create package.json in the root create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

/**
 * hice el npm init, se asigna el nombre por defecto de la carpeta
 * tuve un problema por windows, lo resolvi haciendo esto en powershell
 * Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
 * 
 * npm init
 * se crea el package.json
 * 
 * luego hice npm i lodash para instalar esa dependencia, se agrega en 
 * el package.json y se agrega una carpeta node_modules y la/s dependencia/s
 */

// convencion nombrar lodash como "_"
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
// para testear, lodash tiene un metodo para descomponer arreglos
const newItems = _.flattenDeep(items)
console.log(newItems)