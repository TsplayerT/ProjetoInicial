const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.listen(3002, () => {
    console.log('listen in 3001 port');
});