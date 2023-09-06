const { Before } = require('@cucumber/cucumber');
const viewports = require('../config/viewports.json');

Before({ tags: '@mobile' }, async function () {
  await browser.setWindowSize(viewports.mobile.width, viewports.mobile.height);
});
