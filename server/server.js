import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import db from './config/connection.js'

const app = express()

const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})