import Page from '../Page';
import * as L from './LoginPageLocators';

class LoginPage extends Page {
  get appHeader() {
    return $(L.APP_HEADER);
  }
  get errorMessage() {
    return $(L.ERROR_MESSAGE);
  }
}

export default new LoginPage();

// What is this file for? Why are we organizing code this way?
