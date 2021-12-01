import { gql } from 'apollo-server-express';

const typeDefs = gql`

    type Categoria {
        _id: ID!,
        nombre: String!,
        color: String!,
        fechaIngreso: String!                                 
    }

    type Inventario {
        _id: ID!, 
        nombre: String!,
        existencia: Int!,
        costoUnitarioPromedio: Int!,
        precioVentaActual: Int!,
        categoria: Categoria!
    }

    input PostCategoria {
        nombre: String,
        color: String,
        fechaIngreso: String,
    }

    type Response {
        status: Int!,
        message: String!
    }

    type Query {
        hello: String,
        categorias: [Categoria]!,
        getCategoriaById(_id: ID!): [Categoria]!,

        # inventario
        inventario: [Inventario]!,
    }

    type Mutation {

        # categoia
        deleteCategoria(_id: ID!): Response!,

        addCategoria(post: PostCategoria!): Response!,

        updateCategoria(_id: ID!, data: PostCategoria!): Response!

        # inventario
        
    }

`

export { typeDefs }