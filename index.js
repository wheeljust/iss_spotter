const { nextISSTimesForMyLocation } = require('./iss');

/** Next ISS Times:
 * Use this function call to initiate a series of API calls
 * Result is a log out of the next 5 times when the ISS will pass over the users location based on thier IP address
 */

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) return console.log('Function failed: ', error);

  for (const time of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    console.log(`Next pass at ${datetime} for ${time.duration} seconds!`);
  }
});