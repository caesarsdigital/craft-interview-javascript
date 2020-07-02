import { LOADING_BACKDROP, SCREEN_LOADER } from './NeoWidget/NeoWidgetLocators';

const viewportJson = require('../config/viewports');

class Page {
    open(path) {
        browser.url(path);
    }

    neoWait(locator) {
        $(LOADING_BACKDROP).waitForDisplayed(5000, true);
        $(SCREEN_LOADER).waitForDisplayed(5000, true);
        $(locator).waitForDisplayed(5000);
    }

    click(locator) {
        $(LOADING_BACKDROP).waitForDisplayed(5000, true);
        $(SCREEN_LOADER).waitForDisplayed(5000, true);
        $(locator).waitForClickable(5000);
        $(locator).click();
    }

    scrollApp() {
        const viewPortHeight = viewportJson.desktop.height;
        browser.execute(function (heightVar) {
            // eslint-disable-next-line no-undef
            document.scrollingElement.scrollTop += heightVar;
        }, viewPortHeight);
    }

    setValue(selector, stringValue) {
        while (selector.getValue() !== stringValue) {
            selector.clearValue();
            selector.setValue(stringValue);
        }
    }
}
export default Page;
