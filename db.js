const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise;
const connection = mongoose.connect(process.env.DB_HOST);
