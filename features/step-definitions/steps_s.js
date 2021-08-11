const { Given, When, Then } = require('@cucumber/cucumber');

const SearchPage = require('../pageobjects/search.page');

const pages = {
    search: SearchPage
}

// Given(/^I am in (\w+) page$/, async (pages) => {
Given(/^I am in ebay page$/, async (pages) => {
    await pages[pages].open()
});

When(/^I search for (\w+)$/, async (product) => {
    await SearchPage.search(product)
});

Then(/^I should see results/)