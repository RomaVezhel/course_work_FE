const faker = require("faker/locale/es");


const getdataForEmail = function () {
  let mounth = new Date().getUTCMonth() + 1;
  const Data = new Date();
  return Data.getFullYear() + "." + mounth + "." + Data.getDate() +
      "." + Data.getHours() + "." + Data.getMinutes() +
      "." + Data.getSeconds() + "." + Data.getMilliseconds();
}

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const phoneNumber = faker.phone.phoneNumber();
let userEmail = function () {
  return `nfse2eui${getdataForEmail()}@mailinator.com`;
};

module.exports = {
  firstName,
  lastName,
  phoneNumber,
  userEmail,
};

