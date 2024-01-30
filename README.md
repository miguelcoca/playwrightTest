# Partner Portal playwright - cucumberjs POC

Partner Portal Automation POC.

## Intall NodeJS

```
https://nodejs.org/dist/v21.6.0/node-v21.6.0-x64.msi
```

## Install Yarn

```
mike@mike-HP-Pavilion:~/cucumber-playwright$ npm install -g yarn
```

## Download and Intall Visual Studio Code

```
https://code.visualstudio.com/Download#
```

## Install project & dependencies

Unzip code to a folder and change directory to that folder
From VS Code open folder and in terminal console esecute the following recomend use yarn

```
mike@mike-HP-Pavilion:~/cucumber-playwright$ npm install
mike@mike-HP-Pavilion:~/cucumber-playwright$ yarn install
```

## manual install playwright.

```
mike@mike-HP-Pavilion:~/cucumber-playwright$ npx playwright install
```

## Run Tests

```
mike@mike-HP-Pavilion:~/cucumber-playwright$ yarn test
mike@mike-HP-Pavilion:~/cucumber-playwright$ .\node_modules\.bin\cucumber-js .\features\*.feature
```

```
mike@mike-HP-Pavilion:~/cucumber-playwright$ npm run test
mike@mike-HP-Pavilion:~/cucumber-playwright$ ./node_modules/.bin/cucumber-js features/PartnerPortalLogin.feature
```

## Cucumber HTML Report

after running tests. generate HTML Report Using cucumber HTML report

```
mike@mike-HP-Pavilion:~/cucumber-playwright$ yarn html-report
mike@mike-HP-Pavilion:~/cucumber-playwright$ node .\cucumber.report.js
```

## Playwright CodeGen Code Generator.

While developing test code generator is able to generate code to get page elements and actions.

```
mike@mike-HP-Pavilion:~/cucumber-playwright$ npx playwright codegen https://playwright.dev/
```
