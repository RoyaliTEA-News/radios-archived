const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "InsideFM",
    "logo": "https://insidefm.cl/images/branding/favicon.png",
    "id": "58a18dce-b062-4c85-9f81-9d485242d28f",
    "tagline": "Activate con la Música!",
    "tags": [tags.pop, tags.news],
    "language": langs.where('1', 'es'),
    "website": "https://insidefm.cl",
    "sources": [
      {
        "name": "64kbps AAC+",
        "url": "https://zeus.miradio.pro/radio/8110/low",
        "bitrate": 64
      },
      {
        "name": "128kbps AAC+",
        "url": "https://zeus.miradio.pro/radio/8110/medium",
        "bitrate": 128,
        "default": true
      },
      {
        "name": "320kbps AAC+",
        "url": "https://zeus.miradio.pro/radio/8110/high",
        "bitrate": 320
      }
    ],
    "api": {
      "type": "azuracast",
      "endpoint": "https://zeus.miradio.pro/api/nowplaying/insidefm"
    }
  }
}
