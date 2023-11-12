const { Thought,User, Reaction} = require('../models')



module.exports = {
    //get all Thoughts
    async getThought(req,res){
        try {
            const thoughtData = await Thought.find()
            res.status(200).json(thoughtData)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    //get one Thought by id
    async getOneThought (req,res){
        try {
            const thoughtData = await Thought.findOne({_id: req.params.thoughtId}).select('-__v') //select __v to remove the version form document

            if (!thoughtData) {
                res.status(404).json('no Thought with that id')
            }
            res.json(thoughtData)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //create a Thought
    async createThought (req,res){
        try {
            const thoughtData = await Thought.create(req.body)
            res.json(thoughtData)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //delete a Thought
    async deleteThought (req,res){
        try {
            const thoughtData = await Thought.findOneAndDelete({_id: req.params.thoughtId})

            if (!thoughtData) {
                res.status(500).json('no Thought with that id')
            }
            res.status(200).json('thought deleted')

        } catch (error) {
            res.status(500).json(error)
            
        }
    },
    // update a Thought
    async changeThoughtData (req,res){
        try {
            const thoughtData = await Thought.findByIdAndUpdate(
                //uses id to find and change the Thought info
                {_id: req.params.thoughtId},
                {$set: req.body},
                {runValidators: true, new: true}
            )
            if(!thoughtData) {
                res.status(404).json('no Thought with that id')
            }
            res.json(thoughtData)
        } catch (error) {
            res.status(500).json(error)
        }
    }








}