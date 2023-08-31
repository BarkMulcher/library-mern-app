import mongoose from 'mongoose'

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/library-mern-app',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
)

export default mongoose.connection