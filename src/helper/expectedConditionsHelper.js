const EC = protractor.ExpectedConditions;

const ExpectedConditionsHelper = function () {
  this.waitPopUpVisibilityOf = async function (element) {
    await browser.wait(EC.visibilityOf(element), browser.getPageTimeout);
  };

  this.waitPopUpInvisibilityOf = function (element) {
    return browser.wait(EC.invisibilityOf(element), browser.getPageTimeout);
  };
};

module.exports = new ExpectedConditionsHelper();
