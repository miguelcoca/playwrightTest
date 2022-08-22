import { PageManager } from '../pages/page-manager';
import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import * as messages from '@cucumber/messages';
import { BrowserContext, Page, APIRequestContext } from 'playwright';

export interface CucumberWorldConstructorParams {
  parameters: { [key: string]: string };
}

export interface ICustomWorld extends World {
  debug: boolean;
  feature?: messages.Pickle;
  context?: BrowserContext;
  page?: Page;
  pageManager?: PageManager;
  server?: APIRequestContext;
}

export class CustomWorld extends World implements ICustomWorld {
  constructor(options: IWorldOptions) {
    super(options);
  }
  debug = false;
}

setWorldConstructor(CustomWorld);
