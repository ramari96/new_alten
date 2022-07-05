import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page';
import ResultPage from '../pageobjects/result.page';

const pages = {
    home: HomePage,
    result: ResultPage
}

Given(/^I am on Google (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I search for a (.+)$/, async (company) => {
    await HomePage.searchAndContinue(company);
});

Then(/^I can check if the result is larger than 100k and not below 10k$/, async () => {
    await ResultPage.getResult();
    await ResultPage.evaluateResult();
});

