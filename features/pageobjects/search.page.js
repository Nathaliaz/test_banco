const Pages = require('./pages');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Pages {
    /**
     * define selectors using getter methods
     */
    get inputText () { return $('#gh-ac') }
    // get tapSearch () { return $('#gh-btn') }

    get btnSubmit () { return $('#gh-btn') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    /**
     * async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    */
    /**
     * overwrite specifc options to adapt it to page object
     */
    /**open () {
        return super.open('login');
    }
*/
    async search (product) {
        await this.inputText.setValue(product);
        await this.btnSubmit.click();
    }
}
module.exports = new SearchPage();
