import {VercelRequest, VercelResponse} from '@vercel/node';
import puppeteerCore from "puppeteer-core";
import puppeteerDev from "puppeteer";
import chromium from "chrome-aws-lambda";

function isDev(): boolean {
    return process.env.NOW_REGION === undefined || process.env.NOW_REGION === 'dev1';
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const url: String = String(process.env.RESUME_URL);
    if (url === '') {
        throw Error('Required env is not set');
    }

    let browser = null;
    let page = null;

    const options = {
        defaultViewport: {
            width: 1920,
            height: 1080,
        },
        args: chromium.args,
        headless: chromium.headless,
        executablePath: await chromium.executablePath,
    };

    try {
        await chromium.font(__dirname + '/../fonts/segoeui.ttf');
        await chromium.font(__dirname + '/../fonts/segoeuib.ttf');
        await chromium.font(__dirname + '/../fonts/segoeuil.ttf');
        await chromium.font(__dirname + '/../fonts/seguisb.ttf');

        if (!isDev()) {
            browser = await puppeteerCore.launch(options);
        } else {
            browser = await puppeteerDev.launch({
                ...options,
                ...{headless: true},
            });
        }

        page = await browser.newPage();
        await page.goto(url, {waitUntil: 'networkidle0'});

        const resume = await page.$("#resumeForPrint");
        const box = await resume.boundingBox();

        const pdf = await page.pdf({
            printBackground: true,
            width: box.width,
            height: box.height - (isDev() ? 79 : 19),
        });

        res.statusCode = 200;
        res.setHeader('Cache-Control', 'max-age=0, s-maxage=2678400');
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
