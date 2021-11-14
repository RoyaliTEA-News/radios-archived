const tags = require('../tags'),
      langs = require('langs')

module.exports = () => {
  return {
    "name": "TruckStopRadio",
    "logo": "https://truckstopradio.co.uk/img/default-avatar.png",
    "aliases": ["TruckStop", "Truck Stop", "Truck Stop Radio", "TSR"],
    "id": "ASFafagds-SGSNHHnasfg-iyhgyds-dgushdg",
    "tagline": "TruckStopRadio is a fully community-ran and online radio station for the Simulation community.",
    "tags": [tags.simulation, tags.community, tags.pop, tags.gaming],
    "language": langs.where('1', 'en'),
    "website": "https://truckstopradio.co.uk",
    "discord": "https://discord.gg/c6KU3Cc",
    "premid": "TruckStopRadio",
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
