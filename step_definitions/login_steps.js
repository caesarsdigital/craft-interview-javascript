import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai'; // Assertion library (https://www.chaijs.com/api/bdd/)
import { loginPage } from '../pom';
import stateConfig from '../config/environment-config/stateConfig.json';

// What is this file for?
Given(/^I am on the Sportsbook$/, async function () {
  await loginPage.open(stateConfig.NJ.url); // How could this be implemented to run in other states dynamically?
  await loginPage.appHeader.waitForDisplayed();
});

When(/^I enter invalid credentials$/, async function () {
  // TODO: Code for @task-1 belongs here
});

Then(/^there is an error informing me about invalid credentials$/, async function () {
  const error = 'You have entered an incorrect email or password.';
  expect(await loginPage.errorMessage.getText()).to.include(error);
});
