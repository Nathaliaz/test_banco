const { Given, When, Then } = require('@cucumber/cucumber');
const SearchPage = require('../pageobjects/search.page');

const pages = {
    search: SearchPage,
}

Given(/^I am in ebay page$/, async () => {
    console.log("\n\n\nparams: ", pages)
    await pages.search.open()
});

When(/^I search for (\w+)$/, async (product) => {
    await pages.search.search(product)
});

Then('I should see items results', async () => {
    const h1 = await $('.srp-controls__count-heading')
    const numberOfResults = await h1.getText()
    console.log("Resultados: ", numberOfResults)
});

