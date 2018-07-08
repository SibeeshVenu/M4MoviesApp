import { browser, by, element } from 'protractor';

export class LoginPage {
    navigateTo() {
        return browser.get('/login');
    }

    getLoginEmailTextbox() {
        return element(by.css('#defaultForm-email'));
    }

    getLoginPasswordTextbox() {
        return element(by.css('#defaultForm-pass'));
    }

    getLoginSubmitButton() {
        return element(by.css('#btnSubmit'));
    }

    getLoginForm() {
        return element(by.css('#loginForm'));
    }

    getLogoutButton() {
        return element(by.css('#logout'));
    }
}