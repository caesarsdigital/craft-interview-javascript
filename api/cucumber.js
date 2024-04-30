module.exports = {
  default: [
    './features/*.feature',
    '--format summary',
    '--format json:reports/cucumber_report.json',
    '--require-module @babel/register',
    '--require ./step_definitions/*.js',
    '--tags "@api"',
    '--no-strict',
  ].join(' '),
};
