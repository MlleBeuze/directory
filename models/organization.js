const mongoose = require('mongoose');

const organizationSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  phone_numbers: { type: Number, required: true },
  websites: { type: Number, required: true },
  pictures: { type: Number, required: true },
});

module.exports = mongoose.model('Organization', organizationSchema);