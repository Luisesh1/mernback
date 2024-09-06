const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  logo: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  subscribers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

EventSchema.pre('save', function (next) {
  this.subscribers = [...new Set(this.subscribers.map(id => id.toString()))];
  next();
});

module.exports = mongoose.model('Event', EventSchema);
