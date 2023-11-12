const router = require('express').Router()


const {
    getUsers,
    createUser,
    getOneUser,
    deleteUser,
    changeUserData
} = require('../../controllers/userController')

// localhost:3001/api/users
router.route('/').get(getUsers).post(createUser)

//localhost:3001/api/users/:userId

router.route('/:userId').get(getOneUser).delete(deleteUser).put(changeUserData)

module.exports = router