const { config } = require('./common.conf');

config.logLevel = 'silent';
config.services = ['chromedriver'];
config.onComplete = {}; // comment out if you need cucumber reports locally
config.cucumberOpts.tagExpression = process.env.TAG || '@test';
config.chromeDriverArgs = ['--disable-gpu', '--no-sandbox', '--disable-infobar', '--disable-dev-shm-usage'];
config.hostname = 'localhost';
exports.config = config;
