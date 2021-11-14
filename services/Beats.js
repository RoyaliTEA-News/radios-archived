const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "Beats",
    "logo": "https://panel.itsbeats.net/avatars/defaultV1.jpg",
    "id": "92d2483f-a99f-44ec-873e-214ac915aebe",
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
      "type": "custom",
      "endpoint": "https://panel.itsbeats.net/api/stats",
      "presenter": "onAir.presenter.name",
      "song": "song.track",
      "artist": "song.artist",
      "listeners": "onAir.listeners.total"
    }
  }
}
