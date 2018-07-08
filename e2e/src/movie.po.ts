import { browser, by, element } from 'protractor';

export class MoviePage {
    navigateTo() {
        return browser.get('/movies');
    }

    getCard() {
        return element(by.css('card'));
    }

    getCardTitle() {
        return element(by.css('card-title'));
    }
}