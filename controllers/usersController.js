const express = require('express');
const router = express.Router();
const User = require('../db/models/User')


router.get('/', (req, res) => {
    User.find({})
        .then(users => {
            response.json(users)
        })
        .catch((err) => console.log(err))
})


module.exports = router