const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "Fresh",
    "aliases": ["fresh", "freshradio", "fr"],
    "logo": "https://freshradio.pw/images/FRESH%20NEW.png",
    "id": "13d4a520-3329-4afb-9292-c9356c67b7cf",
    "tagline": "Fresh is a thriving internet station playing the latest and greatest hits.",
    "tags": [tags.pop, tags.community],
    "language": langs.where('1', 'en'),
    "website": "https://freshradio.pw/",
    "discord": "https://discord.gg/3BsaDyArsf",
    "sources": [{
      "name": "Fresh",
      "url": "https://live.freshradio.pw",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://azura.g3v.co/api/nowplaying/8"
    }
  }
}
