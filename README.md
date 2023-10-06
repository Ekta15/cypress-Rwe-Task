# cypress-Rwe-Task


Project Overview 📝
Welcome to the Cypress-Mocha project! This is a robust testing framework designed to simplify the process of creating, managing, and running your end-to-end (E2E) tests for web applications.

Built using the popular JavaScript testing libraries Cypress and Mocha, this project serves as a powerful tool for developers seeking a streamlined and intuitive testing environment. Whether you're implementing a handful of basic tests or managing a suite of complex testing scenarios, Cypress-Mocha has you covered.


Preparing for Takeoff 
Ensure you have the following installed for the best user experience:

NPM - version 8+
Node - version 16+
(Note: Node installation from the provided link also installs NPM.)

To confirm you have the correct versions, type these commands into your terminal:

npm --version
node --version
IDE Installation: Visual Studio code / VS code Extensions suggested for optimal Cypress usage: https://docs.cypress.io/guides/tooling/IDE-integration#Visual-Studio-Code Extensions for icon theme: https://marketplace.visualstudio.com/search?term=icon&target=VSCode&category=All%20categories&sortBy=Relevance

First Steps 👣
Clone: https://github.com/Ekta15/cypress-Rwe-Task.git
Open the project in your favorite editor.
Launch a Terminal in your editor (usually found in the bottom right corner).
Install necessary dependencies by running:
npm install --save-dev
Verify your Cypress installation by launching the Test Runner:
npx cypress open
If all went well, the Test Runner should appear. Here you can select the feature to execute and the browser to use.

In the test runner, select the feature to execute and the desired browser from the dropdown and visualize the test execution

Running Tests 🧪
To run the tests via CLI on a headless mode

npx cypress run --reporter mochawesome --config-file cypress.qa.config.js



