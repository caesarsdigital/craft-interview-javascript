const { config } = require('./common.conf');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
config.logLevel = 'error';
exports.config = config;
// What do you think would go in this file? Why?
