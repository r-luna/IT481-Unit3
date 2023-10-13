const express = require('express');
const router = express.Router();
const database = require('../db/knex.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

function authenticate(request, response, next) {
  const authHeader = request.get('Authorization');
  const token = authHeader.split(' ')[1];
  const secret = 'SECRET';
  jwt.verify(token, secret, (error, payload) => {
      if (error) {
        throw new Error('Sign in error!');
      }
      database('users')
      .where({username: payload.username})
      .first()
      .then(user => {
          request.user = user.username;
          request.role = user.role;
          next();
      }).catch(error => {
          response.json({message: error.message});
      });
  })
}

module.exports = authenticate;
