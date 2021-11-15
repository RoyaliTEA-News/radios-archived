const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "Harmony",
    "aliases": ["hr"],
    "logo": "https://harmony.sirv.com/default.png",
    "id": "5b4a47f4-be40-45d9-b534-2fbd2dca388e",
    "tagline": "Your Music, Your Harmony.",
    "tags": [tags.pop, tags.community],
    "language": langs.where('1', 'en'),
    "website": "https://weareharmony.net",
    "discord": "https://discord.gg/mUMVCa5K38",
    "sources": [{
      "name": "Harmony",
      "url": "https://derrick.xonosho.st/radio/8000/radio.mp3",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://derrick.xonosho.st/api/nowplaying/1"
    }
  }
}
