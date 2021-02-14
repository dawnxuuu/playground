const _ = require('lodash');

const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }];

const filters = {
  a: 'router',
  b: 'vuex',
};

const asnwers = {
  name: 'desktop',
  router: false,
  vuex: false,
};

const res = _.intersectionWith(Object.entries(filters), Object.entries(asnwers), (p1, p2) => {
  if (p2[1] === false && p1[1] === p2[0]) return true;
  return false;
});

// const res = _.find({ 1: '国企', 2: '私企' }, '国企');

console.log(res);
