const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "Simulator Radio",
    "logo": "https://i.imgur.com/Ujzxs2W.png",
    "aliases": ["SimulatorRadio", "sr"],
    "id": "3eb3df1b-6ad7-440e-8858-d201c9a07390",
    "tagline": "Simulator Radio is a community based radio station for Simulator Games.",
    "tags": [tags.simulation, tags.gaming, tags.pop, tags.community],
    "language": langs.where('1', 'en'),
    "website": "https://simulatorradio.com",
    "discord": "https://discord.gg/E27Ehfn",
    "premid": "Simulator Radio",
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
      "artist": "now_playing.artists",
      "listeners": "listeners"
    }
  }
}
