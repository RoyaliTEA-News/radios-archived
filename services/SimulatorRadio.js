const tags = require('../tags'),
      langs = require('langs')

module.exports = () => {
  return {
    "name": "SimulatorRadio",
    "logo": "https://simulatorradio.com/avatars/placeholder.png",
    "id": "3eb3df1b-6ad7-440e-8858-d201c9a07390",
    "tagline": "Simulator Radio is a community based radio station for Simulator Games.",
    "tags": [tags.pop, tags.community, tags.gaming],
    "language": langs.where('1', 'en'),
    "website": "https://simulatorradio.com",
    "sources": [{
      "name": "SimulatorRadio",
      "url": "https://simulatorradio.stream/stream",
      "default": true
    }],
   "api": {
      "type": "custom",
      "endpoint": "https://apiv2.simulatorradio.com/metadata/combined",
      "presenter": "djs.now.displayname",
      "song": "now_playing.title",
      "artist": "now_playing.artist",
      "listeners": "listeners"
    }
  }
}
