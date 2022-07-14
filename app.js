const express = require('express')

const {ApolloServer} = require('apollo-server-express')

const {typeDefs} = require('./typeDefs')

const {resolvers} = require('./resolvers')

const {connectDB} = require('./db')

const app = express()

connectDB()

module.exports = app

async function start(){
    const apolloServer= new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({app})

    app.get('*',(req,res)=>
        res.status(404).send('Error 404')
        )
    
    app.listen(4001,()=>{
        console.log('Server on port', 4001)
    })

    
}

start();