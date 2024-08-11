const mongoose = require('mongoose');

const QuestionsSchema = new mongoose.Schema({
  q1: {
    type: String,
    required: true,
  },
  q2: {
    type: String,
    required: true,
  },
  q3: {
    type: String,
    required: true,
  },
  q4: {
    type: String,
    required: true,
  },
  q5: {
    type: String,
    required: true,
  },
  q6: {
    type: String,
    required: true,
  },
  q7: {
    type: String,
    required: true,
  },
  q8: {
    type: String,
    required: true,
  },
  q9: {
    type: String,
    required: true,
  },
  q10: {
    type: String,
    required: true,
  },
  q11: {
    type: String,
    required: true,
  },
  q12: {
    type: String,
    required: true,
  },
  q13: {
    type: String,
    required: true,
  },
  q14: {
    type: String,
    required: true,
  },
  q15: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Questionario', QuestionsSchema);