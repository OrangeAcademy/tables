let express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  dbConfig = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(() => {
    console.log('Database sucessfully connected')
  },
  error => {
    console.log('Database could not connected: ' + error)
  }
)

const app = express();
app.use(bodyParser.json());

const eventsRoute = require('./routes/event.route');
app.use('/api', eventsRoute)

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

