const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios'); // (https://axios-http.com/docs/api_intro)
const { expect } = require('chai'); // Assertion library (https://www.chaijs.com/api/bdd/)

const baseURL = 'https://api.americanwagering.com/regions/us/locations/nj/brands/czr/sb';
const endpoint = '/v3/sports/americanfootball/events/schedule';
// Reference usage: https://sportsbook.caesars.com/us/nj/bet/americanfootball/events/all

const config = {
  headers: { 'User-agent': 'Chrome', 'X-Platform': 'cordova-desktop' },
}; // This config variable might be needed. Could you explain why?

Given(/^I retrieve football events from the API$/, async function () {
  // Use Axios to call the API endpoint referenced above.
});

// Please use the chai assertion library when making any assertions
