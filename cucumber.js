module.exports = {
  default: [
    './features/api/*.feature',
    '--format summary',
    '--format json:reports/cucumber_report.json',
    '--require-module @babel/register',
    '--require ./step_definitions/api.js',
    '--tags "@api"',
    '--no-strict',
    '--publish-quiet',
  ].join(' '),
};
