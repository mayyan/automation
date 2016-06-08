import assert from 'assert';
import webdriver from 'selenium-webdriver';
import test from 'selenium-webdriver/testing';
import config from 'config';
import SigninPage from '../lib/signin-page.js';

let driver;

const mochaTimeoutMS = config.get( 'mochaTimeoutMS' );

test.describe( 'Sign in', function() {
    this.timeout( mochaTimeoutMS );

    test.before( function() {
        driver = new webdriver.Builder().withCapabilities( webdriver.Capabilities.chrome() ).build();
    } );

    test.it( 'shows sign in component', function() {
        var page = new SigninPage( driver, true );
        page.modSigninPresent().then( function( present ) {
            assert.equal( present, true, 'Sign in component not displayed' );
        } );
    } );

    test.it( 'shows sign up link', function() {
        var page = new SigninPage( driver, true );
        page.modSignupPresent().then( function( present ) {
            assert.equal( present, true, 'Sign up component not displayed' );
        } );
    } );

    test.afterEach( () => driver.manage().deleteAllCookies() );

    test.after( () => driver.quit() );
} );
