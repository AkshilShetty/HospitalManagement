process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const config = require('./config/config');
const db = require('./config/mongoose');
const app = require('./config/express');
const passport = require('./config/passport');
app.listen(config.port);
module.exports = app;
console.log(`Server running at http://localhost:${config.port}/`);