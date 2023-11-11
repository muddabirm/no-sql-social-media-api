const {Schema, model} = require('mongoose') // require in mongoose
const reactionSchema = require('./Reaction') // require in reaction schema
//defining the schema for the user model
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
   
    reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    },
)
//counts the length of the thought reaction array field
postSchema.virtual('reactionCount').get(function (){
    return this.reactions.length
})

const User = model('thought', thoughtSchema)
//exports thought module
module.exports = Thought
