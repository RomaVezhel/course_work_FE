const { browser, $, protractor } = require("protractor");

const firstName = $("#first_name");
const lastName = $("#last_name");
const phoneNumber = $("#phone_num");
const userEmail = $("#user_email");
const submitBtn = $("#lead-form-submit");
const popUpBtn = $("div.nrp__btn");
const gdpr = $("#gdpr-checkbox");
const popUpText1 = $(".nrp__t1");
const popUpText2 = $(".nrp__t2");

const FunnelPage = function () {
  this.get = async function () {
    await browser.get(
      "https://promo7.floralital-marketing.com/funnel_qa_course_work/"
    );
  };

  this.setFirstName = async function (value) {
    await firstName.sendKeys(value);
  };

  this.setLastName = async function (value) {
    await lastName.sendKeys(value);
  };

  this.setPhoneNum = async function (value) {
    await phoneNumber.sendKeys(value);
  };

  this.setUserEmail = async function (value) {
    await userEmail.sendKeys(value);
  };

  this.clickSubmitBtn = async function () {
    await submitBtn.click();
  };

  this.gdprCheckboxSelected = function () {
    return gdpr.isSelected();
  };

  this.popUpContentText1 = function () {
    return popUpText1.getText();
  };

  this.popUpContentText2 = function () {
    return popUpText2.getText();
  };


  this.closePopUpBtn = async function () {
    await popUpBtn.click();
  };
};

module.exports = new FunnelPage();
