import { W3D2Page } from './app.po';

describe('w3-d2 App', () => {
  let page: W3D2Page;

  beforeEach(() => {
    page = new W3D2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
