var resumeJson = require('./resume/resume.json');

module.exports = {
    plugins: [
      {
        resolve: 'gatsby-theme-jsonresume',
        options: {
          theme: 'orbit',
          resumeJson: resumeJson
        }
      },
    ],
  }