import { NgpracticePage } from './app.po';

describe('ngpractice App', function() {
  let page: NgpracticePage;

  beforeEach(() => {
    page = new NgpracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
