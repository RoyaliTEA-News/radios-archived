const genres = require('../genres')

export default () => {
  return {
    "name": "UpBeat",
    "id": "f738f1f9-6de8-4b03-9889-c5b795ff6c10",
    "tagline": "UpBeat is a community powered online radio, providing 24/7 ad-free radio entertainment.",
    "genres": [genres.pop, genres.gaming, genres.community],
    "language": "en_GB",
    "website": "https://upbeatradio.net",
    "sources": [{
      "name": "UpBeat",
      "url": "https://live.upbeat.pw",
      "default": true
    }],
    "api": {
      "type": "custom",
      "endpoint": "https://upbeatradio.net/api/v1/stats",
      "song": "data.song.title",
      "artist": "data.song.artist",
      "listeners": "data.listeners"
    }
  }
}
