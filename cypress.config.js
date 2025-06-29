const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: "fgmkji",
  e2e: {
    baseUrl: 'https://nextocasino.com', //baseUrl
    //viewportHeight:900,
    //viewportWidth:1440,
    specPattern: [
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    ],
    defaultCommandTimeout: 120000, // Sets a higher timeout for commands
    chromeWebSecurity: false, // Allows testing cross-origin iframes
    setupNodeEvents(on, config) {
      allureWriter(on, config);
    },
  },
});
