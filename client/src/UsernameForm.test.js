const username = require('./UsernameForm.jsx');
const pack = require('../package.json');

test('returns whatever the user types into it', () => {
  expect(username("user's shit").toBe("user's shit"));
});
