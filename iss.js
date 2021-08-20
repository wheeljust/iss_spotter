const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = (callback) => {
  request('https://api.ipify.org/?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
      return;
    }

    callback(null, JSON.parse(body).ip);
  });
};

/**
 * Makes a single API request to retrieve the user's location based on IP address.
 * Input:
 *   - Users IP address
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The LAT & LON coordinates of the user based on IP location
 */

const fetchCoordsByIP = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, (error, response, data) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${data}`), null);
      return;
    }

    const LAT = JSON.parse(data).latitude;
    const LON = JSON.parse(data).longitude;

    callback(null,{ LAT, LON });
  })
};

module.exports = { 
  fetchMyIP,
  fetchCoordsByIP
};