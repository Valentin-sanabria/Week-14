import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/main.page';
import abtUsPage from '../pageobjects/abtUs.page';

describe('About us: ', () =>  {
    beforeAll('Open webpage with url', () => {
        browser.url("https://www.saucedemo.com/")
    })

    it('Successful Login',  async () => {
        await LoginPage.login('standard_user','secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(HomePage.sideBarBurger).toBeDisplayedInViewport();
        await expect(HomePage.shopCart).toBeDisplayed();
        await expect(HomePage.bikelightImg).toHaveAttrContaining('src','/static/media/bike-light-1200x1500.a0c9caae.jpg');
        await expect(HomePage.backpackImg).toHaveAttrContaining('src','/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })

    it('Open about us page',  async () => {
        await HomePage.sideBarBurger.click();
        await abtUsPage.aboutUs.waitForClickable();
        await abtUsPage.aboutUs.click();
        await abtUsPage.abtUsTitle.waitForDisplayed();
    })

    it('Page loaded correctly',  async () => {
        await expect(browser).toHaveUrl('https://saucelabs.com/');
        await expect(abtUsPage.abtUsTitle).toHaveText('Pass or fail. The world relies on your code.');
        await expect(abtUsPage.aboutUsImg).toBeDisplayed();
        await expect(abtUsPage.aboutUsImg).toHaveAttrContaining('src','//images.ctfassets.net/czwjnyf8a9ri/1Sr93qtEJ6Q0cSRCeJqu8Z/97a7f2649193e4634d8a90f42d77d1da/image.png?w=800');
        await expect(abtUsPage.tryFreeBtn).toBeDisplayed();
    })
})