const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "Beats",
    "logo": "https://panel.itsbeats.net/avatars/defaultV1.jpg",
    "id": "5f9004f0-c833-4849-bdce-1e23e010256b",
    "tagline": "An online radio community that aims to provide the best online entertainment.",
    "tags": [tags.pop, tags.community],
    "language": langs.where('1', 'en'),
    "website": "https://itsbeats.net",
    "discord": "https://discord.gg/DRYFfSnn5b",
    "premid": "Beats",
    "sources": [{
      "name": "Beats",
      "url": "https://radio.beats.xonos.gg/radio/8000/radio.mp3",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://radio.beats.xonos.gg/api/nowplaying/1"
    }
  }
}
