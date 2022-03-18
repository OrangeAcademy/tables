const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
  email: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  issueType: {
    type: String,
    default: ""
  }
}, {collection: "Issues"});

module.exports = mongoose.model('Issue', IssueSchema)
