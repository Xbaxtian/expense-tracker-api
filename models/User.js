import mongoose, { Schema } from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: {
        type: String,
        required: true
    },
    password: { type: String, required: true },
    budget: Number
});

export default mongoose.model('User', userSchema);
