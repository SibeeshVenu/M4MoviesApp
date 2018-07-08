import { LoginPage } from './login.po';

describe('Login tests', () => {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
        page.navigateTo();
    });

    it('Login form should be valid', () => {
        let email = page.getLoginEmailTextbox();
        email.sendKeys('a@a.com');

        let pass = page.getLoginPasswordTextbox();
        pass.sendKeys('123');

        let formValid = page.getLoginForm().getAttribute('class');

        expect(formValid).toContain('ng-valid');
    });

    
    it('Login form should be invalid', () => {
        let email = page.getLoginEmailTextbox();
        email.sendKeys('');

        let pass = page.getLoginPasswordTextbox();
        pass.sendKeys('');

        let formValid = page.getLoginForm().getAttribute('class');

        expect(formValid).toContain('ng-invalid');
    });

    it('Should hide logout', () => {
        let email = page.getLoginEmailTextbox();
        email.sendKeys('a@a.ab');

        let pass = page.getLoginPasswordTextbox();
        pass.sendKeys('1234');

        page.getLoginSubmitButton().click();
        
        expect(page.getLogoutButton().isPresent()).toBeFalsy();
    });

    it('Should show logout', () => {
        let email = page.getLoginEmailTextbox();
        email.sendKeys('sibikv4u@gmail.com');

        let pass = page.getLoginPasswordTextbox();
        pass.sendKeys('1234');

        page.getLoginSubmitButton().click();
        
        expect(page.getLogoutButton().isPresent()).toBeTruthy();
    });
});