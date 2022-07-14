const {gql} = require('apollo-server-express')

const typeDefs = gql`

    type Alert{
        message: String
    }

    type Curso{
        id: ID!
        title: String!
        views: Int
    }
    #----------------------------------------------------------------------------------Otros Schemas-----------------------------------------------------------------------
    type Usuario {
        id: ID!
        email: String!
        pass: String!
        cursos: [Curso]
    }

    type Query {
        getCursos: [Curso]
        getCurso(id: ID!): Curso

        #---------------------------------------------Otras Query---------------------------------------------------------------------
        getUsuarios: [Usuario]
        getUsuario(id: ID!) : Usuario
    }
    type Mutation {
        addCurso(title: String!, views: Int): Curso
        updateCurso(id: ID!, title: String!, views: Int): Curso
        deleteCurso(id:ID!):Alert
        #---------------------------------------------------Otras Mutaciones ------------------------------------------------------------
        addUsuario(email: String!, pass:String!): Usuario
        login(email: String!, pass: String!): Alert
    }
`
module.exports = {typeDefs}