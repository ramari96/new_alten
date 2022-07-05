/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
import { config } from "../../wdio.conf";

export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page
    */
    open (path = '') {
        return browser.url(`${config.baseUrl}/${path}`);
    }
}
