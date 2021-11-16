const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "Beats",
    "logo": "https://i.imgur.com/Q3d3BRy.jpg",
    "id": "5f9004f0-c833-4849-bdce-1e23e010256b",
    "tagline": "An online radio community that aims to provide the best online entertainment.",
    "tags": [tags.pop, tags.community],
    "language": langs.where('1', 'en'),
    "website": "https://itsbeats.net",
    "discord": "https://discord.gg/DRYFfSnn5b",
    "premid": "Beats",
    "sources": [{
      "name": "Beats",
      "url": "https://radio.ea1.xyz/radio/8000/radio.mp3",
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
