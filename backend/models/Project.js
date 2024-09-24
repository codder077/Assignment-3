const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  outcomes: [String],
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
