const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "TruckersFM",
    "logo": "https://i.imgur.com/AXcYBF8.png",
    "aliases": ["Truckers FM", "TFM"],
    "id": "6a6079a1-198f-49b5-a989-cc1d011df4a9",
    "tagline": "TruckersFM is a community radio station that is dedicated to the Truck Sim Community!",
    "tags": [tags.simulation, tags.community, tags.pop, tags.gaming],
    "language": langs.where('1', 'en'),
    "website": "https://truckers.fm",
    "discord": "https://discord.gg/truckersfm",
    "premid": "TruckersFM",
    "sources": [{
      "name": "TruckersFM",
      "url": "https://live.truckers.fm",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://azura.truckers.fm/api/nowplaying/1"
    }
  }
}
