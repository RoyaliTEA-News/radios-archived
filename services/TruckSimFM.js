const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "TruckSimFM",
    "aliases": [],
    "logo": "https://i.imgur.com/ckM6zPB.jpg",
    "id": "930687c4-9275-4697-a8cf-1aeaa72477ba",
    "tagline": "The Beat Of Simulation.",
    "tags": [tags.pop, tags.community, tags.simulation],
    "language": langs.where('1', 'en'),
    "website": "https://trucksim.fm/",
    "discord": "https://discord.com/invite/zcmN8cF",
    "sources": [{
      "name": "TruckSimFM",
      "url": "https://live.trucksim.fm/",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://radio.trucksim.fm/api/nowplaying/1"
    }
  }
}
