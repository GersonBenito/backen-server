import mongoose from 'mongoose';

const dbConexion = async () => {

    try {
        
        await mongoose.connect( process.env.DATABASE, {
            useNewUrlParser: true,
        });

        console.log('conectado a la base de datos');

    } catch (error) {
        
        console.log('error al intertar conectarse a la base de datos', error);

    }

}

export { dbConexion }