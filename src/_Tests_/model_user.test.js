const {User, get_User_Age} = require('../Models/User.js')

test('user model and age', () => {

  console.log('aaaaaaa', User.name);

  get_User_Age(10);

  expect(User.age).toEqual(10);

  expect(typeof User).toBe('object');
  expect(typeof User.age).toBe('number');
});
