const mongoose = require('mongoose')

const wordMazeSchema = new mongoose.Schema(
    {
        secretWord: {
            type: String,
            required: true
        },
        grid: [[{
            type: String,
            required: true
        }]],
        coordinates: [[{
            type: Number,
            required: true
        }]],
        date: {
            type: Date,
            require: true
        }
    }
)

module.exports = mongoose.model('WordMaze', wordMazeSchema)