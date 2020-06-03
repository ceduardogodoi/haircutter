import { config } from 'dotenv';
import puppeteer from 'puppeteer';

// interfacing environment variables for typing it
interface EnvVars {
  FB_POST: string;
  FB_USER: string;
  FB_PASS: string;
}

// extracting environment variables for use
const { FB_POST, FB_USER, FB_PASS } = (config().parsed as unknown) as EnvVars;

(async function () {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });
  const context = browser.defaultBrowserContext();

  const page = await browser.newPage();
  await page.goto(FB_POST);

  // await page.waitFor(() => {
  //   const button = document.querySelector(
  //     '#expanding_cta_close_button'
  //   ) as HTMLAnchorElement;
  //   button?.click();
  // });

  await page.type('#email', FB_USER);
  await page.type('#pass', FB_PASS);
  await page.keyboard.press('Enter');

  await context.overridePermissions(FB_POST, ['notifications']);

  const elementHandle = await page.waitForSelector('._3bu3._293g');
  const text = await page.evaluate(
    (element: HTMLSpanElement) => element.textContent,
    elementHandle
  );
  const counter = text?.match(/\d*\.\d*/g);
  const commentsCounter = counter?.[0] ?? '1';
  let commentsLeft = Number((100000 - Number(commentsCounter)).toFixed(0));

  let i = 1;
  var recursiva = setComments();

  async function setComments(){
    commentsLeft = Number((100000 - Number(commentsCounter)).toFixed(0));
    console.log(commentsLeft);

    if(commentsLeft > 0){
    const commentDiv = await page.waitForXPath(
      '//div[contains(text(), "Escreva um comentário")]'
    );

    await commentDiv.click();
    await commentDiv.type(`${i} papapa`);
    await page.keyboard.press('Enter'); 

       i++;
    setTimeout(setComments, 10000);

    }

  }

  /* console.log(commentsLeft);
  for (let i = 0; i < commentsLeft; i++) {

    const commentDiv = await page.waitForXPath(
      '//div[contains(text(), "Escreva um comentário")]'
    );

    await commentDiv.click();
    await commentDiv.type(`${i} papapa`);
    await page.keyboard.press('Enter');
  } */


})();
