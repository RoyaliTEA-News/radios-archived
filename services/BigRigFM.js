const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "BigRigFM",
    "logo": "https://i.imgur.com/8ymvoxd.jpg",
    "aliases": ["BigRig FM", "BRFM"],
    "id": "1d7ede50-baef-4dc2-a9d0-7d86c66ce719",
    "tagline": "Radio made for driving!",
    "tags": [tags.simulation, tags.community, tags.pop, tags.gaming],
    "language": langs.where('1', 'en'),
    "website": "https://bigrig.fm",
    "discord": "https://discord.gg/truckersfm",
    "sources": [{
      "name": "BigRigFM",
      "url": "https://radio.bigrig.fm/",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://azura.truckers.fm/api/nowplaying/3"
    }
  }
}
