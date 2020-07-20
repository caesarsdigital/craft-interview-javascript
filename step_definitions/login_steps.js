import { Given, Then } from 'cucumber';
import { loginPage } from '../pom';

// What is this file for?
// Hint:
// if you need to pass values between the steps,
// use the scenario level CONFIG variable which is set up in common.conf.js
// e.g.: CONFIG.foo = 'foo'

Given(/^I am on the Sportsbook$/, function () {
    loginPage.open(CONFIG.url);
});

Then('The login widget is displayed', () => loginPage.email.waitForDisplayed());
