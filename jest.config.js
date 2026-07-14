/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'allure-jest/node',

  testEnvironmentOptions: {
    resultsDir: 'reports/allure-results',
  },

  transformIgnorePatterns: ['/node_modules/(?!@faker-js)/'],

  reporters: [
    ['github-actions', { silent: false }],
    'default',
    'summary',
  ],
};