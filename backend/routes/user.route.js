const express = require('express');
const usersRoute = express.Router();

let User = require('../models/User');

usersRoute.route('/users').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = usersRoute

