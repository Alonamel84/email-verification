const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const email = new Schema({
  email: String,
  code: String,
  verify: {
    type: Boolean,
    default: false,
  },
});
const Email = mongoose.model('email', email);
module.exports = Email;
