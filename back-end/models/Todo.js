const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  description: String,
  isFinished: {type: 'boolean', default: false},
});

module.exports = mongoose.model('todo', TodoSchema);
