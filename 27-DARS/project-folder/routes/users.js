const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../dataHandler');

// Barcha foydalanuvchilarni olish
router.get('/', (req, res) => {
    const data = readData();
    res.json(data.users);
});

// Foydalanuvchi qo'shish
router.post('/', (req, res) => {
    const data = readData();
    const newUser = req.body;
    data.users.push(newUser);
    writeData(data);
    res.json(newUser);
});

module.exports = router;
