const {ApolloError} = require('apollo-server-express')

const Curso = require('./models/Curso')
const Usuario = require('./models/usuario')

const resolvers = {
    Query: {
        getCursos: async () => {
            const cursos = await Curso.find()
            return cursos
        },
        getCurso: async(_, args) => {
            const curso = Curso.findOne({id: args._id})
            return curso
        },
        getUsuarios: async(_,args) => {
            const usuarios = await Usuario.find()
            return usuarios
        },
        //-------------------------------------------------------Otras queries--------------------------------------------------
        getUsuario: async(_, args) => {
            const usuario = Usuario.findOne({id: args._id})
            return usuario
        }
    },
    Mutation:{
        async addCurso(_,args){
            const {title, views}= args
            const newCurso = new Curso({title, views})
            await newCurso.save()
            return newCurso 
        },
        async updateCurso(_, args){
            const cursoUpdate = await Curso.findByIdAndUpdate(args.id,{
                $set: args
            })
            return cursoUpdate
        },
        async deleteCurso(_,{id}){
            await Curso.deleteOne({_id:id})
            return {
                message:`El curso con id ${id} fue eliminado`
            }
        },
        //-------------------------------Otras mutaciones-----------------------------------------------
        async addUsuario(_, {email, pass}){
            const newUser = new Usuario({email, pass})
            await newUser.save()
            return newUser
        },
        async login (_,{email, pass}){
            const log = Usuario.findOne({email: args.email, pass: args.pass})
            return {
                message:`Ingreso exitosamente`
            }
        }


    }
}
module.exports = {resolvers}