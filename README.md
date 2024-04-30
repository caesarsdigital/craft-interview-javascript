# QA Automation Craft Interview
### Prerequisites:
- Node v18+
  - https://nodejs.org/en/download
  - Can use Node Version Manager (NVM) if needed
    - https://github.com/nvm-sh/nvm
- Chrome Browser

#### Installing Node packages
Install node packages within the project root directory:
```npm i```

###### Using NVM (optional):
Install NVM:
```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash```
Then, install and use node 18:
```nvm install 18 && nvm use 18```
Finally, install the packages:
```npm i```


### Questions!

- Can you explain why you came to this file first? Or why not?
- Can you explain the basic structure of the project without reading this file? What are your expectations?
- Can you explain what the root level files might be for?

### Steps needed to add new tests
If the new tests fit into any of the feature files in the `feature` folder, please add in there,
otherwise create a new feature file in an existing or new directory as appropriate.

Then, implement the step definitions by following the similar rule above.

Finally, update the pom to have necessary selectors, components and page object models.
Details of how this can be done is found in the POM repository mentioned below.

### Running tests locally:

#### UI Tests
Run the tests locally with:
```npm run test```

#### API Tests
To avoid conflicts with Cucumber configurations, API tests are nested within the `api` folder 
and have a separate configuration from the UI automation tests. To run API tests, you'll need 
to change your directory to the `api` folder, install npm packages there, and run this script: 
```npm run api```

### Environment Variables
- TAG=@task-1

Environment variables can be passed through the command line or specified in a separate `.env` file

### Structure
- `config/*` the configuration files for the tests are stored here, including URLs etc
- `features` contains all feature files and scenarios
- `step_definitions` this is where all the glue code is
- `pom/` is where the page object model is located and all the drivers and factories are handled
- `utils` is where all utilities should be stored including API utilities which support test steps


#### How to model a page
Every page or component will have its own model within `./pom`.
These models are self-contained and atomic. Meaning all actions are encapsulated within the POM. 
The glue code (step-definitions) should only be used to call POM functions and evaluate their results.  

All operations need to go to functions within the specific page which they belong to, and need to complete there as well.

Note: actually using the locators is more performant then having a class member, and using that via this.

login_steps.js
```js
When(/^I am logged in as a Player$/, async function () {
    await somePage.login(CONFIG.credentials.valid.email, CONFIG.credentials.valid.password);
});
```

If there is no way to avoid page transition waits, please do the transition in the step definitions in order to keep the POM clean.
E.g.:
```js
When(/^I am logged in as a Player$/, async function () {
    await somePage.login(CONFIG.credentials.valid.email, CONFIG.credentials.valid.password);
    await someOtherPage.someElement.waitForDisplayed(); // <= do this to conclude your step and leave it in a clean state
});
```

### Where do I start?
There are four existing feature files in this project.
Each contain a scenario that has undefined test steps.
Create and complete the undefined test steps for the scenario.
It is recommended to start with the scenario tagged `@task-1` first, unless otherwise instructed.

### Tips
- Try to verbalize your thought processes
- If you're unsure about your approach, ask for feedback
- You can look up reference material if needed (stackoverflow, google, etc.)
