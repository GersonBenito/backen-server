import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { config } from 'dotenv';
import { dbConexion } from './src/database/config.js';
import { typeDefs } from './src/graphql/typeDefs.js';
import { resolvers } from './src/graphql/resolvers.js';

config();

dbConexion();

const app = express();

app.use(cors());

app.use(express.json());

const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

await apolloServer.start();

apolloServer.applyMiddleware({ app });

app.use((req, res) =>{
    res.status(200).json({
        status: 200,
        message: 'hola desde express apollo server'
    })
})

app.listen( process.env.PORT, () =>{
    console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
});



