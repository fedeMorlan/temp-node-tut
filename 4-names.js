const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter'

// esto se ejecuta si lo dejo sin comentar!!
console.log(module)

// como no exportamos secret, no se puede acceder desde afuera
module.exports = {john,peter} 

/**
 * en los exports del module ponemos lo que va a salir de este modulo:
 * 
 * {
  id: '.',
  path: 'E:\\INFORMATICA\\CURSOS online\\NodeJS Tutorials and Projects Course\\tutorial',
  exports: {},
  filename: 'E:\\INFORMATICA\\CURSOS online\\NodeJS Tutorials and Projects Course\\tutorial\\4-names.js',
  loaded: false,
  children: [],
  paths: [
    'E:\\INFORMATICA\\CURSOS online\\NodeJS Tutorials and Projects Course\\tutorial\\node_modules',
    'E:\\INFORMATICA\\CURSOS online\\NodeJS Tutorials and Projects Course\\node_modules',
    'E:\\INFORMATICA\\CURSOS online\\node_modules',
    'E:\\INFORMATICA\\node_modules',
    'E:\\node_modules'
  ],
  [Symbol(kIsMainSymbol)]: true,
  [Symbol(kIsCachedByESMLoader)]: false,
  [Symbol(kIsExecuting)]: true
}
 */