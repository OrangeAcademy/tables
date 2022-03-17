const express = require('express');
const eventsRoute = express.Router();

let Event = require('../models/Event');

eventsRoute.route('/events').get((req, res) => {
  Event.find((error, data) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.json(data)
    }
  })
})

eventsRoute.route('/events').post((req, res) => {
  Event.create(req.body, (error, data) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.json(data)
    }
  })
})

eventsRoute.route('/events/:id').delete((req, res) => {
  Event.findOneAndRemove({ _id: { $eq: req.params.id } }, (error) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.json(req.params.id);
    }
  })
})

module.exports = eventsRoute
