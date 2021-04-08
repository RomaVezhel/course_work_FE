const faker = require("faker/locale/es");

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const phoneNumber = faker.phone.phoneNumber();
const userEmail = faker.internet.email();

module.exports = {
  firstName,
  lastName,
  phoneNumber,
  userEmail,
};
