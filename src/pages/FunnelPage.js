const { browser, $ } = require("protractor");
const EC = require("../helper/expectedConditionsHelper.js")
const firstName = $("#first_name");
const lastName = $("#last_name");
const phoneNumber = $("#phone_num");
const userEmail = $("#user_email");
const submitBtn = $("#lead-form-submit");
const popUpBtn = $("div.nrp__btn");
// const gdpr = $("#gdpr-checkbox");
const popUpNrpText1 = $(".nrp__t1");
const popUpNrpText2 = $(".nrp__t2");
const popUp = $(".nrp__block");

const FunnelPage = function () {
  this.get = async function () {
    await browser.get("https://promo7.floralital-marketing.com/funnel_qa_course_work/");
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

  // this.gdprCheckboxSelected = function () {
  //   return gdpr.isSelected();
  // };

  this.popUpContentText1 = function () {
    return popUpNrpText1.getText();
  };

  this.popUpContentText2 = function () {
    return popUpNrpText2.getText();
  };

  this.popVisible = function () {
    EC.waitPopUpVisibilityOf(popUp);
    return popUp.isPresent()
  }

  this.popInvisible = function () {
    EC.waitPopUpInvisibilityOf(popUp);
    return popUp.isPresent()
  }

  this.closePopUpBtn = async function () {
    await popUpBtn.click();
  };
};

module.exports = new FunnelPage();
