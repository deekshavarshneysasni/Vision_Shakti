const mongoose =require('mongoose');
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    course: { type: String, required: true }, // Added course field
    message: { type: String, required: true }, // Corrected typo
});

module.exports = mongoose.model('User', userSchema);
