import mongoose, { Schema } from 'mongoose';

const categorySchema = mongoose.Schema({
    name: String,
    color: String
});

export default mongoose.model('Category', categorySchema);
