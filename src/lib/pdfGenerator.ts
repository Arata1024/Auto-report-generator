import puppeteer from 'puppeteer';

export const generatePDF = async (data: any, design: any) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial; padding: 20px; }
          h1 { color: ${design.titleColor || '#333'}; }
        </style>
      </head>
      <body>
        <h1>${data.title}</h1>
        <pre>${JSON.stringify(data.rows, null, 2)}</pre>
      </body>
    </html>
  `;

  await page.setContent(html);
  const pdf = await page.pdf({ format: 'A4' });
  await browser.close();

  return pdf;
};