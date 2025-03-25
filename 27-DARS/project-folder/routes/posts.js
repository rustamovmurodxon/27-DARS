const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../dataHandler');

router.get('/', (req, res) => {
    const data = readData();
    res.json(data.posts);
});

router.post('/', (req, res) => {
    const data = readData();
    const newPost = req.body;
    data.posts.push(newPost);
    writeData(data);
    res.json(newPost);
});

module.exports = router;
