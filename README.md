# ALTEN Test Automation 

This framework was constructed for the technical review at ALTEN. Please find below all necessary details to install dependencies 
and run the tests. 

# Project Technologies 🪛

The project uses Cucumber which enables the use of Gherkin, WebdriverIO which provides several methods for the elements as well as for the 
browser object, Chai for assertions and CucumberJSON reporter together with multiple-cucumber-html-reporter for reports. 

# Project Structure 📄

- Features folder: everything related to tests go in here, this folder sub-divides into the following folders: 
    
    - Page Object folder: for each page/screen on our App we develop a js class that contains the selectors for the different elements of the page, 
      methods that are used in that specific page and methods imported from other classes/modules. 
    
    - Step definitions folder: translation of Gherkin sentences into js actions, they call different methods from the pages. 

    - Features files: features files contain the structure of our tests written in Gherkin (given that we are using Cucumber)

    - Utils folder: inside this folder we can find two things: 

        - Assertions file: it provides different assertions that help assert if tests have passed or not. 

        - Helpers file: it contains different methods that help process data / get data. 

    - Wdio config file: this file is the "brain" of our framework, it controlls the browser we run the tests in, wait times, base urls, hooks, etc. 

    - Package lock: provides a list of dependencies that get installed when we run `npm i` 

    - Babel config: allows us to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments

    - Node modules folder: contains all the dependencies that we need in order to execute our tests. 

    - .tmp folder: used to generate report data and using hooks, generate an HTML report for each time tests are run. 

# Installation 

In order to install all dependencies you must run `npm i` command. Make sure you have Nodejs installed on your machine prior to running this command.
To check whether you have it installed you can run `node -v` (currently using v14.19.1)

# Running tests 

In order to run your test you must execute the following command on your console `npx wdio run wdio.config.js` which will trigger the test containing the tag `@this`

After running your test, you can find inside `.tmp > report` folder an index.html file that displays the results of the tests.

