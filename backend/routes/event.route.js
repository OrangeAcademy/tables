const express = require('express');
const eventsRoute = express.Router();

let Event = require('../models/Event');

eventsRoute.route('/events').get((req, res) => {
  Event.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

eventsRoute.route('/events').post((req, res) => {
  Event.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = eventsRoute
