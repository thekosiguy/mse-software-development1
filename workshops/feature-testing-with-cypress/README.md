# Feature Testing with Cypress

### Learning Objectives
- Explain how Cypress helps feature test front-end applications
- Use Cypress to help test-drive front-end applications

### Quick start
```sh
$ npm install
$ npx serve .
# then point your browser to http://localhost:5000
```

### To run tests

#### Jasmine Browser tests
Make sure you've installed `chromedriver`
```sh
# from the root of your project directory
$ npx jasmine-browser-runner serve
# then point your browser to http://localhost:8888
```

#### Cypress tests
Run your application using `serve` so that Cypress can test it.
```sh
# from the root of your project directory
$ npx serve .
```
Run cypress.
```sh
# from the root of your project directory
$ npx cypress open
```

### Instructions
1. Install the dependencies
2. Run the Cypress tests
3. Make the first Cypress test pass by updating the assertion and adding an element to your html file to make it pass
4. Make the second Cypress test pass.

### Futher work
Test-drive adding a feature where a user clicks a second button to decrease the temperature by 1
- diagram a quick model of the interaction
- write a failing cypress test
- write a failing jasmine test
- pass them both!

### Resources
- [Installing Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
- [Jasmine Browser specs](https://jasmine.github.io/setup/browser.html)
- [Cypress commands](https://docs.cypress.io/api/table-of-contents)
- [Event Listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
