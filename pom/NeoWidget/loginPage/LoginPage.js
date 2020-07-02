import Page from '../../Page';
import * as L from './LoginPageLocators';

class LoginPage extends Page {
    get closeSignInPage() { return $(L.CLOSE_SIGNIN_PAGE); }

    getLoginErrorMessageTitle() {
        $(L.SUBMISSION_MSG).waitForDisplayed();
        return ($(L.SUBMISSION_MSG)).getText();
    }

    getLoginValidationErrorMessage() {
        $(L.LOGIN_VALIDATION_MSG).waitForDisplayed();
        return ($(L.LOGIN_VALIDATION_MSG)).getText();
    }

    closeLoginModal() {
        $(L.LOGIN_VALIDATION_MSG).waitForDisplayed();
        $(L.CLOSE_SIGNIN_PAGE).waitForClickable();
        $(L.CLOSE_SIGNIN_PAGE).click();
        $(L.LOGIN_BTN).waitForDisplayed();
    }
}

export default new LoginPage();

// What is this file for? Why are we organizing code this way?
