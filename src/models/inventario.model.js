import mongoose from 'mongoose';

const inventario = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    existencia: {
        type: Number,
        require: true,  
    },
    costoUnitarioPromedio: {
        type: Number,
        require: true
    },
    precioVentaActual: {
        type: Number,
        require: true,
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorias'
    }
});


const inventarios = mongoose.model('Inventarios',inventario);

export { inventarios }