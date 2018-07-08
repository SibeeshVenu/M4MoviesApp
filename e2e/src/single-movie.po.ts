import { browser, by, element } from 'protractor';

export class SingleMoviePage {
    navigateTo() {
        return browser.get('/movie/351286');
    }

    getImage() {
        return element(by.css('img-fluid'));
    }
}