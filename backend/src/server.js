const app = require('./app');

app.listen(
  process.env.API_PORT,
  () => console.log(`Express server running on ${process.env.API_PORT}.`),
);
