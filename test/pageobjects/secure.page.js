const Pages = require('./pages');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Pages {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }
}

module.exports = new SecurePage();