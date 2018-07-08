import { MoviesPage } from './movies.po';
import { browser } from 'protractor';

describe('Movies tests', () => {
    let page: MoviesPage;

    beforeEach(() => {
        page = new MoviesPage();
        page.navigateTo();
    });

    it('Should contain app-movie', () => {
        expect(page.getMovie().isPresent).toBeTruthy();
    });

    it('Should return more than 1 movie', () => {
        expect(page.getAllMovies().count()).toBeGreaterThan(0);
    });

    it('get first movie link', () => {
        expect(page.getFirstMovieAddToWatchLink()).not.toBeNull();
    });

    // it('Should redirect to first movie link', () => {
    //     page.getFirstMovieAddToWatchLink().click();
    //     expect(browser.getCurrentUrl()).toMatch('watchlist');
    //     // return browser.driver.wait(() => {
    //     //     return browser.driver.getCurrentUrl().then((url) => {
    //     //         return /watchlist/.test(url);
    //     //     });
    //     // }, 10000);
    // });
});