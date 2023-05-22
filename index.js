const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const routes = require('./app/routes');
const PORT = 4040;


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbUser:%23Niks2023@cluster0.lsqkhwx.mongodb.net/test')
    .then(() => console.log('App is connected to Database'))
    .catch((err) => console.log(err))

app.use(bodyParser.json())
routes(app);


app.listen(PORT, () => console.log(`App is listning at port ${PORT}`));