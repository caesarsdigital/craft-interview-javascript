const chromeModheader = require('chrome-modheader');

const X_NJD_SPORTSBOOK_APP_ENV = 'SAXpvdRTmGTB';
const useModHeader = !!X_NJD_SPORTSBOOK_APP_ENV;

exports.config = {
    path: '/wd/hub',
    runner: 'local',
    specs: ['./features/**/*'],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            extensions: [chromeModheader.getExtension()],
        },
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
    beforeScenario(uri, feature, scenario) {
        global.CONFIG = require('../index');
        global.expect = require('chai').expect;
        !process.env.ENV ? process.env.ENV = 'GPT' : process.env.ENV = (process.env.ENV).toUpperCase();
        browser.setTimeout({ implicit: 10000 });
        if (useModHeader) {
            CONFIG.xNJDHeader = { 'x-njd-sportsbook-app-env': X_NJD_SPORTSBOOK_APP_ENV };
            browser.url(chromeModheader.getAddHeaderUrl('x-njd-sportsbook-app-env', X_NJD_SPORTSBOOK_APP_ENV));
        }
        if (!process.env.VIEWPORT) {
            browser.maximizeWindow();
        } else {
            const viewPort = (process.env.VIEWPORT).toLowerCase();
            browser.setWindowSize(CONFIG.viewports[viewPort].width, CONFIG.viewports[viewPort].height);
        }
        browser.url(CONFIG.url);
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
        if (!scenarioTags.includes('@skipClearDown')) {
            try {
                browser.maximizeWindow();
                browser.url(CONFIG.neoApi.neoLoginUrl);
                browser.execute('window.localStorage.clear();');
                browser.execute('window.sessionStorage.clear();');
            } catch (e) {
                throw new Error('Wasn\'t able to clear session');
            }
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
                    { label: 'Project', value: 'WDIO UI Automation' },
                    { label: 'Cycle', value: 'random' },
                    { label: 'Execution Start Time', value: Date.now() },
                ],
            },
        });
    },
};
