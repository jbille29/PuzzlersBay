require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const cron = require('node-cron')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3500
const connectDB = require('./config/db')
const { handleGetNextPuzzle, wordMazeRouter } = require('./routes/wordMazeRoutes');
mongoose.set('debug', true)

connectDB()
app.use(cors())
app.use('/wordmaze', wordMazeRouter)

app.get('/', (req, res) => {
    res.send('hello')
})

// Schedule the puzzle route to run once a day at 12:00 AM
cron.schedule('0 0 * * *', async () => {
    try {
        // Call the puzzle route handler function
        await puzzleRoute.handleGetNextPuzzle(null, res);
        console.log('Puzzle fetched successfully');
    } catch (err) {
        console.error('Failed to fetch puzzle:', err);
    }
});
  

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error',  err => { 
    console.log(err)
    // /logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})