const tags = require('../tags'),
      langs = require('langs')

module.exports = () => {
  return {
    "name": "Beats",
    "logo": "https://panel.itsbeats.net/avatars/defaultV1.jpg",
    "id": "5f9004f0-c833-4849-bdce-1e23e010256b",
    "tagline": "Beats is an online radio community that aims to provide the best online entertainment.",
    "tags": [tags.pop, tags.gaming, tags.community, tags.news],
    "language": langs.where('1', 'en'),
    "website": "https://itsbeats.net",
    "sources": [{
      "name": "Beats",
      "url": "https://radio.beats.xonos.gg/radio/8000/radio.mp3",
      "default": true
    }],
    "api": {
      "type": "custom",
      "endpoint": "https://upbeatradio.net/api/v1/stats",
      "presenter": "presenter.name",
      "song": "stats.song.title",
      "artist": "stats.song.artist",
      "listeners": "stats.song.listeners"
    }
  }
}
