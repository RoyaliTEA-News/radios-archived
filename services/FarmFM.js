const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "FarmFM",
    "logo": "https://cdn.discordapp.com/icons/829851298198716457/458bd39242ba908978d573f2504deec6.webp?size=512",
    "aliases": ["Farm FM", "farm", "ffm"],
    "id": "8d9c829f-1206-490e-a07f-dfd9fff0f6fd",
    "tagline": "Playing the top hits and throwbacks 24/7 in Adelaide!",
    "tags": [tags.pop, tags.community, tags.simulation, tags.gaming],
    "language": langs.where('1', 'en'),
    "website": "https://farm-fm.com/",
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
