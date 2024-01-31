// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-$(license)-purple.svg)`;
  }
  return " ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== "none") {
  return `\n* [License](#license)\n`;
}
return " ";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    
    Licensed under the ${license} license`
  }
  return " ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Usage](#usage)
* [Installation](#installation)
* [Contributors](#contributing)
* [Tests](#tests)
${renderLicenseLink(data.license)}
* [Contact](#contact)

## Description

${data.description}

## Usage

\`\`\`
${data.usage}
\`\`\`

## Installation

${data.installation}

## Contributors

${data.credit}

## Testing

\`\`\`
${data.test}
\`\`\`

${renderLicenseSection(data.license)}

## Contact

* Email - ${data.email}
* GitHub - [${data.owner}](https://github.com/${data.owner}/)
`;
}

module.exports = generateMarkdown;
