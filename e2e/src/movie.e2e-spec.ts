import { MoviePage } from './movie.po';

describe('Movie tests', () => {
    let page: MoviePage;

    beforeEach(() => {
        page = new MoviePage();
        page.navigateTo();
    });

    it('Should show card', () => {
        expect(page.getCard().isPresent).toBeTruthy();
    });

    it('Should show card-title', () => {
        expect(page.getCardTitle().isPresent).toBeTruthy();
    });
});