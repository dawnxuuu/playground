const updateNotifier = require('update-notifier');

const notifier = updateNotifier({
  pkg: {
    name: 'axios',
    version: '0.1.0',
  },
});

notifier.notify();

console.log(notifier.update);
