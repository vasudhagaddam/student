import mongoose from 'mongoose'

const marksSchema = new mongoose.Schema({
    student: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Students',
        required: true
    },
    
    subject: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Subjects',
        required: true
    },
    mark: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const model = mongoose.model('Marks', marksSchema)

export default model