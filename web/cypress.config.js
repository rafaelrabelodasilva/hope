require('dotenv').config()

const { defineConfig } = require("cypress");
const { configurePlugin } = require('cypress-mongodb');

//Não é possível usar import from neste arquivo então alteramos para const e = require ()
const { configureAllureAdapterPlugins } = require ('@mmisty/cypress-allure-adapter/plugins')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      configurePlugin(on);

      return config;
    },
    //Diz pro Cypress onde ele deve pegar o primeiro teste e os posteriores. Os ** é para ele pegar as subpastas
    specPattern: [
      './cypress/support/hooks/index.cy.js',
      './cypress/e2e/**'
    ],
    baseUrl: process.env.BASE_URL,
    env: {
      allure: true,
      baseApi: process.env.BASE_API,
      mongodb: {
        uri: process.env.MONGO_URI,
        database: process.env.DATABASE_NAME
      }
    }
  }
});