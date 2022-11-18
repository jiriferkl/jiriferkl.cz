import {VercelRequest, VercelResponse} from '@vercel/node';
import puppeteer from "puppeteer-core";
import chromium from "chrome-aws-lambda";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    let url: any = process.env.VERCEL_URL;
    if (!(url instanceof String)) {
        throw Error('Required env is not set');
    }

    url += '/resume/print';

    let browser = null;
    let page = null;

    try {
        browser = await puppeteer.launch({
            defaultViewport: {
                width: 1920,
                height: 1080,
            },
            args: chromium.args,
            headless: chromium.headless,
            executablePath: await chromium.executablePath,
        });

        page = await browser.newPage();
        await page.goto(url, {waitUntil: 'networkidle0'});

        const resume = await page.$("#resumeForPrint");
        const box = await resume.boundingBox();

        const pdf = await page.pdf({
            printBackground: true,
            width: box.width,
            height: box.height - 79,
        });

        res.statusCode = 200;
        res.setHeader("Content-Type", `application/pdf`);
        res.end(pdf, 'binary');
    } catch (e: any) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Server Error</h1><p>Internal server error</p>');

        console.error(e);
        console.error(e.message);
    } finally {
        if (page !== null) {
            await page.close();
        }

        if (browser !== null) {
            await browser.close();
        }
    }
}
