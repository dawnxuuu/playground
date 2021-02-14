const schedule = require('node-schedule');

const j = schedule.scheduleJob('* * * * * *', () => {
  console.log('scheduleCronstyle');
});

if (j) {
  console.warn(j);
}
