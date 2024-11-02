/**
 * os: system and server
 * 
 * path
 * 
 * FS
 * 
 * HTTP
 */

// los builtins van sin ruta
const os = require('os')

// se pueden ejecutar directamente con os.nombre(), o se puede desestructurar usando const os{nombre,nombre}
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS);

