const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "Rave",
    "logo": "https://i.imgur.com/CnyLtHG.png",
    "aliases": ["itsrave"],
    "id": "681c4c91-70a0-43a9-b36b-1af4b0b639a6",
    "tagline": "Playing the best tunes, 24/7!",
    "tags": [tags.community, tags.pop],
    "language": langs.where('1', 'en'),
    "website": "https://itsrave.net/",
    "discord": "https://discord.gg/8ajMC4tmmY",
    "sources": [{
      "name": "Rave",
      "url": "https://azuracast.itsrave.net/radio/8000/radio.mp3",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://azuracast.itsrave.net/api/nowplaying/1"
    }
  }
}
