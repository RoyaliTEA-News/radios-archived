const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "FarmFM",
    "logo": "https://i.imgur.com/oRL8G9l.png",
    "aliases": ["Farm FM", "farm", "ffm"],
    "id": "8d9c829f-1206-490e-a07f-dfd9fff0f6fd",
    "tagline": "Playing the latest hits, 24/7!",
    "tags": [tags.pop, tags.community, tags.simulation, tags.gaming],
    "language": langs.where('1', 'en'),
    "website": "https://farm-fm.com/",
    "discord": "https://discord.gg/NRDPgvcSfE",
    "sources": [{
      "name": "FarmFM",
      "url": "https://azura.farm-fm.com/radio/8000/radio.mp3",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://azura.farm-fm.com/api/nowplaying/1"
    }
  }
}
