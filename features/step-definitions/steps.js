const { Given, When, Then } = require('@cucumber/cucumber');
const SearchPage = require('../pageobjects/search.page');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    search: SearchPage,
    login: LoginPage
}

// Given(/^I am in (\w+) page$/, async (pages) => {
Given(/^I am in ebay page$/, async () => {
    console.log("\n\n\nparams: ", pages)
    await pages.search.open()
});

When(/^I search for (\w+)$/, async (product) => {
    await pages.search.search(product)
});

Then(/^I should see items results (\w+)/, async (items) => {
    console.log("items: ", items)
});

// const pages = {
//     login: LoginPage
// }

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

