const express = require('express')
const posts = require('./../usecases/posts')
const authMiddleware = require('../middlewares/auth')


const router = express.Router() // Middleware de nivel de direccionador (enlazado a una instancia de express.Router)
// similar a un Middleware de app

router.get('/', async (request, response) => {
    const allPosts = await posts.getAll()

    response.json({
        success: true,
        data: allPosts
    })
})

router.get('/:id', authMiddleware, async (request, response) => {
    const postById = await posts.getById(request.params.user_id)

    response.json({
        success: true,
        data: postById
    })
})

router.post('/', authMiddleware, async (request, response) => {
    const{ date, picUrl, savedPost, tags, text, title, user_id } = request.body
    const postCreated = await posts.create( date, picUrl, savedPost, tags, text, title, user_id )

    response.json({
        success: true,
        data: postCreated
    })
})

router.delete('/:id', async (request, response) => {
    const postDeleted = await posts.deleteById(request.params.id)

    response.json({
        success: true,
        data: postDeleted
    })
})

router.patch('/:id', async(request, response) => {
    // recibir name y age de body
    const id = request.params.id
    const {date, picUrl, savedPost, tags, text, title } = request.body

    const postUpdated = await posts.updateById(id, date, picUrl, savedPost, tags, text, title)

    response.json({
        success: true,
        data: postUpdated
    })
})

module.exports = router