const chalk = require('chalk')

/**
 * Possible output styles:
 * - error
 * - success
 * - warning
*/

function logger (textString, outputStyle) {
  if (outputStyle === 'error') {
    return chalk.red(textString)
  }

  if (outputStyle === 'success') {
    return chalk.green(textString)
  }

  if (outputStyle === 'warning') {
    return chalk.yellow(textString)
  }

  return textString
}

module.exports = logger
