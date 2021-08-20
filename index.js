const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked. Returned IP:", ip);
// });

// fetchCoordsByIP('75.156.173.19', (error, data) => {
//   console.log(error);
//   console.log(data);
// });

// fetchISSFlyOverTimes({ latitude: 51.0857, longitude: -114.0234 }, (error, data) => {
//   console.log(error);
//   console.log(data);
// });
