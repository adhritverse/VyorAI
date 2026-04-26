const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://zangoh.com/digital-employee/customer-support/');
  
  const content = await page.evaluate(() => {
    return {
      title: document.title,
      h1: document.querySelector('h1')?.innerText,
      sections: Array.from(document.querySelectorAll('section')).map(s => ({
        id: s.id,
        className: s.className,
        text: s.innerText.substring(0, 500)
      })),
      bodyText: document.body.innerText
    };
  });
  
  fs.writeFileSync('C:\\Users\\nikhi\\.gemini\\antigravity\\brain\\1072b2e6-2423-4d27-bb11-387f395cc8ec\\scratch\\scraped_support.json', JSON.stringify(content, null, 2));
  await page.screenshot({ path: 'C:\\Users\\nikhi\\.gemini\\antigravity\\brain\\1072b2e6-2423-4d27-bb11-387f395cc8ec\\scratch\\support_screenshot.png', fullPage: true });
  
  await browser.close();
})();
