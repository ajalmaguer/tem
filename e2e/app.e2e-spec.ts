import { Tem2Page } from './app.po';

describe('tem2 App', function() {
  let page: Tem2Page;

  beforeEach(() => {
    page = new Tem2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tem works!');
  });
});
