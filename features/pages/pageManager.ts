import { BasePage } from './basePage';
import { HomePage } from './homePage';
import { Page, BrowserContext } from 'playwright';

export class PageManager {
  basePage: BasePage;
  homePage: HomePage;

  constructor(public page: Page, public context: BrowserContext) {
    this.basePage = new BasePage(page, context);
    this.homePage = new HomePage(page, context);
  }
}
