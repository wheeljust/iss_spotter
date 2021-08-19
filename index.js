const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked. Returned IP:", ip);
// });

fetchCoordsByIP('75.156.173.187', (error, data) => {
  console.log(error);
  console.log(data);
});