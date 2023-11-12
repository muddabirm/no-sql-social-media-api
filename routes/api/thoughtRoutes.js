const router = require('express').Router()
const {
    getThought,
    getOneThought,
    createThought,
    deleteThought,
    changeThoughtData,
} = require('../../controllers/thoughtController')

// localhost:3001/api/thoughts
router.route('/').get(getThought).post(createThought)

//localhost:3001/api/users/:thoughtId
router.route('/:thoughtId').get(getOneThought).delete(deleteThought).put(changeThoughtData)

module.exports = router