import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
   /* it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    }); */

    it('Log in with standard_user',  async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user','secret_sauce');
    })

    it('Log out with standard_user',  async () => {
        const sideBarBurger = $('//*[@id="react-burger-menu-btn"]');
        const logoutBtn = $('//*[@id="logout_sidebar_link"]');
        await sideBarBurger.click();
        await logoutBtn.waitForClickable();
        await logoutBtn.click();
    })

    it('Log in with locked_out_user',  async () => {
        const errorMsg = $('//*[@id="login_button_container"]/div/form/div[3]/h3');
        const closeErrorBtn = $('//*[@id="login_button_container"]/div/form/div[3]/h3/button');

        await LoginPage.open();
        await LoginPage.login('locked_out_user','secret_sauce');
        await expect(errorMsg).toHaveTextContaining('Epic sadface: Sorry, this user has been locked out.');
        await closeErrorBtn.click();
    })

    it('Log in with performance_glitch_user',  async () => {
        await LoginPage.open();
        await LoginPage.login('performance_glitch_user','secret_sauce');
    })

    it('Log out with performance_glitch_user',  async () => {
        const sideBarBurger = $('//*[@id="react-burger-menu-btn"]');
        const logoutBtn = $('//*[@id="logout_sidebar_link"]');
        await sideBarBurger.click();
        await logoutBtn.waitForClickable();
        await logoutBtn.click();
    })

    it('Log in with problem_user',  async () => {
        await LoginPage.open();
        await LoginPage.login('problem_user','secret_sauce');
    })

    it('Log out with problem_user',  async () => {
        const sideBarBurger = $('//*[@id="react-burger-menu-btn"]');
        const logoutBtn = $('//*[@id="logout_sidebar_link"]');
        await sideBarBurger.click();
        await logoutBtn.waitForClickable();
        await logoutBtn.click();
    })
});
