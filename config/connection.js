const {connection, connect} = require('mongoose')
const connectUrl = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialmediaDB' //connect to mongo db
connect(connectUrl)

module.exports = connection