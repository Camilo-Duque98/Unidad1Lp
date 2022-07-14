const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({

  email: String,

  pass: String,

  cursos: [{

    type: mongoose.Schema.Types.ObjectId,

    ref: 'Curso'

  }]

});

module.exports = mongoose.model('Usuario', usuarioSchema);


/*const { Schema, model } = require('mongoose')

const usuarioSchema = new Schema({

    email: String,
    pass: String,
    cursos: [{
        type: ObjectId,
        ref: 'Curso'
    }]

});

module.exports = mongoose.model('Usuario', usuarioSchema);*/