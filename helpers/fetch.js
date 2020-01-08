
const bent = require('bent')

const getJSON = bent('json')

/**
 * Expected data from URL
 *
 * Required:
 * - name
 * - handle
 * - website
 * - pronouns
 *
 * Optional:
 * - work
 *   - title
 *   - company
 * - code
 *   - npm
 *   - github
 * - proofs
 *   - keybase
 * - social
 *   - twitter
 *   - instagram
 *   - snapchat
 *   - facebook
 *   - twitch
 *   - tiktok
 *   - tumblr
 *   - spotify
 *   - youtube
 *   - vimeo
 *   - linkedin
 * - support
 *   - patreon
 *   - githubSponsors
 *   - openCollective
 *
 */
async function fetchData (url) {
  const data = await getJSON(url)

  // required data

  const sanitizedData = {
    name: data.name,
    handle: data.handle,
    website: data.website,
    pronouns: data.pronouns
  }

  // implement work
  if (data.work !== undefined) {
    sanitizedData.work = {}

    if (data.work.title) {
      sanitizedData.work.title = data.work.title
    }

    if (data.work.company) {
      sanitizedData.work.company = data.work.company
    }
  }

  // implement code
  if (data.code !== undefined) {
    sanitizedData.code = {}

    if (data.code.npm) {
      sanitizedData.code.npm = data.code.npm
    }

    if (data.code.github) {
      sanitizedData.code.github = data.code.github
    }
  }

  // implement proofs
  if (data.proofs !== undefined) {
    sanitizedData.proofs = {}

    if (data.proofs.keybase) {
      sanitizedData.proofs.keybase = data.proofs.keybase
    }
  }

  // implement social

  if (data.social !== undefined) {
    sanitizedData.social = {}

    if (data.social.twitter) {
      sanitizedData.social.twitter = data.social.twitter
    }

    if (data.social.instagram) {
      sanitizedData.social.instagram = data.social.instagram
    }

    if (data.social.snapchat) {
      sanitizedData.social.snapchat = data.social.snapchat
    }

    if (data.social.facebook) {
      sanitizedData.social.facebook = data.social.facebook
    }

    if (data.social.twitch) {
      sanitizedData.social.twitch = data.social.twitch
    }

    if (data.social.tiktok) {
      sanitizedData.social.tiktok = data.social.tiktok
    }

    if (data.social.tumblr) {
      sanitizedData.social.tumblr = data.social.tumblr
    }

    if (data.social.spotify) {
      sanitizedData.social.spotify = data.social.spotify
    }

    if (data.social.youtube) {
      sanitizedData.social.youtube = data.social.youtube
    }

    if (data.social.vimeo) {
      sanitizedData.social.vimeo = data.social.vimeo
    }

    if (data.social.linkedin) {
      sanitizedData.social.linkedin = data.social.linkedin
    }
  }

  // implement support
  if (data.support !== undefined) {
    sanitizedData.support = {}

    if (data.support.patreon) {
      sanitizedData.support.patreon = data.support.patreon
    }

    if (data.support.githubSponsors) {
      sanitizedData.support.githubSponsors = data.support.githubSponsors
    }

    if (data.support.openCollective) {
      sanitizedData.support.openCollective = data.support.openCollective
    }
  }

  return sanitizedData
}

module.exports = fetchData
