const{Thought, User}= require("../models")

module.exports = {
    //get all users
    async getUsers(req,res){
        try {
            const userData = await User.find()
            res.status(200).json(userData)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    //get one user by id
    async getOneUser (req,res){
        try {
            const userData = await User.findOne({_id: req.params.userId}).select('-__v') //select __v to remove the version form document

            if (!userData) {
                res.status(404).json('no user with that id')
            }
            res.json(userData)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //create a user
    async createUser (req,res){
        try {
            const userData = await User.create(req.body)
            res.json(userData)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //delete a user
    async deleteUser (req,res){
        try {
            const userData = await User.findOneAndDelete({_id: req.params.userId})

            if (!userData) {
                res.status(500).json('no user with that id')
            }
            res.status(200).json('user deleted')
        } catch (error) {
            res.status(500).json(error)
            
        }
    },
    // update a user
    async changeUserData (req,res){
        try {
            const userData = await User.findByIdAndUpdate(
                //uses id to find and change the user info
                {_id: req.params.userId},
                {$set: req.body},
                {runValidators: true, new: true}
            )
            if(!userData) {
                res.status(404).json('no user with that id')
            }
            res.json(userData)
        } catch (error) {
            res.status(500).json(error)
        }
    }








}