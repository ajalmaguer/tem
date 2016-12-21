import { browser, element, by } from 'protractor';

export class Tem2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tem-root h1')).getText();
  }
}
