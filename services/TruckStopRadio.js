const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "TruckStopRadio",
    "logo": "https://truckstopradio.co.uk/img/default-avatar.png",
    "aliases": ["Truck Stop Radio", "TSR"],
    "id": "7e714a82-6f00-4016-9cc4-7df34e5044b9",
    "tagline": "TruckStopRadio is a fully community-ran and online radio station for the Simulation community.",
    "tags": [tags.simulation, tags.community, tags.pop, tags.gaming],
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
