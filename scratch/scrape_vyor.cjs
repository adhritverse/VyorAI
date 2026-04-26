const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const results = {};

  try {
    console.log('Visiting home page...');
    await page.goto('https://vyor-ai.vercel.app/', { waitUntil: 'networkidle' });
    
    // Find links for About and Careers
    const links = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('a'));
      return items.map(a => ({ text: a.innerText, href: a.href }));
    });
    
    results.links = links;

    // Try to find "About" content on home page if no separate page
    results.homeContent = await page.innerText('body');

    // Look for About and Careers specific links
    const aboutLink = links.find(l => l.text.toLowerCase().includes('about') || l.href.includes('about'));
    const careersLink = links.find(l => l.text.toLowerCase().includes('career') || l.href.includes('career'));

    if (aboutLink) {
      console.log(`Visiting About: ${aboutLink.href}`);
      await page.goto(aboutLink.href, { waitUntil: 'networkidle' });
      results.aboutContent = await page.innerText('body');
      results.aboutHtml = await page.innerHTML('body');
    }

    if (careersLink) {
      console.log(`Visiting Careers: ${careersLink.href}`);
      await page.goto(careersLink.href, { waitUntil: 'networkidle' });
      results.careersContent = await page.innerText('body');
      results.careersHtml = await page.innerHTML('body');
    }

  } catch (error) {
    console.error('Error during scraping:', error);
  }

  fs.writeFileSync('scratch/scraped_vyor.json', JSON.stringify(results, null, 2));
  await browser.close();
})();
