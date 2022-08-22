import config from '../../config';
import { Page, BrowserContext } from 'playwright';
import expect from 'expect';
import { join } from 'path';

export class BasePage {
  page: Page;
  context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public get expect() {
    return expect;
  }

  public navigateTo(url?: string): Promise<any> {
    const pageToGoTo = url ? (config.baseUrl += url) : config.baseUrl;

    return this.page.goto(pageToGoTo);
  }

  public screenshot(name: string): Promise<Buffer> | undefined {
    return this.page.screenshot({ path: join('screenshots', `${name}.png`) });
  }
}
