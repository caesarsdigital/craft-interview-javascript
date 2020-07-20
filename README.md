Questions!
Can you explain why you came to this file first?
Can you explain why you did not?
Can you explain the basic structure of the project without reading this file? What are your expectations?
Can you explain what the root level files might be for?

WDIO Functional Testing Framework

### Concept
Automated end-to-end ui tests for Sportsbook application.

### Steps needed to add new tests
If the new tests fit into any of the feature files in the `feature` folder, please add in there,
otherwise create a new feature file in an existing or new directory as appropriate.

Then implement the step definitions by following the similar rule above.

Finally update the pom to have necessary selectors, components and page object models.
Details of how this can be done is found in the POM repository mentioned below.

### How to run tests locally:
Install:
Chrome

NVM:
```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash```
Then node 12:
```nvm install 12 && nvm use 12```
Then go to the folder where you checked out the files:
```npm config set strict-ssl false && npm i```

Run the tests locally with:
```STATE=NJ ENV=TEST npm run test```

### Structure
`config/*` the configuration files for the tests are stored here, including URL's etc

`features` contains all the feature files, step definitions and support code

`step_definitions` this is where all the glue code is

`pom/` is where the page object model is located and all the drivers and factories are handled

`utils` is where all utilities should be stored including API utilities which help out a test steps


#### How to model a page
Every page or component will have its own model within `./pom`.
These models are self-contained and atomic meaning all actions are encapsulated within the POM. 
The glue code (step-definitions) should only be used to call POM functions and evaluate their results.  

All operations need to go to functions within the specific page which they belong to, and need to complete there as well.

Note: actually using the locators is more performant then having a class member, and using that via this.

login_steps.js
```
When(/^I am logged in as a Player$/, function () {
    somePage.login(CONFIG.credentials.valid.email, CONFIG.credentials.valid.password);
});
```

If there is no way to avoid page transition waits, please do the transition in the step definitions in order to keep the POM clean.
E.g.:
```
When(/^I am logged in as a Player$/, function () {
    somePage.login(CONFIG.credentials.valid.email, CONFIG.credentials.valid.password);
    someOtherPage.someElement.waitForDisplayed(); // <= do this to conclude your step and leave it in a clean state
});

```
