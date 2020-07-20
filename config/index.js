const DEFAULT_ENV = 'GPT';

const viewportJson = require('./viewports.json');

const state = process.env.STATE.toLocaleUpperCase();
const env = process.env.ENV.toUpperCase();
const environmentJson = require('./environment-config')[state];

console.log(environmentJson);

module.exports = {
    viewports: viewportJson,
    ...environmentJson[env || DEFAULT_ENV],
    id: process.env.ENV || DEFAULT_ENV,
};

// What does this file do? Can you describe?
