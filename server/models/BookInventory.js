import { Schema, model } from 'mongoose'
import dateFormat from '../utils/dateFormat'

const bookInventorySchema = new Schema({
    isbn: {
        type: String,
        unique: true,
        required: [true, "An ISBN must be provided"],
        trim: true,
      },
      numBooksAvailable: {
        type: Number,
        required: [true, "The number of books available must be provided"],
        min: 0,
      },
      users: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
},
{
    timestamps: true,
}
)

const BookInventory = mongoose.model('BookInventory', bookInventorySchema)

export default BookInventory