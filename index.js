var webdriver = require('selenium-webdriver'),
  firefox = require('selenium-webdriver/firefox'),
  By = require('selenium-webdriver').By,
  until = require('selenium-webdriver').until;

var firefoxProfile = new firefox.Profile();
firefoxProfile.setPreference('webdriver_firefox_allowed_hosts', 'localhost');

var firefoxOptions = new firefox.Options();
firefoxOptions.setProfile(firefoxProfile);

var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .setFirefoxOptions(firefoxOptions)
  .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);

driver.quit();	
