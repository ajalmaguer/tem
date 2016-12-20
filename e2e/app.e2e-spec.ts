import { TmePage } from './app.po';

describe('tme App', function() {
  let page: TmePage;

  beforeEach(() => {
    page = new TmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tme works!');
  });
});
