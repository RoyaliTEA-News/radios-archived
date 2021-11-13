const tags = require('../tags'),
  langs = require('langs');

module.exports = () => {
  return {
    "name": "Aqua",
    "logo": "https://i.imgur.com/WCzsUGP.png",
    "id": "64e1740a-2d57-4cd8-a52b-b44610887f5d",
    "tagline": "Aqua is an online radio created by the community for the community.",
    "tags": [tags.pop, tags.community],
    "language": langs.where('1', 'en'),
    "website": "https://itsaqua.net",
    "sources": [{
      "name": "Aqua",
      "url": "live.itsaqua.net",
      "default": true
    }],
    "api": {
      "type": "custom",
      "endpoint": "https://api.itsaqua.net/stats",
      "presenter": "presenter.name",
      "song": "nowplaying.title",
      "artist": "nowplaying.artist",
      "listeners": "listeners.total"
    }
  }
}
