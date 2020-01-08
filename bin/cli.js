#!/usr/bin/env node

const cli = require('commander')
const boxen = require('boxen')
const normalize = require('normalize-url')
const logger = require('../helpers/logger')
const fetch = require('../helpers/fetch')
const output = require('../helpers/output')

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const normalizeOptions = {
  defaultProtocol: 'https:',
  stripHash: true
}

cli
  .version('1.0.0')
  .arguments('<url>')
  .action(async function (url) {
    const normalizedURL = `${normalize(url, normalizeOptions)}/card.json`
    const data = await fetch(normalizedURL)

    console.log(boxen(output(data, url), boxenOptions))
  })

cli.parse(process.argv)
