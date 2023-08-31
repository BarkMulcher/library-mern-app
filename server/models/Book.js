import { Schema, model } from 'mongoose'
import dateFormat from '../utils/dateFormat.js'

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    publishedDate: {
        type: Date,
        get: (timestamp) => dateFormat(timestamp)
    },
    genre: {
        type: String,
        required: true,
        trim: true,
    },
    cover: {
        type: String,
        trim: true
    },
},
    {
        timestamps: true
    }
)

const Book = model('Book', bookSchema)

export default Book