/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'allure-jest/node',

  testEnvironmentOptions: {
    resultsDir: 'reports/allure-results',
  },

  transformIgnorePatterns: ['/node_modules/(?!@faker-js)/'],

  reporters: [
    //['github-actions', { silent: false }],
     'summary',
    'default',
    ['jest-html-reporters' , 
    {
    publicPath : './reports/html-report' ,
    filename : 'index.html' ,
    openReport : true //!process.env.CI
    }]

   
  ],
};