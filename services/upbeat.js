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
          "url": "https://live.upbeat.pw"
      }],
      "api": {
          "type": "custom",
          "endpoint": "https://example.com/api/nowplaying/stationId",
          "song": "data.now_playing.song.title",
          "artist": "data.now_playing.song.artist",
          "listeners": "data.listeners.total"
      }
  }
}
