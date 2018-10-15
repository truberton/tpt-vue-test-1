module.exports = {
  'default e2e tests': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .click('a[href="#/about"]')
      .pause(5000)
      .assert.containsText('h1', 'See on about page')
      .end();
  },
};
