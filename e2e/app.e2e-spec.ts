import { Angular4DoubleCollapseGalleryPage } from './app.po';

describe('angular4-double-collapse-gallery App', function() {
  let page: Angular4DoubleCollapseGalleryPage;

  beforeEach(() => {
    page = new Angular4DoubleCollapseGalleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
