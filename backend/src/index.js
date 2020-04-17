const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world!');
});

const port : integer = 3002;

app.listen(port, () => {
    console.log(`listen in ${port} port`);
});