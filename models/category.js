const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const categorySchema = mongoose.Schema({
  keyName: { type: String, required: true, unique: true },
  translation: {
    'en-GB': { type: String, required: true },
    'fr-FR': { type: String, required: true }
  },
});

categorySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Category', categorySchema);