import axios from 'axios';

export default function getSportsbookEvents(sport) {
    const sportsUrl = `${CONFIG.url}/api/highlights/dailies/${sport}`;

    const config = {
        method: 'get',
        headers: { ...CONFIG.xNJDHeader },
        url: sportsUrl,
    };

    // Write the API call on the line below using the module given
    // https://www.npmjs.com/package/axios
    // Store the response from the API call in the "response" variable so it can be parsed later
    // Your code here:


    // Modify this code to retrieve events no further in the future than the next 24 hours
    // You'll find the date field in the response JSON at the top level

    if (response.data.competitions.length > 0) {
        if (response.data.competitions[0].competitionId && response.data.competitions[0].events.length) {
            return response.data;
        }
        throw new Error(`No events here... \n ${CONFIG.url}/api/highlights/dailies/${sport}`);
    }
    throw new Error(`No events here... \n ${CONFIG.url}/api/highlights/dailies/${sport}`);
}
