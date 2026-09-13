import puppeteer from 'puppeteer-core';

(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      headless: true
    });
    const page = await browser.newPage();
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.error('LIVE CONSOLE ERROR:', msg.text());
      }
    });
    page.on('pageerror', err => console.error('LIVE PAGE ERROR:', err.toString()));
    
    console.log('--- Testing Live GitHub Pages Site ---');
    console.log('URL: https://spjr1115-creator.github.io/sujal-portfolio/');
    
    await page.goto('https://spjr1115-creator.github.io/sujal-portfolio/', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 2000));
    
    const title = await page.title();
    console.log('Page Title:', title);
    
    const rootHtml = await page.$eval('#root', el => el.innerHTML);
    console.log('LIVE ROOT HTML LENGTH:', rootHtml.length);
    console.log('LIVE HAS SUJAL LOGO:', rootHtml.includes('SUJAL'));
    console.log('LIVE HAS HERO HEADING:', rootHtml.includes("HI, I'M SUJAL"));
    console.log('LIVE HAS CONTACT BUTTON:', rootHtml.includes('CONTACT ME'));
    
    const portraitLoaded = await page.$eval('#home img', el => el.complete && el.naturalWidth > 0).catch(() => false);
    console.log('LIVE PORTRAIT LOADED:', portraitLoaded);

    await browser.close();
  } catch (e) {
    console.error('SCRIPT ERROR:', e);
  }
})();
