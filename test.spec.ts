import { test } from '@playwright/test';
const BASE_URL = 'https://www.binance.com/en';
const LOGIN = '/login'
const PRODUCT_DETAIL = '/nft/goods/detail?productId='
const MISTERY_BOX = '/nft/mystery-box/detail?number=1&productId='

const MOO_MONSTER_DATETIME = '2022-06-15 17:59:55'

const getNftProductUrl = (productId) => {
    // 66121421 65933904 64778007
    return BASE_URL + PRODUCT_DETAIL + productId + '&isProduct=1'
}
const getMisteryBoxProductUrl = (productId) => {
    return BASE_URL + MISTERY_BOX + productId + '&number=1'
}
const getLoginUrl = () => {
    return BASE_URL + LOGIN
}
const getStartTime = (datetime: string) => {
    return new Date(datetime).getTime();
}


async function goToLogin(page){
    await page.click('text=I accept');
    if(await page.locator('has-text("Binance NFT Marketplace Terms and Conditions")')){
        await page.click('button:has-text("Accept")');
    }
    // await page.goto(getLoginUrl());
    await page.click('a:has-text("Log In")');
}
async function handleLogin(page){
    await page.fill('input[name="email"]', 'gta2v@naver.com');
    await page.fill('input[name="password"]', 'dhdntjrWkd1@');
    await page.click('a:has-text("Log In")');
    // await page.keyboard.press('Enter');
}
async function purchaseMysteryBox(page){
    // const clearLoginWait = () => {
    //     clearInterval(repeatLoginWait);
    // };
    // const repeatLoginWait = setInterval(async ()=> {
        // if(getStartTime(MOO_MONSTER_DATETIME) <= new Date().getTime()){
    if (await page.locator('has-text("Buy")')) {
        await page.click('button:has-text("Buy")');
        // clearLoginWait();
    }
    //TODO 해당 버튼이 disabled 상태로 되있어서 헤드리스로 켰을때 timeout 안나도록 유의할것.
    // }
    // }, 500);

    //TODO 클릭 여부 알 수 있으면, 클릭 될떄까지 반복 돌리기.

    //TODO 미스터리박스는 컨펌 버튼 없음. 바로 구매되는듯. https://www.binance.com/en/nft/mystery-box/detail?number=1&productId=232806145424555008 얘만 그런걸수도.
    await page.pause();

}
async function purchaseGeneralNFT(page){
    // page.on('request', request =>
    //     console.log('>>', request.method(), request.url()));

    // await page.waitFor(3000)
    // const clearLoginWait = () => clearInterval(repeatLoginWait);
    // const repeatLoginWait = setInterval(async ()=> {

    if (await page.locator('has-text("Buy Now")')) {
        await page.click('button:has-text("Buy Now")');
        // clearLoginWait();
    }
    // }, 500);

    if(await page.locator('has-text("Confirm Payment")')) {
        await page.click('button >> div:has-text("Confirm")');
    }
}

// test.describe.configure({ mode: 'parallel' });
test.describe('Binance auto nft purchase bot v0.1', () => {
    test.beforeEach(async ({ page }) => {
        /**
         * 페이지 이동
         */
        await page.goto(getMisteryBoxProductUrl('232806145424555008'));

        /**
         * 로그인 페이지 이동
         */
        await goToLogin(page);
    });
    //TODO 로그인 json으로 받아서 여러개 할 수 있음

    test('my test', async ({ page }) => {
        // Assertions use the expect API.
        await handleLogin(page);
        await purchaseGeneralNFT(page);

        await page.pause();
    });
});
