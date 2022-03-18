const express = require('express');
const issuesRoute = express.Router();

let Issue = require('../models/Issue');

issuesRoute.route('/issues').get((req, res) => {
  Issue.find((error, data) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.json(data)
    }
  })
})

issuesRoute.route('/issues').post((req, res) => {
  Issue.create(req.body, (error, data) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.json(data)
    }
  })
})

module.exports = issuesRoute
