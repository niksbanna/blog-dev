const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const userSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    age: Number
})

const User = mongoose.model('User', userSchema);

const storySchema = mongoose.Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

const Story = mongoose.model('Story', storySchema);

module.exports = { User, Story };