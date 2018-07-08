import { browser, by, element } from 'protractor';

export class MoviesPage {
    navigateTo() {
        return browser.get('/movies');
    }

    getMovie() {
        return element(by.css('app-movie'));
    }

    getAllMovies() {
        return element.all(by.css('app-movie'));
    }

    getFirstMovie(){
        return element.all(by.css('app-movie')[0]);
    }

    getFirstMovieAddToWatchLink(){
        return element(by.css('.add-watch-list:nth-of-type(1)'));
    }

    getTheUrlAfterClicking(){
        return browser.getCurrentUrl();
    }
}