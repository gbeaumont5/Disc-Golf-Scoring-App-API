const express = require('express');
const scores = express.Router();
const Score = require('../models/scores');

scores.get('/', (req, res) => {
    Score.find({}, (err, foundScores) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundScores)
    })
})

scores.post('/', (req, res) => {
    Score.create(req.body, (error, createdScore) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).send(createdScore)

    })
})

scores.delete('/:id', (req, res) => {
    Score.findByIdAndRemove(req.params.id, (err, deleteScore) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(deletedScore)
    })
})

scores.put('/:id', (req, res) => {
    Score.findByIdAndUpdate(req.params.id, req.body, {new: true }, (err, updatedScore) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(updatedScore)
    })
})

module.exports = scores



