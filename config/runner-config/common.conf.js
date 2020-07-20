exports.config = {
    path: '/wd/hub',
    runner: 'local',
    specs: ['./features/**/*'],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
    }],
    logLevel: 'silent',
    waitforTimeout: 4000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec', ['cucumberjs-json', {
        jsonFolder: 'cucumber-js-results/',
        language: 'en',
    },
    ]],
    cucumberOpts: {
        requireModule: ['@babel/register'],
        require: [
            './step_definitions/login_steps.js',
        ],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: false,
        source: true,
        profile: [],
        strict: false,
        tagExpression: 'not @pending',
        timeout: 40000,
        ignoreUndefinedDefinitions: false,
    },
    beforeScenario() {
        !process.env.ENV ? process.env.ENV = 'TEST' : process.env.ENV = (process.env.ENV).toUpperCase();
        !process.env.STATE ? process.env.STATE = 'NJ' : process.env.STATE = (process.env.STATE).toUpperCase();
        global.CONFIG = require('../index');
        global.expect = require('chai').expect;
        browser.setTimeout({ implicit: 10000 });
        if (!process.env.VIEWPORT) {
            browser.maximizeWindow();
        } else {
            const viewPort = (process.env.VIEWPORT).toLowerCase();
            browser.setWindowSize(CONFIG.viewports[viewPort].width, CONFIG.viewports[viewPort].height);
        }
        console.log(CONFIG);
    },

    afterScenario(uri, feature, scenario, result) {
        const scenarioTags = JSON.stringify(scenario.tags);
        if (process.env.BROWSER_LOG) {
            console.log(browser.getLogs('browser'));
            console.log(browser.getLogs('driver'));
        }
        if (result.status === 'failed') {
            const cucumberJson = require('wdio-cucumberjs-json-reporter').default;
            cucumberJson.attach(browser.takeScreenshot(), 'image/png');
        }
        if (scenarioTags.includes('@reload')) {
            browser.reloadSession();
        }
    },

    onComplete: () => {
        const report = require('multiple-cucumber-html-reporter');

        report.generate({
            jsonDir: './cucumber-js-results/',
            reportPath: './cucumber-js-results/report/',
            metadata: {
                browser: {
                    name: 'chrome',
                    version: '80',
                },
                device: 'Gitlab-CI',
                platform: {
                    name: 'Windows',
                    version: 'xxx',
                },
            },
            customData: {
                title: 'Master Run',
                data: [
                    { label: 'Project', value: 'UI Automation' },
                    { label: 'Cycle', value: 'random' },
                    { label: 'Execution Start Time', value: Date.now() },
                ],
            },
        });
    },
};
