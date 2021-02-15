const express = require('express') // Infraestructura Web de direccionamiento y middleware

const postRouter = require('./routes/posts')//Middleware de nivel de direccionador
const authRouter = require('./routes/auth')//Hace referencia al contenido de los routes; posts y auth
const server = express()// framework de aplicación web, provee herramientas para web and mobile apps
const cors = require('cors') //Middleware 
// Cross-origin resource sharing; permite peticiones AJAX evadir la política de same-origin
//Y recursos de acceso desde hosts remotos
server.use(cors())// dependencia o módulo bloquea peticiones httpdesde el front a cualquier 
//API que no se encuentra en el mismo dominio u origen
server.use(express.json()) //Función Middleware de Express
server.use('/posts', postRouter)
server.use('/auth', authRouter)

server.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'DevtoAPIv10'
    })
})

module.exports = server
// Las funciones de Middlewares tienen acceso al objeto de solicitud (request ó req)
// y al objeto de respuesta (response o res) y a la siguente función denominada "next"
//