import webdriver from 'selenium-webdriver';
import config from 'config';
import BasePage from './base-page.js';

export default class SigninPage extends BasePage {
    constructor( driver, visit = false ) {
        const modSigninSelector = webdriver.By.css('.mod-signin');
        super(driver, modSigninSelector, visit, config.get('dgURL'));
        this.modSigninSelector = modSigninSelector;
    }
    modSigninPresent() {
        return this.driver.isElementPresent(this.modSigninSelector);
    }
    modSignupPresent() {
        return this.driver.isElementPresent(webdriver.By.css('.mod-signup-links'));
    }
}
