import {test, expect, webkit, firefox, devices, chromium, BrowserContext,} from '@playwright/test';
export const ssid = 87249451;
export const rid = 3203;

export function getIds() {
    return { ssid, rid }
}

export function getZozotownHostUrl(){
    // return 'https://zozo.jp'
    return 'https://zozo.jp/sp/_member/login.html'
    // return 'https://google.com'
}
export function getZozotownUrl(){
    return 'https://zozo.jp/sp/_cart/default.html'
}

export function getInitPageUrl() {
    return 'http://localhost:63342/coin/zozo_test.html?_ijt=dp2sn7138vn5ll9jm95bbuv0qc&_ij_reload=RELOAD_ON_SAVE'
}
export function fetchPutCart() { //test ssid, rid
    // const ssid = document.getElementById('ssid').value;
    // const rid = document.getElementById('rid').value;



    const ssid = getIds().ssid;
    const rid = getIds().rid;
}


test.describe('zozo town auto put cart', () => {
    let apiContext;
    const iPhone = devices['iPhone 6'];
    const android = devices['Galaxy S9+'];



    // test('move to init page', async ({page}) => {
    //     await page.goto(getInitPageUrl());
    // })


    /*test.beforeAll(async ({ playwright }) => {
        /!*apiContext = await playwright.request.newContext({
            // All requests we send go to this API endpoint.
            baseURL: getZozotownUrl(),
            extraHTTPHeaders: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*!/!*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded",
                "pragma": "no-cache",
                "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?1",
                "sec-ch-ua-platform": "\"Android\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
            },
        });*!/

        apiContext = await playwright.request.newContext({
            // All requests we send go to this API endpoint.
            baseURL: 'https://api.github.com',
            extraHTTPHeaders: {
                // We set this header per GitHub guidelines.
                'Accept': 'application/vnd.github.v3+json',
                // Add authorization token to all requests.
                // Assuming personal access token available in the environment.
                'Authorization': `token ${process.env.API_TOKEN}`,
            },
        });
    })

    test.afterAll(async ({ }) => {
        // Dispose all responses.
        await apiContext.dispose();
    });*/

    test('move to zozo town mobile page', async (/*{page}*/) => {
        let testVal = 'test';

        const browser = await firefox.launch({
            headless: false,
            // ...android
            // channel: 'chrome' // or 'msedge', 'chrome-beta', 'msedge-beta', 'msedge-dev', etc.
        });

        // const browser = await chromium.launch();
      /*  const browserContext = await browser.newContext({
            ...android
            // ...iPhone
        });*/
        const page = await browser.newPage();
        // const page = await browserContext.newPage();



        // Using the browser fixture, you can get access to the BrowserContext

        // Add cookies to the browserContext
        // await page.goto(getZozotownHostUrl());


        // await page.goto('hhttps://zozo.jp/_member/login.html?bkurl=%2F%3F');
        // await page.locator('#input-zozoid').fill('gta2v@naver.com');
        // await page.locator('#input-password').fill('wjsemd90');
        // await page.locator('input[type="submit"]').click();
        // await page.waitForTimeout(10000);

        // await page.goto('https://zozo.jp/shop/nike/goods/54382162/?did=90051147&rid=1003');
        /*await page.evaluate(async () => {
            /!*await fetch("https://zozo.jp/sp/_member/login.html", {
                "headers": {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*!/!*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
                    "cache-control": "max-age=0",
                    "content-type": "application/x-www-form-urlencoded",
                    "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
                    "sec-ch-ua-mobile": "?1",
                    "sec-ch-ua-platform": "\"Android\"",
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-user": "?1",
                    "upgrade-insecure-requests": "1"
                },
                "referrer": "https://zozo.jp/sp/_member/login.html?p_id=1&bkurl=https%3A%2F%2Fzozo.jp%2Fsp%2F",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": "c=Login&memid=gta2v%40naver.com&mempw=wjsemd90&autologin=1&pattern=",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            });
            await page.goto('https://zozo.jp/sp/shop/nike/goods/54382162/?did=90051147&rid=3004');*!/
        });*/

        // await page.goto('https://zozo.jp/sp/shop/nike/goods/59531385/?did=100310821&rid=3203');
        await page.goto('https://zozo.jp/_cart/default.html?at=1');


        // await page.locator('text=スニーカー').nth(0).click();
       /* await expect(
            page.locator(`.imgCompleat img >> nth=0`)
        ).toHaveAttribute('alt', /カートに入れる/);*/

        // const alt = await page.getAttribute('img', 'alt');
        // expect(alt).toBe('スニーカー');



        // await page.locator('img[alt*="スニーカー"]').nth(0).click();
        // await page.setViewportSize({ width: 800, height: 1200 });

        // await expect(page.locator('button[data-karte-tracking="goodscartputclick"]')).toBeVisible();

        // await page.waitForTimeout(20000);
        // await page.locator('button[data-karte-tracking="goodscartputclick"]').click();
        // await page.locator('button:has-text("カートに追加")').nth(0).click();

        await page.waitForTimeout(6000);
        // await page.locator('.c-button.--appearance-primary.--width-fluid.--height-medium').nth(1).click();
        // await page.waitForTimeout(5000);
        await page.evaluate(async ()=> {
            console.log('window?.__seckey', window?.__seckey)
            // let secKey = window?.__seckey;

            // console.log('secKey: ', secKey);
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
                    "referrer": "https://zozo.jp/shop/nike/goods/54382162/?did=90051150&rid=1094",
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": `c=put&sid=71575437&rid=1094&p_seckey=${String(window?.__seckey)}`,
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"


                // console.log('result', result.json());
            });
        });


/*        await Promise.all([
            page.waitForResponse(res =>
            res.status() === 200
            ),

        ])*/

        // await page.click('text=カートに入れる');
        // await page.click('button:has-text("カートに追加")');

        // await page.locator('.s-header-menu').click();
        // await page.waitForSelector('gDrawerWrapper');
        // await expect(page.locator("#gDrawerContent >> .c-list-body__heading >> text=ブランドから探す")).toBeVisible()
        // await page.click('#gDrawerContent >> .c-list-body__heading >> text=ブランドから探す');
        // await page.locator('#nameSearch').fill('nike')
        // await page.locator('.c-list-body__caption >> text=ナイキ').nth(0).click();


        // const cookieValues = await getCookieValues();
        // console.log('getCookie', await getCookieValuesByStored(browserContext));
        // await browserContext.clearCookies();
        // await browserContext.addCookies(cookieValues)


        /*const response = await page.evaluate(async () => {
            await fetch("https://zozo.jp/sp/_cart/default.html", {
                "headers": {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*!/!*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
                    "cache-control": "max-age=0",
                    "content-type": "application/x-www-form-urlencoded",
                    "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
                    "sec-ch-ua-mobile": "?1",
                    "sec-ch-ua-platform": "\"Android\"",
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-user": "?1",
                    "upgrade-insecure-requests": "1"
                },
                "referrer": "https://zozo.jp/sp/_cart/default.html?c=Message&no=1&name=ModifyMessage&",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": "c=put&ssid=71575440&rid=3204&scpid=&p_seckey=e0a13b08f6e5fc87ff1dec938fde08cb",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            });
        })*/


        /*   const apiContext = await request.newContext({
               // All requests we send go to this API endpoint.
               baseURL: getZozotownUrl(),
               extraHTTPHeaders: {
                   "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*!/!*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                   "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
                   "cache-control": "no-cache",
                   "content-type": "application/x-www-form-urlencoded",
                   "pragma": "no-cache",
                   "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
                   "sec-ch-ua-mobile": "?1",
                   "sec-ch-ua-platform": "\"Android\"",
                   "sec-fetch-dest": "document",
                   "sec-fetch-mode": "navigate",
                   "sec-fetch-site": "same-origin",
                   "sec-fetch-user": "?1",
                   "upgrade-insecure-requests": "1",
               },
           });*/

        /*const newIssue = await apiContext.post(`${getZozotownUrl()}_cart/default.html`, {
            data: {
                c:'put',
                ssid:`${ssid}&rid=${rid}`,
                scpid:'',
                p_seckey:'653c65e408597dc5ebd40b55da630cf2'
            }
        });*/

        // expect(response.ok()).toBeTruthy();

        await page.pause();
        // await browser.close();
    });
});

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
}
export async function getCookieValuesByStored(context: BrowserContext) {
    return context.cookies([getZozotownHostUrl()])
}





