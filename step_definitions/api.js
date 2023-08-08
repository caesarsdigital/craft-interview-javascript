import { Given, When, Then } from '@cucumber/cucumber';
import axios from 'axios'; // (https://axios-http.com/docs/api_intro)
import { expect } from 'chai'; // Assertion library (https://www.chaijs.com/api/bdd/)

const baseURL = 'https://api.americanwagering.com/regions/us/locations/nj/brands/czr/sb';
const endpoint = '/v3/sports/americanfootball/events/schedule';
// Reference usage: https://sportsbook.caesars.com/us/nj/bet/americanfootball/events/all
Given(/^I retrieve football events from the API$/, async function () {
  // Use Axios to call the API endpoint referenced above
});
