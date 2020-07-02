import Page from '../Page';
import {
    MY_ACCT_BUTTON,
    LOG_OUT_BUTTON,
    ACCOUNT_BALANCE,
    CLOSE_LOGGED_OUT_POPUP,
} from './NeoWidgetLocators';

class NeoWidget extends Page {
    get accountBalance() { return $(ACCOUNT_BALANCE); }
    get myAccountButton() { return $(MY_ACCT_BUTTON); }
    get logOutButton() {
        $(LOG_OUT_BUTTON).waitForClickable();
        return $(LOG_OUT_BUTTON);
    }
    get closeLogOutPopUp() {
        $(CLOSE_LOGGED_OUT_POPUP).waitForClickable();
        return $(CLOSE_LOGGED_OUT_POPUP);
    }

    logOut() {
        $(MY_ACCT_BUTTON).waitForClickable();
        $(MY_ACCT_BUTTON).click();
        $(LOG_OUT_BUTTON).waitForClickable();
        $(LOG_OUT_BUTTON).click();
        $(CLOSE_LOGGED_OUT_POPUP).waitForClickable();
        $(CLOSE_LOGGED_OUT_POPUP).click();
        $(ACCOUNT_BALANCE).waitForDisplayed(5000, true);
    }
}

export default new NeoWidget();
