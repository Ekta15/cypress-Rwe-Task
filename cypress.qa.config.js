const baseConfig = require('./cypress.config');

module.exports = {
  ...baseConfig,
  env: {
    ...baseConfig.env,
    URL:"https://the-internet.herokuapp.com",
    ENVIRONMENT:"qa",
    USERNAME:"tomsmith",
    PASSWORD:"SuperSecretPassword!",
    EMAIL_ID:"sample@test.com"
  }
};