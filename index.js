const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('mongoose');
const { User, Story } = require('./models/userModel');
mongoose.connect('mongodb+srv://dbUser:%23Niks2023@cluster0.lsqkhwx.mongodb.net/test')
    .then(() => console.log('connected to db'))
    .catch((err) => console.log(err))

app.use(bodyParser.json())
app.use(cors())


app.get('/', async (req, res) => {
    const users = await User.find({})
    console.log(users);
    res.status(200).send(users)
});

app.get('/story', async (req, res) => {
    const story = await Story.findOne({ title: 'A new story' }).populate(['author', 'fans'])
    console.log(story)
    res.send(200, story)
})
app.post('/', async (req, res) => {
    const { firstName, lastName, age } = req.body;
    const user = new User(
        { _id: new mongoose.Types.ObjectId(), firstName, lastName, age }
    )
    await user.save()
    console.log(user)
    res.status(200).send(user)
})

app.post('/story', async (req, res) => {
    const { author, title, fans } = req.body;
    console.log(req.body);
    const story = new Story({
        author, title, fans
    })
    await story.save()
    console.log(story)
    res.send(200, story);
})

app.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = await User.findById(id);
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.age = age || user.age;
    console.log(user);
    res.send(user)
})

app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    user.deleteOne();
    res.send('user deleted successfully')
})

app.listen(3005, () => console.log('Listening at 3005'));