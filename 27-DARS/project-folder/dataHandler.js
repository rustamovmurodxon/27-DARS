const fs = require('fs');
const DATA_FILE = './data.json';

function readData() {
    if (!fs.existsSync(DATA_FILE)) {
        return { users: [], posts: [], comments: [] };
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

module.exports = { readData, writeData };
