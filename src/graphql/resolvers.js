import { categorias } from '../models/categoria.model.js';
import { inventarios } from '../models/inventario.model.js';


const resolvers = {

    Query: {

        hello:() => {
            return 'hola mundo de graphql';
        },
        categorias: async () =>{

            const categoria = await categorias.find({});

            return categoria;

        },
        getCategoriaById: async (root, args) => {

            const { _id } = args;
            
            const categoria = await categorias.find({_id: _id});
            
            return categoria;
        },

        // inventario
        inventario: async () =>{

            const inventario = await inventarios.find({}).populate('categoria');

            return inventario;

        }
    },
    Mutation: {
        
        addCategoria: async (root, args) => {

            const { post } = args;
        
            const categoria = new categorias(post);

            await categoria.save();

            return {
                status: 200,
                message: 'categoria agregado correctamente'
            };

        },
        
        deleteCategoria: async (root, args) => {
    
            const { _id } = args;
    
            await categorias.deleteOne({_id: _id});
    
            return {
                status: 200,
                message: 'categoria eliminado correctamente'
            };
        },

        updateCategoria: async (root, args) => {

            const { _id, data } = args;

            await categorias.updateOne({_id: _id}, data);
            
            return {
                status: 200,
                message: 'categoria actualizado correctamente'
            }

        }

    }

}

export { resolvers };