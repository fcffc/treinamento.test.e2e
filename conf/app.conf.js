/**
 * WebdriverIO config file to run tests on native mobile apps.
 * Config file helps us configure all the settings and setup environments 
 * to run our tests.
 */

const host = '127.0.0.1';   // default appium host
const port = 4730;          // default appium port

const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;

exports.config = {
    debug: false,
    specs: [
        './features/app/app-treinamento/*.feature',
    ],

    reporters: ['allure', 'spec'],
    reporterOptions: {
        allure: {
            outputDir: './allure-results/'
        }
    },

    host: host,
    port: port,

    maxInstances: 1,

    capabilities: [
        {
            appiumVersion: '1.8.1',                 // Appium module version
            browserName: '',                        // browser name is empty for native apps
            platformName: 'Android',
            app: './app/app-treinamento/app-homolog.apk',          // Path to your native app
            appPackage: 'net.qa.mobile.treinamento.homolog',  // Package name of your app
            appActivity: 'net.qa.mobile.treinamento.MainActivity', // App activity of the app
            platformVersion: '9',              // Android platform version of the device
            deviceName: 'emulator-5554',             // device name of the mobile device
            waitforTimeout: waitforTimeout,
            commandTimeout: commandTimeout,
            newCommandTimeout: 30 * 60000,
        }
    ],

    services: ['appium'],
    appium: {
        waitStartTime: 6000,
        waitforTimeout: waitforTimeout,
        command: 'appium',
        logFileName: 'appium.log',
        args: {
            address: host,
            port: port,
            commandTimeout: commandTimeout,
            sessionOverride: true,
            debugLogSpacing: true
        }
    },

    /**
     * test configurations
     */
    logLevel: 'silent',
    screenshotPath: './support/errorShots/',
    coloredLogs: true,
    framework: 'cucumber',          // cucumber framework specified 
    cucumberOpts: {
        requireModule: [
            // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
            'tsconfig-paths/register',
            () => {
                require('ts-node').register({ files: true });
            },
        ],
        backtrace: true,
        failFast: false,
        timeout: 5 * 60 * 60000,
        // tagExpression: '@testes', // <string> (expression) only execute the features or scenarios with tags matching the expression
        require: [
            './src/steps/app/app-treinamento/*.ts',
        ]      // importing/requiring step definition files
    },

    /**
     * hooks help us execute the repeatitive and common utilities 
     * of the project.
     */
    onPrepare: function () {
        console.log('<<< APP TESTS STARTED >>>');
    },

    afterScenario: function (scenario) {
        browser.screenshot();
    },

    onComplete: function () {
        console.log('<<< TESTING FINISHED >>>');
    }
};