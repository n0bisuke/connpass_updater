import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';

// Launch the browser and open a new blank page
// const browser = await puppeteer.launch();

const browser = await puppeteer.launch({
  headless: true,
  // executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', // Brave用のパス
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage'
  ]
});
try {
  const page = await browser.newPage();
  
  console.log('Navigating to example.com...');
  await page.goto('https://x.com/n0bisuke');
  
  const title = await page.title();
  console.log('Page title:', title);
  console.log('Puppeteer test completed successfully!');
  
} catch (error) {
  console.error('Error occurred:', error.message);
} finally {
  await browser.close();
}
