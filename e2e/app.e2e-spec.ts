import { AirtabledasboardPage } from './app.po';

describe('airtabledasboard App', function() {
  let page: AirtabledasboardPage;

  beforeEach(() => {
    page = new AirtabledasboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
