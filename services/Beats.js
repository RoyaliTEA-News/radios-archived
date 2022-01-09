const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "Beats",
    "logo": "https://i.imgur.com/Q3d3BRy.jpg",
    "id": "41ed3b7d-d91c-475e-83e9-2ead7a62f39b",
    "tagline": "An online radio community that aims to provide the best online entertainment.",
    "tags": [tags.pop, tags.community],
    "language": langs.where('1', 'en'),
    "website": "https://itsbeats.net",
    "discord": "https://discord.gg/DRYFfSnn5b",
    "premid": "Beats",
    "sources": [{
      "name": "Beats",
      "url": "https://stream.itsbeats.net/radio.mp3",
      "default": true
    }],
    "api": {
      "type": "custom",
      "endpoint": "https://panel.itsbeats.net/api/stats",
      "presenter": "onAir.presenter.name",
      "song": "song.track",
      "artist": "song.artist",
      "listeners": "onAir.listeners.total"
    }
  }
}
