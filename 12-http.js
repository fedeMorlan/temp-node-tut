/** es un primer vistazo, luego lo cubre en mas detalle
 * lo usa para crear el server
 */
const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log(req) // es un objeto gigante
    if (req.url === '/'){
        res.end('Welcome to our home page')
        // si no ponemos el return, js sigue intentando ejecutar abajo
        // no se permiten multiples res.end para un req
        return

    }
    if (req.url === '/about'){
        res.end('Here is our short history')
        return
    }
    // res.write('Welcome to our home page') // pone esto para todas las url bajo esa misma home

    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
})

// luego vamos a localhost:5000
server.listen(5000)