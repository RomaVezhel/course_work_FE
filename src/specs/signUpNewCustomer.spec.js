const { browser, $ } = require("protractor");
const faker = require("faker/locale/es");
const FunnelPage = require("../pages/FunnelPage.js");
const ExpectedConditionsHelper = require("../helper/expectedConditionsHelper.js")
const constants = require("../resources/constantsFunnel");

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const phoneNumber = faker.phone.phoneNumber();
const userEmail = faker.internet.email();

describe("Sign up new customer", function () {
  it("Check URL params", async function () {
    await FunnelPage.get();
    await expect(constants.url).toContain("funnel_qa_course_work");
  });

  it("Set sign up value and submit", async function () {
    await FunnelPage.setFirstName(firstName);
    await FunnelPage.setLastName(lastName);
    await FunnelPage.setPhoneNum(phoneNumber);
    await FunnelPage.setUserEmail(userEmail);
    await expect(FunnelPage.gdprCheckboxSelected()).toBe(true);
    await FunnelPage.clickSubmitBtn();
    await ExpectedConditionsHelper.waitPopUpVisibilityOf();
  });

  it("Check pop up appearing and closed", async function () {});
});

// await browser.wait(
//   EC.and(
//     EC.visibilityOf(popUp),
//     EC.textToBePresentInElement($(".nrp__t1"), "¡Gracias por registrarse!"),
//     EC.textToBePresentInElement(
//       $("div.nrp__t2"),
//       "Permanezca atento y disponible para recibir la llamada de su gestor personal de inversiones, que le ayudará a comenzar"
//     )
//   ),
//   10000
// );
// await FunnelPage.closePopUpBtn();
// await browser.wait(EC.invisibilityOf(popUp), 10000);
