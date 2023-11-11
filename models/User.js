const {Schema, model} = require('mongoose') // require in schema and model 
//defining the schema for the user model
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    thoughts:[{
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    }],
    friends:[{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
)

//creates a friend count virtual to count the length of the user's friends array
postSchema.virtual('friendCount').get(function (){
    return this.friends.length
})

const User = model('user', userSchema)
//exports user module
module.exports = User
