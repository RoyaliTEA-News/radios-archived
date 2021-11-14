const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "BladeFM",
    "logo": "https://bladefm.com.au/images/logo.png",
    "aliases": ["Blade FM", "blade", "bfm"],
    "id": "fc12805a-05b8-4313-b0e3-807a6d7068a6",
    "tagline": "Playing the top hits and throwbacks 24/7 in Adelaide!",
    "tags": [tags.pop, tags.community],
    "language": langs.where('1', 'en'),
    "website": "https://bladefm.com.au/",
    "premid": "BladeFM",
    "sources": [{
      "name": "BladeFM",
      "url": "https://cast.bladefm.com.au:8000/radio.mp3",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://cast.bladefm.com.au/api/nowplaying/1"
    }
  }
}
