import { Schema, model } from 'mongoose'
import dateFormat from '../utils/dateFormat'
import bcrypt from 'bcrypt'

const studentSchema = new Schema({
    fullName: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    photo: {
        type: String,
        default: 'default.png'
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    issuedBooks: [
        {
          book: {
            type: Schema.Types.ObjectId,
            ref: "Book",
            required: true,
          },
          issuedDate: { type: Date, default: Date.now },
          returnDate: {
            type: Date,
            default: new Date(Date.now() + 16 * 24 * 60 * 60 * 1000), //16 days ahead of the issued date by default
          },
        },
      ],
      totalFine: { type: Number, default: 0 },
      booksUsed: [
        {
          book: {
            type: Schema.Types.ObjectId,
            ref: "Book",
            required: true,
          },
          issuedDate: { type: Date, required: true },
          returnDate: { type: Date, required: true },
          fineAmount: { type: Number, required: true },
        },
      ],
},
{
    timestamps: true
})

studentSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

export default User