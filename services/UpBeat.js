const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "UpBeat",
    "logo": "https://upbeatradio.net/staff/_assets/_avatarImages/default/default.png",
    "aliases": ["UpBeat Radio", "UpBeatRadio", "ub"],
    "id": "f738f1f9-6de8-4b03-9889-c5b795ff6c10",
    "tagline": "UpBeat is a community powered online radio, providing 24/7 ad-free radio entertainment.",
    "tags": [tags.pop, tags.gaming, tags.community, tags.news],
    "language": langs.where('1', 'en'),
    "website": "https://upbeatradio.net",
    "discord": "https://discord.gg/tyc7qtm",
    "premid": "UpBeatRadio",
    "sources": [{
      "name": "UpBeat",
      "url": "https://live.upbeat.pw",
      "default": true
    }],
    "api": {
      "type": "custom",
      "endpoint": "https://upbeatradio.net/api/v1/stats",
      "presenter": "onair.name",
      "song": "song.title",
      "artist": "song.artist",
      "listeners": "listeners"
    }
  }
}
