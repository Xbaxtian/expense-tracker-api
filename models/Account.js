import mongoose, { Schema } from 'mongoose';

const accountSchema = mongoose.Schema({
    name: String,
    user: { type: Schema.Types.ObjectId, ref:'User', required: true },
});

export default mongoose.model('Account', accountSchema);
