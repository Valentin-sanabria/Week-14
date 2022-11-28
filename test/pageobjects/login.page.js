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

    get errorMsg () {
        return $('#login_button_container > div > form > div.error-message-container.error > h3');
    }

    get errorCrossImg () {
        return $('#login_button_container > div > form > div:nth-child(1) > svg > path');
    }

    get closeErrorBtn () {
        return $('#login_button_container > div > form > div.error-message-container.error > h3 > button');
    }

    get loginCredentials () {
        return $('#login_credentials');
    }

    get robotImg () {
        return $('#root > div > div.login_wrapper > div.login_wrapper-inner > div.bot_column');
    }

    get footerRobotImg() {
        return $('#page_wrapper > footer > img');
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