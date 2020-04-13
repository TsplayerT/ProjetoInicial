const express = require('express');
const app = express();

app.use(json());

app.get('/', () => 'hello world');

app.listen(3001);
