const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../dataHandler');

// Barcha postlarni olish
router.get('/', (req, res) => {
    const data = readData();
    res.json(data.posts);
});

// Yangi post qo'shish
router.post('/', (req, res) => {
    const data = readData();
    const newPost = req.body;
    data.posts.push(newPost);
    writeData(data);
    res.json(newPost);
});

module.exports = router;
