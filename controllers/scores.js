const express = require('express');
const holidays = express.Router();

holidays.get('/', (req, res) => {
    res.send('index')
})

module.exports = holidays



