let express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  dbConfig = require('./database/db');
  cors = require('cors'),

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
app.use(cors());

const eventsRoute = require('./routes/event.route');
app.use('/api', eventsRoute);

const usersRoute = require('./routes/user.route');
app.use('/api', usersRoute)

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

