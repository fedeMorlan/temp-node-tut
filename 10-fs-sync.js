const { log } = require('console')
const {readFileSync, writeFileSync} = require('fs')

/**
 * si un usuario usa el sync, bloquea el acceso al resto de los usuarios
 */

log('start')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

log(first,second)

// overwrites
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`
)

log('done with this task')
log('starting next one')

// appends
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)

log('done with this task')
log('starting next one')
