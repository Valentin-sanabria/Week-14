class LoginPage {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }

    get sideBarBurger () {
        return $('#react-burger-menu-btn');
    }

    get logoutBtn () {
        return $('#logout_sidebar_link');
    }

    get errorMsg () {
        return $('#login_button_container > div > form > div.error-message-container.error');
    }

    get closeErrorBtn () {
        return $('#login_button_container > div > form > div.error-message-container.error > h3 > button');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();