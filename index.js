var webdriver = require('selenium-webdriver'),
  firefox = require('selenium-webdriver/firefox'),
  By = require('selenium-webdriver').By,
  until = require('selenium-webdriver').until;

// Fix for https://code.google.com/p/selenium/issues/detail?id=3280#c5
var firefoxProfile = new firefox.Profile();
firefoxProfile.setPreference('webdriver_firefox_allowed_hosts', 'localhost');
var firefoxOptions = new firefox.Options();
firefoxOptions.setProfile(firefoxProfile);

// Create a selenium server configured to run firefox
var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .setFirefoxOptions(firefoxOptions)
  .build();

// Example from https://github.com/SeleniumHQ/selenium/blob/master/javascript/node/selenium-webdriver/README.md
driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000)
.then(function() {
  console.log('Everything seems to be in order.');
});

// Tear down the selenium server
driver.quit();	
