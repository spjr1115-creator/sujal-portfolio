import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePdf() {
  const chromePath = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
  console.log('Launching browser at:', chromePath);
  
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });

  const page = await browser.newPage();
  
  const htmlPath = path.join(__dirname, 'resume_template.html');
  const htmlUrl = `file://${htmlPath.replace(/\\/g, '/')}`;
  
  console.log('Navigating to:', htmlUrl);
  await page.goto(htmlUrl, { waitUntil: 'networkidle0' });
  
  const pdfPath = path.join(__dirname, '../public/Resume.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
  });

  await browser.close();
  console.log('Resume PDF generated successfully at:', pdfPath);
}

generatePdf().catch(console.error);
