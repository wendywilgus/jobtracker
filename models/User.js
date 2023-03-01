import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name.'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide email.'],
        validate: {
            validator: ,
            message: 'Please provide a valid email.',
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide your password.'],
        minlength: 6,

    },
    lastName: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'lastName',
    },
    location: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'my city',
    },
})

export default mongoose.model('User', UserSchema);