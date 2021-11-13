const tags = require('../tags'),
      langs = require('langs')

module.exports = () => {
  return {
    "name": "TruckStopRadio",
    "logo": "https://truckstopradio.co.uk/img/default-avatar.png",
    "id": "5f9004f0-c833-4849-bdce-1e23e010256b",
    "tagline": "TruckStopRadio is a fully community-ran and online radio station for the Simulation community.",
    "tags": [tags.pop, tags.community, tags.gaming, tags.simulation],
    "language": langs.where('1', 'en'),
    "website": "https://truckstopradio.co.uk",
    "sources": [{
      "name": "TruckStopRadio",
      "url": "https://oreo.truckstopradio.co.uk/radio/8000/radio.mp3",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://oreo.truckstopradio.co.uk/api/nowplaying/1"
    }
  }
}
