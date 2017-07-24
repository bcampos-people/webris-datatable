import { WebrisDatatablePage } from './app.po';

describe('webris-datatable App', () => {
  let page: WebrisDatatablePage;

  beforeEach(() => {
    page = new WebrisDatatablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
