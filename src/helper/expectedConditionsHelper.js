const { protractor, $ } = require("protractor");
const EC = protractor.ExpectedConditions;

const popUp = $(".nrp__block");

const ExpectedConditionsHelper = function () {
  this.waitPopUpVisibilityOf = function () {
    return browser.wait(EC.visibilityOf(popUp), browser.getPageTimeout);
  };

  this.waitPopUpInvisibilityOf = function () {
    return browser.wait(EC.invisibilityOf(popUp), browser.getPageTimeout);
  };
};

module.exports = new ExpectedConditionsHelper();
