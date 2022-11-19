import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {
    beforeAll('Open webpage with url', () => {
        browser.url("https://www.saucedemo.com/")
    })
   /* it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    }); */

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
