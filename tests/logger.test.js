const logger = require('../helpers/logger')
const chalk = require('chalk')

describe('test `logger` tooling', () => {
  test('test that success output works', () => {
    const message = 'testing a success!'
    const actual = logger((message), 'success')

    expect(actual).toEqual(chalk.green(message))
  })

  test('test that error output works', () => {
    const message = 'testing an error!'
    const actual = logger((message), 'error')

    expect(actual).toEqual(chalk.red(message))
  })

  test('test that warning output works', () => {
    const message = 'testing a warning!'
    const actual = logger((message), 'warning')

    expect(actual).toEqual(chalk.yellow(message))
  })

  test('test an output that doesn\'t exist and the return still works', () => {
    const message = 'testing an output that doesn\'t exist!'
    const actual = logger((message), 'somethingThatDoesntExist')

    expect(actual).toEqual(message)
  })
})
