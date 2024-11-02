// CommonJS, every file is a module by default
// Modules - Encapsulated Code (only share minimum)
// check files 3, 4 and 5 of the course

// supposed to be the main which calls modules 4, 5 and 7

// importamos los export de otro modulo
const names = require('./4-names')
// const {john,peter} = require('./4-names')
const sayHi = require('./5-utils')

// el codigo dentro del modulo requerido se ejecuta de una
require('./7-mind-grenade')


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)