
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "MPL 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD 3") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "IPL-1.0") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  }

}
  
function generateMarkdown(answers) {
  return `
  
  # ${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Description

  ${answers.description}

  ## Table of Contents

- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contribution)
- [Tests](#tests)
- [License](#license)
- [Github](#github)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing
${answers.contribution}

## Tests

${answers.tests}

## License

${answers.license}

## Github

${answers.github}

## Email

${answers.email}

## Questions

If you have any questions please reach out to me at ${answers.questions}

`;
}

module.exports = generateMarkdown;
