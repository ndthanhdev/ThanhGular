import { ThanhGularPage } from './app.po';

describe('thanh-gular App', function() {
  let page: ThanhGularPage;

  beforeEach(() => {
    page = new ThanhGularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
