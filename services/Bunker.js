const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "Bunker",
    "aliases": [],
    "logo": "https://i.imgur.com/BZlRjxb.jpg",
    "id": "6886b2c8-3f11-4e17-a116-e9b008f7fe19",
    "tagline": "Your #1 dance and electronic music station, Bunker.",
    "tags": [tags.pop, tags.community],
    "language": langs.where('1', 'en'),
    "website": "https://bunker.dance/",
    "discord": "https://discord.gg/7egN2ZU5jD",
    "sources": [{
      "name": "Bunker",
      "url": "https://radio.bunker.dance/radio/8000/128.mp3",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://radio.bunker.dance/api/nowplaying/1"
    }
  }
}
