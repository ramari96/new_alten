import Page from './page';

/**
 * Page object class for Google's Home Page 
 */
class HomePage extends Page {

    /* Selectors  */

    get searchBar() { return $('[action="/search"] input[maxlength]')}
    get cookiesModal() { return $('#CXQnmb')}
    get acceptCookiesBtn() { return $('#L2AGLb')}

    /**
     * Verifies whether the "Accept all cookies" modal is visible, if so
     * it clicks on accept all to continue. 
     */
    async checkModal() {
        let isVisible = await this.cookiesModal.isExisting();
        if(isVisible){
            await this.acceptCookiesBtn.click();
        }
    }
    /**
     * 
     * @param {string} searchInput 
     * Types whatever searchInput it receives and proceeds to the result screen by 
     * simulating an Enter key 
     */
    async searchAndContinue(searchInput) {
        await this.checkModal();
        await this.searchBar.setValue(searchInput)
        await browser.keys('Enter');
    }

}

export default new HomePage();