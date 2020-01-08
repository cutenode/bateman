const fetch = require('../helpers/fetch')

describe('test the fetch internal helper for all optional properties', () => {
  test('reach out to a raw gist file and get a response with every possible property back', async function () {
    const url = 'gist.githubusercontent.com/bnb/6ec034302202c3163417b063771326b3/raw'
    const actual = await fetch(`https://${url}/card.json`)

    expect(actual).toEqual(
      {
        name: 'Hiro Protagonist',
        handle: 'protagonist',
        website: 'https://hiro.protagonist.org',
        pronouns: 'he/him',
        work: { title: 'Delivery Advocate', company: 'Mafia' },
        code: {
          npm: 'https://npm.im/~protagonist',
          github: 'https://github.com/protagonist'
        },
        proofs: { keybase: 'https://keybase.io/protagonist' },
        social: {
          twitter: 'https://twitter.com/protagonist',
          instagram: 'https://instagram.com/protagonist',
          snapchat: 'https://snapchat.com/add/protagonist',
          facebook: 'https://facebook.com/protagonist',
          twitch: 'https://twitch.tv/protagonist',
          tiktok: 'https://tiktok.com/protagonist',
          tumblr: 'https://protagonist.tumblr.com',
          spotify: 'https://open.spotify.com/user/01101000011100100110100101101111',
          youtube: 'https://youtube.com/protagonist',
          vimeo: 'https://vimeo.com/protagonist',
          linkedin: 'https://linkedin.com/in/protagonist/'
        },
        support: {
          patreon: 'https://patreon.com/protagonist',
          githubSponsors: 'https://github.com/sponsors/protagonist',
          openCollective: 'https://opencollective.com/protagonist'
        }
      }
    )
  })

  test('test the fetch internal helper excluding all optional properties', async function () {
    const url = 'gist.githubusercontent.com/bnb/c101598222bba713eddab653f25e3b38/raw'
    const actual = await fetch(`https://${url}/card.json`)

    expect(actual).toEqual(
      {
        name: 'Yours Truly',
        handle: 'yt',
        website: 'https://yt.blog',
        pronouns: 'she/her'
      }
    )
  })
})
