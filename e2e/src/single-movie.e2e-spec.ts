import { SingleMoviePage } from './single-movie.po';

describe('Single Movie tests', () => {
    let page: SingleMoviePage;

    beforeEach(() => {
        page = new SingleMoviePage();
        page.navigateTo();
    });

    it('Should show card', () => {
        expect(page.getImage().isPresent).toBeTruthy();
    });
});