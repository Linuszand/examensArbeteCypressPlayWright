const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const mochawesome = require('cypress-mochawesome-reporter/plugin');

const baseUrl = "https://www.google.se/";

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)]
    })
  );

  // Integrate the mochawesome plugin
  mochawesome(on);

  return config;
}

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 15000,
    baseUrl,
    supportFile: false,
    specPattern: "**/*.feature",
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/reports/screenshots',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      embeddedScreenshots: true, // Option to embed screenshots in the report
      ignoreVideos: false, // Include videos in the report
      videoOnFailOnly: false, // Attach videos only to failed tests
      quiet: false, // Show console messages
      saveAllAttempts: true, // Save screenshots of all attempts
      debug: false, // Do not create a debug log file
      saveJson: true // Save the JSON file used to create the HTML report
    },
    setupNodeEvents
  }
});
