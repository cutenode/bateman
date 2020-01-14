# bateman

bateman is an extension of npm cards, which allows you to remotely fetch a `card.json` file and display it prettily as a npm card.

## Usage

To use bateman with `npx`. The `<url>` **must** be a website HTTPS which has a file located at the path `<url>/card.json`.

```bash
npx bateman <url>
```

To install bateman globally, you can use the following command:

```bash
npm i -g bateman
```

Once installed globally, then you can use bateman to call a URL that has published a `card.json`. This URL **must** be HTTPS.

```bash
bateman <url>
```

## Publishing a `card.json`

bateman expects a `card.json` file. If you want to have your own card, you'll have to publish such a file on a website. Note that bateman is not particularly strict about where cards are published, but it is opinionated on _how_ they are published. Some details:

* Cards must be published to websites that use HTTPS.
* Card files must be called `card.json`.
* The fetched `card.json` file must return a 200 OK HTTP response.
  * tl;dr you can't mask your `card.json` with an HTTP redirect.

Here's the structure of a `card.json` file:

* `name` String (required) - Your name
* `handle` String (required) - Your preferred online handle
* `website` String (required) - Your website
* `pronouns` String (required) - Your pronouns
* `work` Object (optional) - An object that holds some metadata about your work
  * `title` String (optional) - Your title at your work
  * `company` String (optional) - The company you work at
* `code` Object (optional) - Some links that specifically refer to code-focused websites
  * `npm` String (optional) - Link to your account on npm
  * `github` String (optional) - Link to your account on GitHub
* `social` Object (optional) - Links to your social Media
  * `twitter` String (optional) - Link to your Twitter account
  * `instagram` String (optional) - Link to your Instagram account
  * `snapchat` String (optional) - Link to your Snapchat account
  * `facebook` String (optional) - Link to your Facebook account
  * `twitch` String (optional) - Link to your Twitch account
  * `tiktok` String (optional) - Link to your TikTok account
  * `tumblr` String (optional) - Link to your Tumblr account
  * `spotify` String (optional) - Link to your Sptofiy account
  * `youtube` String (optional) - Link to your YouTube account
  * `vimeo` String (optional) - Link to your Vimeo account
  * `linkedin` String (optional) - Link to your LinkedIn account
* `proofs` Object (optional) - Things that prove you're you
  * `keybase` String (optional) - Link to your Keybase account
* `support` Object (optional)
  * `patreon` String (option) - Link to your Patreon
  * `githubSponsors` String (option) - Link to your GitHub Sponsors page
  * `openCollective` String (option) - Link to an Open Collective

Here's a minimal example using only required properties:

```json
{
  "name": "Yours Truly",
  "handle": "yt",
  "website": "https://yt.blog",
  "pronouns": "she/her"
}
```

Here's an example of a completely filled out `card.json`:

```json
{
  "name": "Hiro Protagonist",
  "handle": "protagonist",
  "website": "https://hiro.protagonist.org",
  "pronouns": "he/him",
  "work": {
    "title": "Delivery Advocate",
    "company": "Mafia"
  },
  "code": {
    "npm": "https://npm.im/~protagonist",
    "github": "https://github.com/protagonist"
  },
  "social": {
    "twitter": "https://twitter.com/protagonist",
    "instagram": "https://instagram.com/protagonist",
    "snapchat": "https://snapchat.com/add/protagonist",
    "facebook": "https://facebook.com/protagonist",
    "twitch": "https://twitch.tv/protagonist",
    "tiktok": "https://tiktok.com/protagonist",
    "tumblr": "https://protagonist.tumblr.com",
    "spotify": "https://open.spotify.com/user/01101000011100100110100101101111",
    "youtube": "https://youtube.com/protagonist",
    "vimeo": "https://vimeo.com/protagonist",
    "linkedin": "https://linkedin.com/in/protagonist/"
  },
  "proofs": {
    "keybase": "https://keybase.io/protagonist"
  },
  "support": {
    "patreon": "https://patreon.com/protagonist",
    "githubSponsors": "https://github.com/sponsors/protagonist",
    "openCollective": "https://opencollective.com/protagonist"
  }
}
```

## Contributing

### Adding New Properties

The current schema is by no means "complete". I'm sure there are a bunch of things that could be added that are relevant to folks outside of the spaces I participate in, or tweaks that could be made to imrpove the existing schema.

If you'd like to contribute an addition, by all means please do. Here's a quick list of things you'll need to do:

* update `helpers/fetch.js` with the appropriate changes
* update `helpers/output.js` with the appropriate changes
* update `README.md`
  * update `Publishing a card.json file` section
  * update examples
* update the relevant card.json files in `tests/cards/`

## Contributing Enhancements

Enhancements to the codebase are more than welcome. Adding features would be awesome, as would enhancements to the codebase. If you're looking to add some features, here's some ideas:

* `card.json` generator tool, similar to `npm init`. Perhaps `bateman create`.
* `card.json` validator tool to ensure that a card is valid. This should both accept local paths and remote files. Perhaps it could be `bateman validate`.
