// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#Title: ${data.title}

  #Description: ${data.description}

  # Tables of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)

  #Github username: ${data.github}

  #Version: ${data.version}

  #Release Date: ${data.releaseDate}

  #Author Email: ${data.email}

  #License: ${data.lic}

  #Contribute: ${data.contribute}

  #Tests: ${data.test}

  #Question: ${data.question}
  `;

}

module.exports = generateMarkdown;
