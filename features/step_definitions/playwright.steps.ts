import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then('Snapshot {string}', async function (this: ICustomWorld, name: string) {
  await this.pageManager?.basePage.screenshot(name);
});

Then('Snapshot', async function (this: ICustomWorld) {
  const image = await this.pageManager?.page.screenshot();
  image && (await this.attach(image, 'image/png'));
});

Then('debug', async function () {
  // eslint-disable-next-line no-debugger
  debugger;
});

Given('I browse to the playwright website', async function (this: ICustomWorld) {
  await this.pageManager?.homePage.navigateToHomePage();
});

When('I change the theme to {string} mode', async function (this: ICustomWorld, mode: string) {
  await this.pageManager?.homePage.setTheme(mode);
});

Then(
  'I see the background color {string}',
  async function (this: ICustomWorld, backgroundColor: string) {
    await this.pageManager?.homePage.expectBackgroundColor(backgroundColor);
  },
);

Given('A Studio Ghibly movie recieved', async function (this: ICustomWorld) {
  const response = await this.server?.get('/films');
  expect(response).toBeDefined();
});

When('I select docs link', async function (this: ICustomWorld) {
  await this.pageManager?.homePage.selectDocsLink();
});

Then('I see the {string} title', async function (this: ICustomWorld, title: string) {
  return this.pageManager?.homePage.hasTitle(title);
});

Then('url contains {string}', async function (this: ICustomWorld, text: string) {
  return this.pageManager?.homePage.urlContains(text);
});
