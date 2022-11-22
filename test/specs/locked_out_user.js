import LoginPage from  '../pageobjects/login.page';
import HomePage from '../pageobjects/main.page';

describe('Locked out user:', () => {
    beforeAll('Open webpage with url', () => {
        browser.url("https://www.saucedemo.com/");
    })

    it('All page elements are displayed',  async () => {
        const robotImg = await LoginPage.robotImg.getCSSProperty('background');
        await expect(LoginPage.inputUsername).toBeDisplayed;
        await expect(LoginPage.inputPassword).toBeDisplayed;
        await expect(LoginPage.btnLogin).toBeDisplayed;
        await expect(LoginPage.loginCredentials).toHaveTextContaining('Accepted usernames are:');
        await expect(robotImg.value).toContain('url("https://www.saucedemo.com/static/media/login_bot_graphic.20658452.png")');
    })

    it('Try to log in with empty fields',  async () => {
        await LoginPage.login('','');
        await LoginPage.errorMsg.isDisplayed();
        await expect(LoginPage.errorMsg).toHaveTextContaining('Epic sadface: Username is required');
        await expect(LoginPage.errorCrossImg).toBeDisplayed();
        const usernameBorderColor = await LoginPage.inputUsername.getCSSProperty('border-bottom-color');
        const passwordBorderColor = await LoginPage.inputPassword.getCSSProperty('border-bottom-color');
        await expect(usernameBorderColor.parsed.hex).toBe('#e2231a');
        await expect(passwordBorderColor.parsed.hex).toBe('#e2231a');
        await LoginPage.closeErrorBtn.click();
        await browser.refresh();
    })

    it('Try to log in with empty password',  async () => {
        await LoginPage.login('valen','');
        await LoginPage.errorMsg.isDisplayed();
        await expect(LoginPage.errorMsg).toHaveTextContaining('Epic sadface: Password is required');
        await expect(LoginPage.errorCrossImg).toBeDisplayed();
        const usernameBorderColor = await LoginPage.inputUsername.getCSSProperty('border-bottom-color');
        const passwordBorderColor = await LoginPage.inputPassword.getCSSProperty('border-bottom-color');
        await expect(usernameBorderColor.parsed.hex).toBe('#e2231a');
        await expect(passwordBorderColor.parsed.hex).toBe('#e2231a');
        await LoginPage.closeErrorBtn.click();
        await browser.refresh();
    })

    it('Try to log in with empty username',  async () => {
        await LoginPage.login('','secret_sauce');
        await LoginPage.errorMsg.isDisplayed();
        await expect(LoginPage.errorMsg).toHaveTextContaining('Epic sadface: Username is required');
        await expect(LoginPage.errorCrossImg).toBeDisplayed();
        const usernameBorderColor = await LoginPage.inputUsername.getCSSProperty('border-bottom-color');
        const passwordBorderColor = await LoginPage.inputPassword.getCSSProperty('border-bottom-color');
        await expect(usernameBorderColor.parsed.hex).toBe('#e2231a');
        await expect(passwordBorderColor.parsed.hex).toBe('#e2231a');
        await LoginPage.closeErrorBtn.click();
        await browser.refresh();
    })

    it('Try to log in with locked_out_user',  async () => {
        await LoginPage.login('locked_out_user','secret_sauce');
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorCrossImg).toBeDisplayed();
        const usernameBorderColor = await LoginPage.inputUsername.getCSSProperty('border-bottom-color');
        const passwordBorderColor = await LoginPage.inputPassword.getCSSProperty('border-bottom-color');
        await expect(usernameBorderColor.parsed.hex).toBe('#e2231a');
        await expect(passwordBorderColor.parsed.hex).toBe('#e2231a');
        await expect(LoginPage.errorMsg).toHaveTextContaining('Epic sadface: Sorry, this user has been locked out.');
        await LoginPage.closeErrorBtn.click();
    })
});