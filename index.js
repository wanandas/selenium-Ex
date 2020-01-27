const { By, Builder, Key } = require("selenium-webdriver");
require("chromedriver");

async function test() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://google.com");
  await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
}

test();
