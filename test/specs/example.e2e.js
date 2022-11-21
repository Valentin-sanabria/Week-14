import LoginPage from  '../pageobjects/login.page';

describe('Testing Login screenflow: ', () => {
    beforeAll('Open webpage with url', () => {
        browser.url("https://www.saucedemo.com/")
    })

    it('Try to log in with empty password',  async () => {
        await LoginPage.login('valen','');
        await LoginPage.errorMsg.isDisplayed();
        await expect(LoginPage.errorMsg).toHaveTextContaining('Epic sadface: Password is required');
        await LoginPage.closeErrorBtn.click();
        await browser.refresh();
    })

    it('Try to log in with empty username',  async () => {
        await LoginPage.login('','secret_sauce');
        await LoginPage.errorMsg.isDisplayed();
        await expect(LoginPage.errorMsg).toHaveTextContaining('Epic sadface: Username is required');
        await LoginPage.closeErrorBtn.click();
        await browser.refresh();
    })

    it('Try to log in with incorrect information',  async () => {
        await LoginPage.login('TestingQA','wrongPassword');
        await LoginPage.errorMsg.isDisplayed();
        await expect(LoginPage.errorMsg).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
        await LoginPage.closeErrorBtn.click();
        await browser.refresh();
    })

    it('Log in with standard_user',  async () => {
        await LoginPage.login('standard_user','secret_sauce');
    })

    it('Log out with standard_user',  async () => {
        await LoginPage.sideBarBurger.click();
        await LoginPage.logoutBtn.waitForClickable();
        await LoginPage.logoutBtn.click();
    })

    it('Try to log in with locked_out_user',  async () => {
        await LoginPage.login('locked_out_user','secret_sauce');
        await expect(LoginPage.errorMsg).toHaveTextContaining('Epic sadface: Sorry, this user has been locked out.');
        await LoginPage.closeErrorBtn.click();
    })

    it('Log in with performance_glitch_user',  async () => {
        await LoginPage.login('performance_glitch_user','secret_sauce');
    })

    it('Log out with performance_glitch_user',  async () => {
        await LoginPage.sideBarBurger.click();
        await LoginPage.logoutBtn.waitForClickable();
        await LoginPage.logoutBtn.click();
    })

    it('Log in with problem_user',  async () => {
        await LoginPage.login('problem_user','secret_sauce');
    })

    it('Log out with problem_user',  async () => {
        await LoginPage.sideBarBurger.click();
        await LoginPage.logoutBtn.waitForClickable();
        await LoginPage.logoutBtn.click();
    })
});
