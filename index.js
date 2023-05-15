const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('Hello World!');
});
app.listen(3005, () => console.log('Listening at 3005'));