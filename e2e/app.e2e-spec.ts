import { UdemyFoodPage } from './app.po';

describe('udemy-food App', () => {
  let page: UdemyFoodPage;

  beforeEach(() => {
    page = new UdemyFoodPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
