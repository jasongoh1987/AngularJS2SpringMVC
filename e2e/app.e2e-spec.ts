import { FuzionAngular2Page } from './app.po';

describe('fuzion-angular2 App', function() {
  let page: FuzionAngular2Page;

  beforeEach(() => {
    page = new FuzionAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
