import PurchasePage from '../pageobjects/purchase.page';
import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/main.page';
import loginPage from '../pageobjects/login.page';

describe('Purchase workflow: ', () =>  {
    beforeAll('Open webpage with url', () => {
        browser.url("https://www.saucedemo.com/")
    })

    it('Successful Login and Logout',  async () => {
        await LoginPage.login('standard_user','secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(HomePage.sideBarBurger).toBeDisplayedInViewport();
        await expect(HomePage.shopCart).toBeDisplayed();
        await expect(HomePage.bikelightImg).toHaveAttrContaining('src','/static/media/bike-light-1200x1500.a0c9caae.jpg');
        await expect(HomePage.backpackImg).toHaveAttrContaining('src','/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })

    it('Add items to shop cart',  async () => {
        await HomePage.addBackpack.click();
        await HomePage.addShirt.click();
        await HomePage.addJacket.click();
        await HomePage.addBikeLight.click();
    })

    it('Reset app state',  async () => {
        await expect(HomePage.shopCart).toHaveChildren(1);
        await HomePage.sideBarBurger.click();
        await HomePage.resetApp.waitForClickable();
        await expect(HomePage.resetApp).toBeDisplayed();
        await expect(HomePage.closeBurgerMenu).toBeDisplayed();
        await expect(HomePage.logoutBtn).toBeDisplayed();
        await HomePage.resetApp.click();
        await HomePage.closeBurgerMenu.click();
        await expect(HomePage.shopCart).toHaveChildren(0);
        await browser.refresh();
    })

    it('Add items to shop cart and open cart',  async () => {
        await HomePage.addBackpack.click();
        await HomePage.addShirt.click();
        await HomePage.shopCartBtn.click();
    })

    it('Go back to main page, add 2 items',  async () => {
        await PurchasePage.continueShoppingBtn.waitForClickable();
        await PurchasePage.continueShoppingBtn.click();
        await HomePage.addJacket.waitForClickable();
        await HomePage.addJacket.click();
        await HomePage.addBikeLight.click();
    })

    it('Go to cart and click checkout',  async () => {
        await HomePage.shopCartBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await PurchasePage.checkoutBtn.waitForClickable();
        await PurchasePage.checkoutBtn.click();
    })

    it('Checkout form loaded correctly',  async () => {
        await PurchasePage.continueForm.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await expect(PurchasePage.pageTitle).toHaveText('CHECKOUT: YOUR INFORMATION');
        await expect(loginPage.footerRobotImg).toBeDisplayed();
        await expect(HomePage.twitterIcon).toBeDisplayed();
        await expect(HomePage.facebookIcon).toBeDisplayed();
        await expect(HomePage.linkedinIcon).toBeDisplayed();
    })

    it('Try to continue with empty form',  async () => {
        const nameInputBorder = await PurchasePage.nameInputForm.getCSSProperty('border-bottom-color');
        const surnameInputBorder = await PurchasePage.surnameInputForm.getCSSProperty('border-bottom-color');
        const zipInputBorder = await PurchasePage.zipInputForm.getCSSProperty('border-bottom-color');
        await expect(nameInputBorder.parsed.hex).toBe('#e2231a');
        await expect(surnameInputBorder.parsed.hex).toBe('#e2231a');
        await expect(zipInputBorder.parsed.hex).toBe('#e2231a');
        await expect(PurchasePage.formErrorMsg).toHaveText('Error: First Name is required');
        await expect(PurchasePage.closeErrorMsg).toBeDisplayed();
        await PurchasePage.closeErrorMsg.click();
    })

    it('Try to continue with empty surname',  async () => {
        await PurchasePage.nameInputForm.setValue('Valen');
        await PurchasePage.continueForm.click();
        const surnameInputBorder = await PurchasePage.surnameInputForm.getCSSProperty('border-bottom-color');
        const zipInputBorder = await PurchasePage.zipInputForm.getCSSProperty('border-bottom-color');
        await expect(surnameInputBorder.parsed.hex).toBe('#e2231a');
        await expect(zipInputBorder.parsed.hex).toBe('#e2231a');
        await expect(PurchasePage.formErrorMsg).toHaveText('Error: Last Name is required');
        await expect(PurchasePage.closeErrorMsg).toBeDisplayed();
        await PurchasePage.closeErrorMsg.click();
        await browser.refresh();
    })

    it('Try to continue with empty Zip code',  async () => {
        await PurchasePage.nameInputForm.setValue('Valen');
        await PurchasePage.surnameInputForm.setValue('Test QA');
        await PurchasePage.continueForm.click();
        const zipInputBorder = await PurchasePage.zipInputForm.getCSSProperty('border-bottom-color');
        await expect(zipInputBorder.parsed.hex).toBe('#e2231a');
        await expect(PurchasePage.formErrorMsg).toHaveText('Error: Postal Code is required');
        await expect(PurchasePage.closeErrorMsg).toBeDisplayed();
        await PurchasePage.closeErrorMsg.click();
        await browser.refresh();
    })

    it('Complete form correctly',  async () => {
        await PurchasePage.nameInputForm.setValue('Valen');
        await PurchasePage.surnameInputForm.setValue('Test QA');
        await PurchasePage.zipInputForm.setValue('1234');
        await PurchasePage.continueForm.click();
    })

    it('Check "checkout" page loaded correctly',  async () => {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        await expect(PurchasePage.pageTitle).toHaveText('CHECKOUT: OVERVIEW');
        await expect(PurchasePage.freeShipping).toHaveText('FREE PONY EXPRESS DELIVERY!');
        await expect(PurchasePage.totalSummary).toHaveText('Total: $114.44');
        await expect(HomePage.twitterIcon).toBeDisplayed();
        await expect(HomePage.facebookIcon).toBeDisplayed();
        await expect(HomePage.linkedinIcon).toBeDisplayed();
    })

    it('Finish purchase',  async () => {
        await PurchasePage.finishPurchaseBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        await expect(PurchasePage.pageTitle).toHaveText('CHECKOUT: COMPLETE!');
        await expect(PurchasePage.finishedOrderTitle).toHaveText('THANK YOU FOR YOUR ORDER');
        await expect(PurchasePage.finishedOrderDescription).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await expect(PurchasePage.finishedOrderImg).toBeDisplayed();
        await expect(PurchasePage.finishedOrderImg).toHaveAttrContaining('src','/static/media/pony-express.46394a5d.png');
        await PurchasePage.backToHome.click();
        await browser.pause(500);
        await expect(PurchasePage.pageTitle).toHaveText('PRODUCTS');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })

    it('Check social media icons',  async () => {
        await expect(HomePage.twitterIcon).toBeDisplayed();
        await expect(HomePage.facebookIcon).toBeDisplayed();
        await expect(HomePage.linkedinIcon).toBeDisplayed();
        await expect(HomePage.facebookIcon).toHaveAttrContaining('href','https://www.facebook.com/saucelabs');
        await expect(HomePage.twitterIcon).toHaveAttrContaining('href','https://twitter.com/saucelabs');
        await expect(HomePage.linkedinIcon).toHaveAttrContaining('href','https://www.linkedin.com/company/sauce-labs/');
    })
})
