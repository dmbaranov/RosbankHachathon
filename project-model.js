const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectModel = new Schema({
  id: Number,
  title: String,
  shortDescription: String,
  description: String
});

module.exports = mongoose.model('Project', ProjectModel);