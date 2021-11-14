const tags = require('../tags'),
      langs = require('langs')

module.exports = () => {
  return {
    "name": "Livida",
    "aliases": [],
    "logo": "https://s3.livida.net/images/logo/CrownIcon.png",
    "id": "93bc9ec4-d0f8-4046-8574-8a54e0cb91a5",
    "tagline": "Playing the best hits, 24/7!",
    "tags": [tags.pop, tags.community],
    "language": langs.where('1', 'en'),
    "website": "https://livida.net",
    "discord": "https://discord.com/invite/6vRE5NJ",
    "sources": [{
      "name": "Livida",
      "url": "https://azuracast.livida.net/radio/8000/radio.mp3",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://azuracast.livida.net/api/nowplaying/1"
    }
  }
}
