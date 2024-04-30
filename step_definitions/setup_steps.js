const { Before } = require('@wdio/cucumber-framework');
const viewports = require('../config/viewports.json');

Before({ tags: '@mobile' }, async function () {
  await browser.setWindowSize(viewports.mobile.width, viewports.mobile.height);
});
