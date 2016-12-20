import { browser, element, by } from 'protractor';

export class TmePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tme-root h1')).getText();
  }
}
