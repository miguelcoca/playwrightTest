const common = `
  --require-module ts-node/register
  --require features/**/*.ts
  --format json:reports/report.json 
  --format json:reports/cucumber-html-reporter.ndjson
  --format message:reports/report.ndjson
  --format theme: 'bootstrap',
  --format html:reports/report.html
  --format summary 
  --format progress-bar 
  --format @cucumber/pretty-formatter
  --format-options ${JSON.stringify({ snippetInterface: 'async-await' })}
  --publish-quiet
  `;

const getWorldParams = () => {
  const params = {
    foo: 'bar',
  };

  return `--world-parameters ${JSON.stringify({ params })}`;
};

module.exports = {
  default: `${common} ${getWorldParams()}`,
};
