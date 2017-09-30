import { ShoppingCardPage } from './app.po';

describe('shopping-card App', () => {
  let page: ShoppingCardPage;

  beforeEach(() => {
    page = new ShoppingCardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to sc!');
  });
});
