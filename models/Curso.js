const { Schema, model} = require('mongoose')

const CursoSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    views:{
        type: Number,
        required: true
    }
}) 

module.exports = model("Curso", CursoSchema)