import mongoose from 'mongoose';

const categoria = mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        min: [5, 'El nombre de la categoria debe tener 5 caracteres como minimo'],
        max: [9, 'El nombre de la categoria debe tener 9 caracteres como maximo']
    },
    color: {
        type: String,
        required: true,
    },
    fechaIngreso: {
        type: String,
        required: true
    }


});

const categorias = mongoose.model('Categorias', categoria);

export { categorias };