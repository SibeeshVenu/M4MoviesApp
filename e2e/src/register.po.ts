import { browser, by, element } from 'protractor';

export class RegisterPage {
    navigateTo() {
        return browser.get('/register');
    }
    getRegisterNameTextbox() {
        return element(by.css('#orangeForm-name'));
    }

    getRegisterEmailTextbox() {
        return element(by.css('#orangeForm-email'));
    }

    getRegisterPasswordTextbox() {
        return element(by.css('#orangeForm-pass'));
    }

    getLoginSubmitButton() {
        return element(by.css('#btnSubmit'));
    }

    getRegisterForm() {
        return element(by.css('#registerForm'));
    }
}