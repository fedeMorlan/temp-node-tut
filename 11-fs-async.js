const { log } = require('console')
const {readFile, writeFile} = require('fs')

log('start')
readFile('./content/first.txt','utf-8',(err,result) =>{
    if (err){
        log(err)
        return
    }
    // el result por default es un buffer, necesitamos especificar una encodificacion por eso usamos utf8
    // sino se loguea un buffer
    log(result)
    const first = result
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if (err){
            log(err)
            return
        }
    })

    const second = result
    writeFile('./content/result-async.txt',
        `Here is the result : ${first}, ${second}`
        ,(err,result)=>{
            if(err){
                log(err)
                return
            }
            log(result)
            log('done with this task')
        }
    )
})

// esto se imprime primero que el resto, porque al iniciar la tarea no se espera a que termine
log('starting next task')

/**
 * este codigo parece muy complicado para algo tan simple como leer y escribir, para simplificarlo
 * se pueden usar promises y async-await
 * el curso usa mas async await porque parece mas facil
 */