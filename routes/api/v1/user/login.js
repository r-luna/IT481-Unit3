const express = require('express');
const router = express.Router();
const database = require('../../../../db/knex.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/', ( request, response ) => {
  const { user } = request.body
  database("users")
    .where({username: user.username })
    .first()
    .then(retrievedUser => {
        if(!retrievedUser) throw new Error("user not found!")
        return Promise.all([
            bcrypt.compare(user.password, retrievedUser.password_hash),
            Promise.resolve(retrievedUser)
        ]).then(results => {
            const areSamePasswords = results[0]
            if(!areSamePasswords) throw new Error("wrong Password!")
            const user = results[1]
            const payload = {username: user.username}
            const secret =  "SECRET"
            jwt.sign(payload, secret, (error, token) => {
                if(error) throw new Error("Sign in error!")
                response.json({token, user})
            }).catch(error => {
                response.json({message: error.message})
            })
        })
    })
});

module.exports = router;
