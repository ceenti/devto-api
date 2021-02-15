const mongoose = require('mongoose')//Biblioteca de JS define schemas con datos tipados
//Modelos; representación de una colección, similar al squema de RoR cuenta con
// 1. un nombre de colección
// 2. y un schema que es la estructura y definición del tipo de campo
const schema = new mongoose.Schema({//Herramienta de modelado de objeto de tipo MongoDB
    email: {
        type: String,
        pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    password: {
        type: String,
        required: true 
    }
})

module.exports = mongoose.model('users', schema)