/* {
     "domain": ".zozo.jp",
     "expirationDate": 1666183424.075739,
     "hostOnly": false,
     "httpOnly": false,
     "name": "imdid",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": ""
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1666105851.781507,
     "hostOnly": false,
     "httpOnly": true,
     "name": "ak_bmsc",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "14D254B1D88E852215C43AFF6BE54187~000000000000000000000000000000~YAAQvJwqF/q0jOmDAQAA5eY36xFpohqTG+dCV977yhNT5NMcAgH4Bb7mKvSaH9hm/6exC3JLhSBSVjrh4u4Pscee842uTL7L8+bVcJzZ9oFAHEnc+lvoBpEgNw4bigQ8YVPgN5VkVfnXnrvnyJ+8uzmGr4OBKA6ZDZVyF4r80v2hepp0us3r6jGIoU54p3IFgibYT/vbc9NkZlXJXuJdwe94cqNTFTUyTKjSjqYnJy1CeJEDlavS+B+UEoZJ071bLAjFpbcKF3kWfC2ATnehjfV+DxZW6zo+2T/NdgFAUrOaj5SBmy3Nf4wfO+4jjocg8rCivPcF3WSuVKKgyrdHYdezhITF/XAn/2xETSm4YIdiskJUvIrduG16t2KHJkW5Sp2lTjRhkyxo+1k6ewa/FWlPIa6MjrIswN22zq7SKhARKqB7uX1wVrjs2L6LDIc93ExZSXTsNONqq8Rd66JWW+AuYywV58aE+a2FyvA="
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658753.708195,
     "hostOnly": false,
     "httpOnly": false,
     "name": "D",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "0"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658753.708184,
     "hostOnly": false,
     "httpOnly": false,
     "name": "K",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "1"
 },
 {
     "domain": "zozo.jp",
     "hostOnly": true,
     "httpOnly": false,
     "name": "TS014d8e6a_30",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": true,
     "storeId": null,
     "value": "01b5740c9b9180ec8fa19ce0b9f7d28076cb57984a590fb7297cc9dd44f43bc2f748eb66f0a97effec222d0e47e5576db7ed874efb"
 },
 {
     "domain": "zozo.jp",
     "hostOnly": true,
     "httpOnly": true,
     "name": "NASPSESSIONSECRET",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": true,
     "storeId": null,
     "value": "256865160d7838f64de6e52be07ac118"
 },
 {
     "domain": "zozo.jp",
     "expirationDate": 1697554799.896809,
     "hostOnly": true,
     "httpOnly": false,
     "name": "goods%5Fhistory",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "%2C67784627%2C52788132%2C"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658753.708205,
     "hostOnly": false,
     "httpOnly": false,
     "name": "F",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "29"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1673874752,
     "hostOnly": false,
     "httpOnly": false,
     "name": "_fbp",
     "path": "/",
     "sameSite": "Lax",
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "fb.1.1666097022906.840300085"
 },
 {
     "domain": ".zozo.jp",
     "hostOnly": false,
     "httpOnly": false,
     "name": "TS014ab708",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": true,
     "storeId": null,
     "value": "0182a260476004ff04d3bd446c43a8fbad52fbae7670e109de3b9b136c64a8b2abb1560ca0d8796ad55d1a9872f548f318c4163986"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1681650751,
     "hostOnly": false,
     "httpOnly": false,
     "name": "optimizelyEndUserId",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "oeu1666097021034r0.9968279355683032"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658659.294541,
     "hostOnly": false,
     "httpOnly": false,
     "name": "M",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "31439630"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658659.294474,
     "hostOnly": false,
     "httpOnly": false,
     "name": "RefreshToken",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "4c65f5032d9a303eff1257179b4a8cda045230c00b56e92f2dac9a8e527c1f5b"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700657020.588965,
     "hostOnly": false,
     "httpOnly": false,
     "name": "ZOZO%5FUID",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "P0237%3A775352019%3A719444620"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658753.708138,
     "hostOnly": false,
     "httpOnly": false,
     "name": "T",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "0"
 },
 {
     "domain": "zozo.jp",
     "hostOnly": true,
     "httpOnly": false,
     "name": "Login%5FToken",
     "path": "/",
     "sameSite": 'None',
     "secure": true,
     "session": true,
     "storeId": null,
     "value": "Ib7sFsr3rnHzRAB"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1666100716,
     "hostOnly": false,
     "httpOnly": false,
     "name": "krt.context",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "session%3A5e587860-580d-410d-8e4a-3821e7bb1ec8%3Bcontext_mode%3Aother"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658752.158053,
     "hostOnly": false,
     "httpOnly": false,
     "name": "_ga",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "GA1.1.1159401591.1659887201"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1668610800.294454,
     "hostOnly": false,
     "httpOnly": false,
     "name": "MEPRF%5FID",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "13"
 },
 {
     "domain": "zozo.jp",
     "expirationDate": 1697554799.938185,
     "hostOnly": true,
     "httpOnly": false,
     "name": "goods%5Fhistory%5Fcart",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "111577356"
 },
 {
     "domain": "zozo.jp",
     "expirationDate": 1667314798.558104,
     "hostOnly": true,
     "httpOnly": false,
     "name": "2022october01",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "0"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658659.294689,
     "hostOnly": false,
     "httpOnly": false,
     "name": "IdToken",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3dFJTMjU2LmtleSIsInR5cCI6IkpXVCJ9%2EeyJpc3MiOiJodHRwOi8vem96by1pZC5zZWN1cmUuem96by5jb20iLCJzdWIiOiIzMTQzOTYzMCIsImV4cCI6MTY2NjEwMDQ1OSwiaWF0IjoxNjY2MDk4NjU5LCJqdGkiOiJjYjhjYTJmOTgyNGIwNGYzZDZjYjY4ZmJlZjhkNWQwMmZmNDg5Nzg4MTdkNjQzYmZhNDVjMzMzYzZiYWRmOGU4IiwiYW1yIjoicGFzc3dvcmQifQ%2Ec4G%2DJCRxcD6vW01lKXuOdBf%5FeadF%5FcYV1kmSfg0qD%5FtbN6yfTy%5FkgWYPw9AyJ5ltNQo2MphamFu9LRz8nhurl88TEXBJTTAtAvnvtJ4q%5FAn8RHcaFUyeuHAoip2dROKO56pBuh%2DcpUTg07Uw%2D9nEfGoqsWQvhjM353LPNfAS4ZzylpsAY9IqktxYusAoRGP30Ac3UKnlDZ9EWc3weQpdz6kY61nHNkZ6gp2gc70msfgWmlFP0LEvPfEge04GKWGviXYUPNABk%2Df%2D%2DqGfN6l1f1QtCQhNav5E0%5FH%5FNLUKam6iuxCB4P932sxgLyF8Fg1eYTmxERI7DdmQ9OCh56w8wDHDu7A%5FbUqclezruhLxJyhtTZKgh6TjpmuRYQCVz8cMFBpQr8CZgZfTLcGHKCqLlNYfyDRBCMecuhONXzVP%5F5BMCetwhTKDdwSUwNAY0wsgYCBkz7yC8XLcGiPRLH1%2DjXZ9baloUNiUkuKRIn6f9eWHT9Dp1%5FVMWoL4GA3tOtfRZUbm6LwAXZk%5FREH2eiKNWPzlJvSmhe75WDGu4bwOJWB1o0vz8DTpsFHD01zuhJ5Z3ceCoxvOw%5FX74eRhoqGGSoLZd1oWQazknUT6NFjCEsapU8LKqGNRySvAUbDAjEuDj7mVANAI%5FVbVobuVsQ5583SILydaOiLgIUmexLFeO68"
 },
 {
     "domain": "zozo.jp",
     "hostOnly": true,
     "httpOnly": false,
     "name": "ZOZO%5FISMEN",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": true,
     "storeId": null,
     "value": "0"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1666099052,
     "hostOnly": false,
     "httpOnly": false,
     "name": "krt.v",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "message%3A634793df5db4460012e4e20b%7C5f7fd8b8a9fcc9001124c186%7C5f7fc88013b4070011ce10cd%7C6347991141ea25001201ea06%7C634795ffd215f6001298dedb%7C5f36405f7cd8be0011246f11"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658752.211261,
     "hostOnly": false,
     "httpOnly": false,
     "name": "__lt__cid",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "20db5937-acc3-40d9-b591-9841f128ed11"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1666100552,
     "hostOnly": false,
     "httpOnly": false,
     "name": "__lt__sid",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "2b183fff-65a4efac"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1697634760.528548,
     "hostOnly": false,
     "httpOnly": false,
     "name": "_abck",
     "path": "/",
     "sameSite": 'None',
     "secure": true,
     "session": false,
     "storeId": null,
     "value": "C5E0B7D822D8B31FE2378FA278FCFFDD~-1~YAAQ35wqF70rfeiDAQAAz4s56whuWdfwBPEcNY5lvtiYZInmm391noNC9QBltgEl9D/zLBNcczwlvRLsWO13cit1OdKFxKtuPKPYGf3PZbcMTMBvl+s0jh0kibdUrrcteDyd4V2FODk196CwsoGAis/PEoQhEbYVdd8G+GH2+iV6RtF5qO4SUqZ8KhQjIkfdUW2BxiVdrUXGnvWA3b6/Nb5Ay0lsKx7EkN+aS9p6ijeGZCrnXBg5qQn52F1XsX28FIepPjcGww8Sgj5yAQxvJsixbv3+0qXzw5DS0AUotfZZfJZXxsmB0khoWL74Z+QpprWn4Iuqpi7MFRb1Xs+jHbY7LH8h4nYQmzuHXjS+mrDlK4Mp2msFgK/tAV1GQ5tH4bLHFJwAkUaZ0NBISrmyZ613zL/UE3VIK65x5MaDJUtAks7+87OyE3+n6zyYlE06tKuvJbwfFmR8~-1~-1~-1"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658752.157838,
     "hostOnly": false,
     "httpOnly": false,
     "name": "_ga_TBJE7RZQZ0",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "GS1.1.1666095978.8.1.1666098752.59.0.0"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1673873021,
     "hostOnly": false,
     "httpOnly": false,
     "name": "_gcl_au",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "1.1.1023518724.1666097022"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1666185152,
     "hostOnly": false,
     "httpOnly": false,
     "name": "_gid",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "GA1.2.197774200.1666097022"
 },
 {
     "domain": "zozo.jp",
     "expirationDate": 1700052224,
     "hostOnly": true,
     "httpOnly": false,
     "name": "_im_id.1001058",
     "path": "/",
     "sameSite": "Lax",
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "43b38f411c7c2786.1666097024."
 },
 {
     "domain": "zozo.jp",
     "expirationDate": 1666100553,
     "hostOnly": true,
     "httpOnly": false,
     "name": "_im_ses.1001058",
     "path": "/",
     "sameSite": "Lax",
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "1"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1668690660,
     "hostOnly": false,
     "httpOnly": false,
     "name": "_im_vid",
     "path": "/",
     "sameSite": "Lax",
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "01GFNHY6FA3W29P4VGFZK01X4W"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700657021.757495,
     "hostOnly": false,
     "httpOnly": false,
     "name": "_ts_yjad",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "1666097021757"
 },
 {
     "domain": "zozo.jp",
     "hostOnly": true,
     "httpOnly": true,
     "name": "akaalb_web_front_2022100701",
     "path": "/",
     "sameSite": 'None',
     "secure": true,
     "session": true,
     "storeId": null,
     "value": "~op=zozotown_alb:zozotown-dc2|origin_web_front:zozotown-dc2|~rv=8~m=zozotown-dc2:0|~os=c4d0a10abdefb0a88a1f805f2ec82b6e~id=422a2e096d8bdc448ebe53892462ef65"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658659.294558,
     "hostOnly": false,
     "httpOnly": false,
     "name": "B",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "3f36aa7e72ebf02796c2934269868eba"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1666105852.760859,
     "hostOnly": false,
     "httpOnly": false,
     "name": "bm_sv",
     "path": "/",
     "sameSite": 'None',
     "secure": true,
     "session": false,
     "storeId": null,
     "value": "5776004D2AAFEE64657A63E277A2200C~YAAQvJwqF321jOmDAQAA+Ak46xFs3OZwxW42SfbRHPjxqkgiE6k9VkK9BCAv5M00wIIqJlHRB4hK3AosqLZsFowpXhF7OyxHE798pvaCUOP3WW5Pg6G3pdGPZuAWlRcfM45j5449XYB7VDmyK1sO0eKIcZXNKUaURncVGbLxPldAvjajeh1J7C+39GkYwLsT9cq18ZsSidumy99s5tmRc4kLufSHd7IZMQZzGTWwn9jzdPHeFnfLkd+A0Jf4~1"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1666111420.215873,
     "hostOnly": false,
     "httpOnly": false,
     "name": "bm_sz",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "91871750F6928C988D0322ADB94469A4~YAAQHTbIF+RWOOiDAQAAd/0e6xECh0R5M4C2CADSDjzhtzdDEpTbjNJj2og1DL+5KGv6BI9e0r9ddbwcrornUmIOLffpuAfQj1G/7y5Tdmh1tkYtzE77Szw+rKIJpPTIuLU/pA2kDESNlUmpIk7YWa/3KAFQ3/xy6sW4ZIaxZjpQsQEHav5wAeOGSa0rs9XVm85ydGXyygn6y8QRARB/CqYSzI2KQJuXJ6Qutn1KEd4tEco4yIhCI/GTGEAzTuWDDKUPyoDlTg//0DpnCR25yPfKP6yhCTAJYE3XtAAJhfo=~4470341~3487301"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700262752,
     "hostOnly": false,
     "httpOnly": false,
     "name": "cto_bundle",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "_SXF4l94clolMkZiRSUyRjlYcnl4Zm5JNFNpTmhtU1YxTWpNNGhscWMwdFVLZkNhdCUyQjlTJTJGN0JDcmQ0c1A5ekZXZm54T0RkJTJGS1BhNjJpOTMlMkJ1VFZ6M1JzZ014ejNtbDA4UmRKb3R1WjlJNUgxWFNSbkI1WmtSNVNic2pTQ2dEZWJzNHVjJTJGUmFoUnkyVUlCYXRkVE93QTV6UlJ2OVZjZyUzRCUzRA"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658753.708094,
     "hostOnly": false,
     "httpOnly": false,
     "name": "E",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "1"
 },
 {
     "domain": "zozo.jp",
     "expirationDate": 1668610800.294671,
     "hostOnly": true,
     "httpOnly": false,
     "name": "generation",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "3"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1666100552,
     "hostOnly": false,
     "httpOnly": false,
     "name": "krt.s",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "date%3A1666098661%3Bpv%3A4%3Btime%3A91"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658752.136071,
     "hostOnly": false,
     "httpOnly": false,
     "name": "krt.vis",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "d30f253e-7557-4555-9506-fbeb37086fdc"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1668689021,
     "hostOnly": false,
     "httpOnly": false,
     "name": "krt_rewrite_uid",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "c4d14fb2-6dfe-4298-9286-b7e0c9b6f1f9"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658753.708171,
     "hostOnly": false,
     "httpOnly": false,
     "name": "L",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "1"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1671202800.294509,
     "hostOnly": false,
     "httpOnly": false,
     "name": "pst",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "0"
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1666703553,
     "hostOnly": false,
     "httpOnly": false,
     "name": "RT",
     "path": "/",
     "sameSite": "Lax",
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "\"z=1&dm=zozo.jp&si=a35fe6e2-64b0-49f2-8ae5-6d8384346260&ss=l9e857ui&sl=2&tt=2c0&bcn=%2F%2F684d0d43.akstat.io%2F&ld=19gz&nu=207re2x3&cl=19xy\""
 },
 {
     "domain": ".zozo.jp",
     "expirationDate": 1700658753.70815,
     "hostOnly": false,
     "httpOnly": false,
     "name": "S",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "gta2v"
 },
 {
     "domain": "zozo.jp",
     "expirationDate": 1666099569.95523,
     "hostOnly": true,
     "httpOnly": false,
     "name": "ss_sid",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "183eb380606_117fe0c9-03dc-44d7-a699-a865c35eb40a"
 },
 {
     "domain": "zozo.jp",
     "expirationDate": 1700658669.955562,
     "hostOnly": true,
     "httpOnly": false,
     "name": "ss_uid",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": false,
     "storeId": null,
     "value": "183eb1f1c36_5826e169-d384-40c8-aead-9b186ff27e0a"
 },
 {
     "domain": "zozo.jp",
     "hostOnly": true,
     "httpOnly": false,
     "name": "TS014d8e6a",
     "path": "/",
     "sameSite": 'None',
     "secure": false,
     "session": true,
     "storeId": null,
     "value": "0182a26047ed5864b5044e0bbf17a3c296548370b710db3f4380f129b035543a4cdd5d6f8d7dddf2ecf0e9c34a6b3dd68d7215e6bf"
 },*/
