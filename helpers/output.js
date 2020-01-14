const chalk = require('chalk')

const labels = {
  pronouns: chalk.white.bold('Pronouns:'),
  website: chalk.white.bold('Website:'),
  work: chalk.white.bold('Work:'),
  twitter: chalk.white.bold('Twitter:'),
  instagram: chalk.white.bold('Instagram:'),
  snapchat: chalk.white.bold('Snapchat:'),
  facebook: chalk.white.bold('Facebook:'),
  twitch: chalk.white.bold('Twitch:'),
  keybase: chalk.white.bold('Keybase:'),
  tiktok: chalk.white.bold('TikTok:'),
  tumblr: chalk.white.bold('Tumblr:'),
  spotify: chalk.white.bold('Spotify:'),
  youtube: chalk.white.bold('Youtube:'),
  vimeo: chalk.white.bold('Vimeo:'),
  npm: chalk.white.bold('npm:'),
  github: chalk.white.bold('GitHub:'),
  linkedin: chalk.white.bold('LinkedIn:'),
  patreon: chalk.white.bold('Patreon:'),
  githubSponsors: chalk.white.bold('GitHub Sponsors:'),
  openCollective: chalk.white.bold('OpenCollective:'),
  card: chalk.white.bold('Card:'),
  headings: {
    work: chalk.green('# Work'),
    code: chalk.green('# Code'),
    proofs: chalk.green('# Proofs'),
    social: chalk.green('# Social'),
    support: chalk.green('# Support')
  }
}

function outputBuilder (data, fetchedURL) { // data is an object
  const strings = {
    newline: '\n',
    heading: `                 ${data.name} / ${data.handle}`,
    website: `${labels.website}         ${data.website}`,
    pronouns: `${labels.pronouns}        ${data.pronouns}`
  }

  let output = strings.heading +
               strings.newline + strings.newline +
               strings.website + strings.newline +
               strings.pronouns + strings.newline

  // implement work

  // one very speific note: for each output line that shares a link, the data.{x}.{x} needs to start on column 61 to be properly aligned. This column number can be determined by adding the boxen padding/margin/line + the length of the longest label + a colon + a space.
  if (data.work !== undefined) {
    if (data.work.title && data.work.company) {
      output = output.concat('', `${labels.work}            ${data.work.title} at ${data.work.company}${strings.newline}`)
    }

    if (data.work.title && data.work.company === undefined) {
      output = output.concat('', `${labels.work}            ${data.work.title}${strings.newline}`)
    }

    if (data.work.title === undefined && data.work.company) {
      output = output.concat('', `${labels.work}            ${data.work.title}${strings.newline}`)
    }
  }

  // implement proofs

  if (data.proofs !== undefined) {
    output = output.concat('', `${strings.newline}${labels.headings.proofs}${strings.newline}`)

    if (data.proofs.keybase) {
      output = output.concat('', `${labels.keybase}         ${data.proofs.keybase}${strings.newline}`)
    }
  }

  // implement code

  if (data.code !== undefined) {
    output = output.concat('', `${strings.newline}${labels.headings.code}${strings.newline}`)

    if (data.code.npm) {
      output = output.concat('', `${labels.npm}             ${data.code.npm}${strings.newline}`)
    }

    if (data.code.github) {
      output = output.concat('', `${labels.github}          ${data.code.github}${strings.newline}`)
    }
  }

  // implement social

  if (data.social !== undefined) {
    output = output.concat('', `${strings.newline}${labels.headings.social}${strings.newline}`)

    if (data.social.twitter) {
      output = output.concat('', `${labels.twitter}         ${data.social.twitter}${strings.newline}`)
    }

    if (data.social.instagram) {
      output = output.concat('', `${labels.instagram}       ${data.social.instagram}${strings.newline}`)
    }

    if (data.social.snapchat) {
      output = output.concat('', `${labels.snapchat}        ${data.social.snapchat}${strings.newline}`)
    }

    if (data.social.facebook) {
      output = output.concat('', `${labels.facebook}        ${data.social.facebook}${strings.newline}`)
    }

    if (data.social.twitch) {
      output = output.concat('', `${labels.twitch}          ${data.social.twitch}${strings.newline}`)
    }

    if (data.social.tiktok) {
      output = output.concat('', `${labels.tiktok}          ${data.social.tiktok}${strings.newline}`)
    }

    if (data.social.tumblr) {
      output = output.concat('', `${labels.tumblr}          ${data.social.tumblr}${strings.newline}`)
    }

    if (data.social.spotify) {
      output = output.concat('', `${labels.spotify}         ${data.social.spotify}${strings.newline}`)
    }

    if (data.social.youtube) {
      output = output.concat('', `${labels.youtube}         ${data.social.youtube}${strings.newline}`)
    }

    if (data.social.vimeo) {
      output = output.concat('', `${labels.vimeo}           ${data.social.vimeo}${strings.newline}`)
    }

    if (data.social.linkedin) {
      output = output.concat('', `${labels.linkedin}        ${data.social.linkedin}${strings.newline}`)
    }
  }

  if (data.support !== undefined) {
    output = output.concat('', `${strings.newline}${labels.headings.support}${strings.newline}`)

    if (data.support.patreon) {
      output = output.concat('', `${labels.patreon}         ${data.support.patreon}${strings.newline}`)
    }

    if (data.support.githubSponsors) {
      output = output.concat('', `${labels.githubSponsors} ${data.support.githubSponsors}${strings.newline}`)
    }

    if (data.support.openCollective) {
      output = output.concat('', `${labels.openCollective}  ${data.support.openCollective}${strings.newline}`)
    }
  }

  // add a newline at the beginining so this section (which shows you the command to re-run to get the same card) is always set off
  output = output.concat('', `${strings.newline}${labels.card}            bateman ${fetchedURL}`)

  return output
}

module.exports = outputBuilder
