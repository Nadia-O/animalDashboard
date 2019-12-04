const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'An animal must have a name.'],
        minlength: [3, 'Name must be at least 3 characters.']
    },
    stripes: {
        type: Number,
        required: [true, 'An animal must have stripes.'],
        min: [1, 'Need at least one stripe.']
    },
    description: {
        type: String,
        required: [true, 'Tell us more...'],
        maxlength: [50, 'Description is too long.']
    }
}, {timestamps:true})

mongoose.model('Animal', AnimalSchema);