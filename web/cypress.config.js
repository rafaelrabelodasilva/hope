const { defineConfig } = require("cypress");
const { configurePlugin } = require("cypress-mongodb");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configurePlugin(on);
    },
    env: {
      mongodb: {
        uri: 'mongodb+srv://qax:xperience@cluster0.4awwpz2.mongodb.net/HopeDB?retryWrites=true&w=majority',
        database: 'HopeDB'
      }
    }
  },
});
