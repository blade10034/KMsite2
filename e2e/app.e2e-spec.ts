import { KMsite2Page } from './app.po';

describe('kmsite2 App', function() {
  let page: KMsite2Page;

  beforeEach(() => {
    page = new KMsite2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
