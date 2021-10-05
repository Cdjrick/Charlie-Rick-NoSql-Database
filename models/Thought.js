const { Schema, model } = require('mongoose')

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Text is Required',
            minlength: 1,
            maxlength: 280
        },

        createdAt: {
            type: String,
            unique: true,
            required: 'Email is Required'
        },

        username: {
            type: String,
            required: 'Username is Required'
        },

        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

ThoughtSchema.virtual('reactionCount').get(reactions.length)

const Thought = model('Thought', ThoughtSchema)

module.exports = Thought