const User = {
  name: String,
  mail: Number,
  age: Number
}

const get_User_Age = (age) => {
  return User.age = age;
}

module.exports = {User, get_User_Age};
