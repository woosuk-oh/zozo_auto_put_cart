import {test, firefox, BrowserContext} from '@playwright/test';
import {parse} from 'csv-parse/sync';
import * as path from "path";


const fs = require('fs');
const client = require('https');
test.describe.configure({ mode: 'parallel' });


export function getZozotownCartUrl() {
    return 'https://zozo.jp/_cart/default.html?at=1'
}

export function getZozotownHostUrl() {
    return 'https://zozo.jp'
}

export async function getCookieValuesByStored(context: BrowserContext) {
    return context.cookies([getZozotownHostUrl()])
}

const records = parse(fs.readFileSync(path.join(__dirname, 'input.csv')), {
    columns: false,
    skip_empty_lines: true
}).flat()

console.log('records?? ', records)


for (const sid of records) {
    test(`zozo town auto put cart target sid: ${sid}`, async () => {
        const browser = await firefox.launch({
            headless: false,
        });
        const browserContext = await browser.newContext({
            acceptDownloads: true,
        });
        const page = await browserContext.newPage();

        await page.goto(getZozotownCartUrl());
        await page.waitForTimeout(3000);

        await page.evaluate(async (sid) => {
            const rid = '1006';

            await fetch("https://zozo.jp/_cart/default.html", {
                "headers": {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
                    "cache-control": "max-age=0",
                    "content-type": "application/x-www-form-urlencoded",
                    "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"macOS\"",
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-user": "?1",
                    "upgrade-insecure-requests": "1"
                },
                "referrer": "https://zozo.jp/_cart/default.html",
                "body": `c=put&sid=${sid}&rid=${rid || ''}&p_seckey=${String(window?.__seckey)}`,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            });

            console.log('sid?? ', sid);
        }, sid);

        await page.waitForTimeout(3000);
        await page.reload();
        const cookies = await getCookieValuesByStored(browserContext);


        await browserContext.exposeFunction("downloadFile", (url, filepath) => {
            return new Promise((resolve, reject) => {
                client.get(url, (res) => {
                    if (res.statusCode === 200) {
                        res.pipe(fs.createWriteStream(filepath))
                            .on('error', reject)
                            .once('close', () => resolve(filepath));
                    } else {
                        // Consume response data to free up memory
                        res.resume();
                        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
                    }
                });
            })
        });

        await browserContext.exposeFunction("readFileSync", (url, option) => {
            return fs.readFileSync(url, option);
        });

        await page.evaluate(async (cookies) => {
            window.URL = window.URL || window.webkitURL;

            console.log('getCookieValuesByStored', cookies);
            const blob = new Blob([JSON.stringify(cookies)], {type: 'application/json'});
            console.log('blob', blob);
            const url = window.URL.createObjectURL(blob);


            if (!!cookies) {
                console.log('url', url);
                const link = window.document.createElement('a');
                console.log('link', link);
                link.id = 'cookies-download-tag'
                link.textContent = 'download cookies file';
                link.href = url;
                link.download = 'cookies.json'


                const header = window.document.getElementById('gblHeaderStuck');
                header.appendChild(link);

                setTimeout(() => {
                    link.click();
                }, 1000)

            }
        }, cookies);
        page.on('download', download => download.path().then(console.log));
        await page.pause();
    });
}

// }
// );

/*
// required cookies
export async function getCookieValues() {
    return [
        {
            "domain": "zozo.jp",
            "httpOnly": false,
            "name": "ZOZO%5FUID",
            "path": "/",
            "secure": false,
            "value": "P0194%3A2054279741%3A719676549"
        },
        {
            "domain": "zozo.jp",
            "httpOnly": true,
            "name": "NASPSESSIONSECRET",
            "path": "/",
            "secure": false,
            "value": "d0a16a3b291af192c54ceb47c8da1db0"
        }
    ]
}*/
