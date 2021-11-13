const tags = require('../tags'),
      langs = require('langs')

module.exports = () => {
  return {
    "name": "FreshBeatRadio",
    "logo": "https://freshbeatradio.uk/images/logo.png",
    "id": "f3540611-0f7c-4f99-a3ec-e6775d87c030",
    "tagline": "An online radio community that plays a huge variety of the freshest & best hits.",
    "tags": [tags.pop, tags.community],
    "language": langs.where('1', 'en'),
    "website": "https://freshbeatradio.uk",
    "discord": "https://discord.gg/a8MwntR4dN",
    "sources": [{
      "name": "FreshBeatRadio",
      "url": "https://sc.freshbeatradio.uk/radio/8000/radio.mp3",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://sc.freshbeatradio.uk/api/nowplaying/1"
    }
  }
}
