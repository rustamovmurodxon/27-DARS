const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../dataHandler');

router.get('/', (req, res) => {
    const data = readData();
    res.json(data.comments);
});

router.post('/', (req, res) => {
    const data = readData();
    const newComment = req.body;
    data.comments.push(newComment);
    writeData(data);
    res.json(newComment);
});

module.exports = router;
