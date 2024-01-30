// eslint-disable-next-line @typescript-eslint/no-var-requires
var reporter = require('cucumber-html-reporter');

var options = {
  jsonFile: 'reports/cucumber-html-reporter.ndjson',
  launchReport: true,
  noInlineScreenshots: false,
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  screenshotsDirectory: 'reports/screenshots/',
  storeScreenshots: true,
  theme: 'bootstrap',
  failedSummaryReport: true,
};

reporter.generate(options);
