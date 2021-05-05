const FunnelPage = require("../pages/FunnelPage.js");
const constants = require("../resources/constants");
const singUpUserData = require("../test_data/signUpUserData.js");


describe("Sign up new customer", function () {
  it("Check URL params", async function () {
    await FunnelPage.get();
    await expect(constants.url).toContain("funnel_qa_course_work");
  });

  it("Set sign up value and submit", async function () {
    await FunnelPage.setFirstName(singUpUserData.firstName);
    await FunnelPage.setLastName(singUpUserData.lastName);
    await FunnelPage.setPhoneNum(singUpUserData.phoneNumber);
    await FunnelPage.setUserEmail(singUpUserData.userEmail());
    await expect(FunnelPage.gdprCheckboxSelected()).toBeTruthy();
    await FunnelPage.clickSubmitBtn();
    await expect(FunnelPage.popVisible()).toBeTruthy();
    await expect(FunnelPage.popUpContentText1()).toEqual(constants.popText.popUpNrpText1);
    await expect(FunnelPage.popUpContentText2()).toEqual(constants.popText.popUpNrpText2);
    await FunnelPage.closePopUpBtn();
    await expect(FunnelPage.popInvisible()).toBeTruthy();
  });
});



