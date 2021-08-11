const Pages = require('./pages');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Pages {
    /**
     * define selectors using getter methods
     */
    get inputText () { return $('#gh-ac') }
    get btnSubmit () { return $('#gh-btn') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async search (product) {
        await this.inputText.setValue(product);
        await this.btnSubmit.click();
    }
}
module.exports = new SearchPage();
