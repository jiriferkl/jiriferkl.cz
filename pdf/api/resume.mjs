import puppeteer from "puppeteer";

async function generateResume(url) {
    const options = {
        defaultViewport: {
            width: 1920,
            height: 1080,
        },
        headless: true,
    };

    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();

    await page.goto(url, {waitUntil: 'networkidle0'});

    const resume = await page.$("#resumeForPrint");
    const box = await resume.boundingBox();
    const pdf = await page.pdf({
        printBackground: true,
        width: box.width,
        height: box.height - 21,
        path: '../app/public/resume.pdf'
    });

    await page.close();
    await browser.close();
}

generateResume("http://localhost:3000/resume/print");
