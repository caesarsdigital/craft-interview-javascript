require('dotenv').config();

// Make adjustments if necessary. Elaborate on any changes made.
exports.config = {
  runner: 'local',
  specs: ['../../features/**/*.feature'],
  maxInstances: 10,
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'stable',
    },
  ],
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'error',
  bail: 0,
  baseUrl: 'https://sportsbook.caesars.com/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: ['spec'], // What other reporters do you have experience with?
  cucumberOpts: {
    require: ['./step_definitions/*.js'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: process.env.TAG || '@interview and not @Skip',
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};
