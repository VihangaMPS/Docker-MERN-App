const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    email: {
        type: String,
        required: [true, "Please add a email"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('User', userSchema);