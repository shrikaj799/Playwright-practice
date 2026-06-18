import {test,expect} from  '@playwright/test'
test("verify login",async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/")
    await page.waitForTimeout(2000);
    await expect(page).toHaveTitle('TTACart - Login ');
     await page.waitForTimeout(2000);

})