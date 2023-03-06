const WordMaze = require('../models/WordMaze');
const express = require('express');
const moment = require('moment');
const wordMazeRouter = express.Router();

wordMazeRouter.get('/next', (req, res) => {
    // Get the current date and time
    const now = moment();
  
    // Find the next puzzle with a date greater than or equal to the current date
    WordMaze.findOne({ date: { $gte: now.startOf('day').toDate() } })
        .sort({ date: 1 })
        .then((puzzle) => {
            if (!puzzle) {
            res.status(404).send('No puzzles found');
            } else {
            res.send(puzzle);
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal server error');
    });

  });

async function handleGetNextPuzzle(req, res) {
  try {
    // Get the current date
    const currentDate = new Date();
    // Get tomorrow's date
    const tomorrowDate = new Date(currentDate);
    tomorrowDate.setDate(currentDate.getDate() + 1);

    // Find the next puzzle in the database
    const nextPuzzle = await WordMaze.findOne({ date: { $gte: currentDate, $lt: tomorrowDate } }).exec();

    // If a puzzle was found, return it
    if (nextPuzzle) {
      res.status(200).json({ puzzle: nextPuzzle });
    } else {
      res.status(404).json({ message: 'No puzzle found for the next day' });
    }
  } catch (err) {
    console.error('Failed to get next puzzle:', err);
    res.status(500).json({ message: 'Failed to get next puzzle' });
  }
}

module.exports = { handleGetNextPuzzle, wordMazeRouter };
