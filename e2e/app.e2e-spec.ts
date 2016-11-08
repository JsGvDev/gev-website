import { GevWebsitePage } from './app.po';

describe('gev-website App', function() {
  let page: GevWebsitePage;

  beforeEach(() => {
    page = new GevWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
