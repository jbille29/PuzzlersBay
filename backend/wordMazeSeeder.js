require('dotenv').config()
const mongoose = require('mongoose')
const moment = require('moment');

const generateGrid = require('./utils/grid/generateWordMazeGrid.js')
const WordMaze = require('./models/WordMaze.js')
const connectDB = require('./config/db.js')

connectDB()

const importData = async () => {
    try {
        await WordMaze.deleteMany()

        for (let i = 0; i < 5; i++) {
            const date = moment().add(i, 'days').startOf('day').toDate();
            const newCategory = new WordMaze(
                {...generateGrid(), date})
        
            // save the new category
            const savedCategory = await newCategory.save();
        }

        console.log('Data Imported!')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await WordMaze.deleteMany()
        console.log('Data Destroyed!')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}