import { BasePage } from './basePage';
import { ElementHandle } from 'playwright';
export class HomePage extends BasePage {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public get elements() {
    return {
      logoTopLeft: 'nav >> a >> text="Playwright"',
      themeToggle: '.clean-btn.toggleButton_gllP',
      navBar: '.navbar',
      docslink: ' a >> text="Docs"',
      titleSelector: 'h1 >> text="Installation"',
    };
  }

  public async navigateToHomePage(): Promise<ElementHandle<HTMLElement | SVGElement>> {
    await this.navigateTo();
    return this.page.waitForSelector(this.elements.logoTopLeft);
  }

  public async setTheme(theme: string): Promise<ElementHandle<HTMLElement | SVGElement>> {
    const current = await this.page.getAttribute('html', 'data-theme');
    if (current !== theme) {
      await this.page.click(this.elements.themeToggle);
    }

    return this.expect(await this.page.waitForSelector(`html[data-theme=${theme}]`)).toBeTruthy();
  }

  public async expectBackgroundColor(color: string): Promise<string> {
    const backgroundColor = await this.page.$eval(
      this.elements.navBar,
      (e) => getComputedStyle(e).backgroundColor,
    );
    return this.expect(color).toBe(backgroundColor);
  }

  public async selectDocsLink(): Promise<ElementHandle<HTMLElement | SVGElement>> {
    await this.page.click(this.elements.docslink);
    return this.page.waitForSelector(this.elements.docslink);
  }

  public async hasTitle(title: string): Promise<string> {
    const actualText = await this.page.textContent(this.elements.titleSelector);
    return this.expect(title).toBe(actualText);
  }

  public async urlContains(url: string): Promise<string> {
    const actualURL = await this.page.url();
    return this.expect(actualURL).toContain(url);
  }
}
