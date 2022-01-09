const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "CubeFM",
    "logo": "https://i.imgur.com/NwepvK0.png",
    "id": "c4b8d973-a926-412c-84cd-9c91641c8886",
    "tagline": "Beat the moment",
    "tags": [tags.pop, tags.community],
    "language": langs.where('1', 'en'),
    "website": "https://cubefm.nl",
    "sources": [{
      "name": "320kbps MP3",
      "url": "https://server.cubefm.nl/radio/8000/stream",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://server.cubefm.nl/api/nowplaying/1"
    }
  }
}
