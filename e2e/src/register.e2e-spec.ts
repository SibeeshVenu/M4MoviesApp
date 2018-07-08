import { RegisterPage } from './register.po';

describe('Register tests', () => {
    let page: RegisterPage;

    beforeEach(() => {
        page = new RegisterPage();
        page.navigateTo();
    });

    it('Register form should be valid', () => {
        let email = page.getRegisterEmailTextbox();
        email.sendKeys('a@a.com');

        let pass = page.getRegisterPasswordTextbox();
        pass.sendKeys('123');

        let name = page.getRegisterNameTextbox();
        name.sendKeys('a');

        let formValid = page.getRegisterForm().getAttribute('class');

        expect(formValid).toContain('ng-valid');
    });

    
    it('Register form should be invalid', () => {
        let email = page.getRegisterEmailTextbox();
        email.sendKeys('');

        let pass = page.getRegisterPasswordTextbox();
        pass.sendKeys('');

        let name = page.getRegisterNameTextbox();
        pass.sendKeys('');

        let formValid = page.getRegisterForm().getAttribute('class');

        expect(formValid).toContain('ng-invalid');
    });
});