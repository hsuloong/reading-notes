const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args:['--no-sandbox', '--disable-setuid-sandbox'], headless:false, defaultViewport:null});
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com/');
  const searchBar = '#kw';
  await page.type(searchBar, '谷歌');
  const searchButton = '#su';
  await page.click(searchButton);
  const firstResult = '#\\31 ';
  await page.waitForSelector(firstResult);
  console.log(await page.$eval(firstResult, el => el.innerHTML));
})();