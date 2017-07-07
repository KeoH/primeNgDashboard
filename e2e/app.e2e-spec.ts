import { PrimeNgDashboardPage } from './app.po';

describe('prime-ng-dashboard App', () => {
  let page: PrimeNgDashboardPage;

  beforeEach(() => {
    page = new PrimeNgDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
