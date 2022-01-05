const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "CubeFM",
    "logo": "https://i.imgur.com/NwepvK0.png",
    "id": "64e1740a-2d57-4cd8-a52b-b44610887f5d",
    "tagline": "Beat the moment.",
    "tags": [tags.pop, tags.community],
    "language": langs.where('1', 'nl'),
    "website": "https://cubefm.nl",
    "sources": [{
      "name": "Aqua",
      "url": "https://server.cubefm.nl/radio/8000/stream",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://server.cubefm.nl/api/nowplaying/1"
    }
  }
}
