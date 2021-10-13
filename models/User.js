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
            type: ObjectId, 
            ref: Thought
        }],

        friends: [{ 
            type : ObjectId, 
            ref: this 
        }]
    },

    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const User = model('User', UserSchema);

module.exports = User