const config = {
  baseUrl: process.env.BASE_URL || 'https://playwright.dev',
  recordVideos: process.env.PWVIDEO || false,
  browser: process.env.BROWSER || 'chromium', // chromium or firefox or webkit
  defaultTimeout: 60 * 1000, // milliseconds
  runHeadless: true,
  runSlow: 0, // milliseconds
  BASE_API_URL: 'https://ghibliapi.herokuapp.com',
};

export default config;
