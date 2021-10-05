const { Schema, model } = require('mongoose');
const { Thought } = require('./Thought')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: 'Username is Required'
        },

        email: {
            type: String,
            unique: true,
            required: 'Email is required',
            match: [/.+\@.+\..+/, 'Please enter a valid e-mail address']
        },

        thoughts: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Thought'
        ]},

        friends: []
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

UserSchema.virtual('friendCount').get(friends.length)

const User = model('User', UserSchema);

module.exports = User